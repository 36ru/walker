import { Injectable } from '@nestjs/common';
import { game, Locations, UpdateLocation } from '../walker';
import { CoordsInterface } from '../interfaces';
import {PlayerService} from "../player/player.service";
import {UserPlayer} from "../walker/entity";

@Injectable()
export class MainService {
  constructor(private readonly playerService:PlayerService) {}

  getMain() {
    const login = 'u.fry';
    const player = this.playerService.getPlayer(login);

    const maps = this.createMaps(player.coords);
    const entities = this.getEntities(player.coords, login);

    const userPlayer = player.data as UserPlayer;
    const journal = userPlayer.getJournal();

    userPlayer.clearJournal();
    MainService.runEventInLocations(player.coords);

    return {
      title: 'Description location!',
      maps,
      entities,
      journal
    };
  }

  createMaps(coords: CoordsInterface) {
    const maps = Locations.createMaps(
      {
        x: coords.x,
        y: coords.y,
        world: coords.world,
        prefix: coords.prefix,
      },
      3,
    );
    const newMaps = [];

    for (let i = 0; i < maps.length; i++) {
      const location = game.locations.find(
        Locations.convertId(maps[i].x, maps[i].y, coords.world, coords.prefix),
      );

      newMaps.push({
        ...maps[i],
        isMyLocation: coords.x === maps[i].x && coords.y === maps[i].y,
        isPlayers: location && location.countPlayers() > 0,
      });
    }

    return newMaps;
  }

  getEntities(coords: CoordsInterface, exception: string) {
    const entities = [];
    const location = game.locations.find(
      Locations.convertId(coords.x, coords.y, coords.world, coords.prefix),
    );

    if (!location) {
      return [];
    }

    for (const entity of location.getPlayers()) {
      if (entity.getId() === exception) {
        continue;
      }

      entities.push({
        name: entity.getName(),
        level: entity.getLevel(),
        id: entity.getId()
      });
    }
    return entities;
  }

  static runEventInLocations(coords: CoordsInterface) {
    const maps = Locations.createMaps(
      {
        x: coords.x,
        y: coords.y,
        world: coords.world,
        prefix: coords.prefix,
      },
      3,
    );

    for (let i = 0; i < maps.length; i++) {
      const updateLocation = new UpdateLocation(game, {
        x: maps[i].x,
        y: maps[i].y,
        world: coords.world,
        prefix: coords.prefix,
      });

      updateLocation.update();
    }
  }
}
