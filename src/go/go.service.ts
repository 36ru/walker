import {HttpException, HttpStatus, Inject, Injectable} from '@nestjs/common';
import { Locations, Location } from '../walker';
import { CoordsInterface } from '../interfaces';
import {Game} from "../walker/game";

@Injectable()
export class GoService {
  constructor(@Inject('GAME') private readonly game: Game) {
  }

  move(newCoords: CoordsInterface) {
    const login = 'u.fry';
    const myPlayer = this.game.storage.players.find(login);
    const newIdLocation = Locations.convertId(
      newCoords.x,
      newCoords.y,
      myPlayer.world,
    );

    if (!myPlayer) {
      return new HttpException('Please log in', HttpStatus.UNAUTHORIZED);
    }

    const location = this.game.locations.find(
      Locations.convertId(myPlayer.x, myPlayer.y, myPlayer.world),
    );

    if (!location) {
      return false;
    }

    const player = location.findPlayer(login);

    if (!player) {
      return false;
    }

    const newLocation = this.game.locations.find(newIdLocation);

    if (!newLocation) {
      this.game.locations.add(newIdLocation, new Location([player]));
    } else {
      newLocation.notifyUserPlayers(`пришел ${player.getName()}`);
      newLocation.addPlayer(player);
    }

    myPlayer.x = newCoords.x;
    myPlayer.y = newCoords.y;

    location.removePlayer(player);
  }
}
