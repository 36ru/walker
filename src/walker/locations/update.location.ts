import { LocationCoords, Locations } from './locations';
import { Game } from '../game';
import { BasePlayer, EnemyPlayer, UserPlayer } from '../entity';
import { Location } from './location';
import { Attack } from '../battle';

export class UpdateLocation {
  constructor(
    private readonly game: Game,
    private readonly coords: LocationCoords,
  ) {}

  private variablesLocations(): LocationCoords[] {
    return Locations.createMaps(
      {
        x: Number(this.coords.x),
        y: Number(this.coords.y),
        world: this.coords.world,
        prefix: this.coords.prefix,
      },
      1,
    ).filter(
      (coords) =>
        Locations.convertId(
          this.coords.x,
          this.coords.y,
          coords.world,
          coords.prefix,
        ) !==
        Locations.convertId(coords.x, coords.y, coords.world, coords.prefix),
    );
  }

  private static getRandomNumber(total: number) {
    return Math.floor(Math.random() * total);
  }

  private static randomLocation(locations: LocationCoords[]): string {
    const number = UpdateLocation.getRandomNumber(locations.length - 1);
    const coords: LocationCoords = locations[number];
    return Locations.convertId(coords.x, coords.y, coords.world, coords.prefix);
  }

  update(): void {
    const location = this.game.locations.find(
      Locations.convertId(
        this.coords.x,
        this.coords.y,
        this.coords.world,
        this.coords.prefix,
      ),
    );

    if (!location) {
      return;
    }

    const variablesLocations = this.variablesLocations();

    for (const entity of location.getPlayers()) {
      if (entity instanceof EnemyPlayer) {
        /**
         * ======================= THE CHASE ==========================
         */
        if (
          entity.isAttack() &&
          !location.findPlayer(entity.getTargetAttack())
        ) {
          let locationHunted = null;
          const maps = this.variablesLocations();

          for (let i = 0; i < maps.length; i++) {
            const map = maps[i];
            const locationId = Locations.convertId(
              map.x,
              map.y,
              map.world,
              map.prefix,
            );
            const location = this.game.locations.find(locationId);

            if (!location) {
              continue;
            }

            const player = location.findPlayer(entity.getTargetAttack());

            if (player) {
              locationHunted = locationId;
              location.addPlayer(entity);
              location.notifyUserPlayers(`пришел ${entity.getName()}`);
              break;
            }
          }

          if (locationHunted) {
            location.removePlayer(entity);
            continue;
          }
        }

        /**
         * ======================= SEARCH TARGET FOR ATTACK ==========================
         */
        if (!entity.isAttack() && entity instanceof EnemyPlayer) {
          const targets: BasePlayer[] = [];
          for (const targetEntity of location.getPlayers()) {
            targets.push(targetEntity);
          }

          const targetsFilter = targets.filter((target) => {
            if (
              target.getId() !== entity.getId() &&
              target instanceof UserPlayer &&
              !target.isGhost()
            ) {
              return true;
            }
          });

          if (targetsFilter.length > 0) {
            const randomTarget = UpdateLocation.getRandomNumber(
              targetsFilter.length - 1,
            );
            const targetId = targetsFilter[randomTarget].getId();

            entity.setTargetAttack(targetId);
            entity.setAttack(true);
          }
        }

        /**
         * ======================= MOVE ==========================
         */
        if (!entity.isAttack() && entity.getLastTimeMove() <= Date.now()) {
          const newLocationId =
            UpdateLocation.randomLocation(variablesLocations);
          const lastTimeMove = Date.now() + 1000 * 25;
          const newLocation = this.game.locations.find(newLocationId);

          if (newLocation) {
            newLocation.addPlayer(entity);
            newLocation.notifyUserPlayers(`пришел ${entity.getName()}`);
          } else {
            this.game.locations.add(newLocationId, new Location([entity]));
          }

          entity.setLastTimeMove(lastTimeMove);
          location.removePlayer(entity);
        }

        /**
         * ======================= ATTACK ==========================
         */
        const attackTarget = location.findPlayer(entity.getTargetAttack());

        if (entity.isAttack() && attackTarget) {
          entity.attack(new Attack(location, entity, attackTarget, false));
        }

        /**
         * ======================= HUNTED TARGET NOT FOUND ==========================
         */
        if (
          entity.isAttack() &&
          !location.findPlayer(entity.getTargetAttack())
        ) {
          entity.setAttack(false);
          entity.setTargetAttack(null);
        }
      }
    }
  }
}
