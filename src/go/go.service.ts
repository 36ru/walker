import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { game, Locations, Location } from '../walker';
import { CoordsInterface } from '../interfaces';

@Injectable()
export class GoService {
  move(newCoords: CoordsInterface) {
    const login = 'u.fry';
    const myPlayer = game.storage.players.find(login);
    const newIdLocation = Locations.convertId(
      newCoords.x,
      newCoords.y,
      myPlayer.world,
    );

    if (!myPlayer) {
      return new HttpException('Please log in', HttpStatus.UNAUTHORIZED);
    }

    const location = game.locations.find(
      Locations.convertId(myPlayer.x, myPlayer.y, myPlayer.world),
    );

    if (!location) {
      return false;
    }

    const player = location.findPlayer(login);

    if (!player) {
      return false;
    }

    const newLocation = game.locations.find(newIdLocation);

    if (!newLocation) {
      game.locations.add(newIdLocation, new Location([player]));
    } else {
      newLocation.notifyUserPlayers(newLocation.getPlayers(),`пришел ${player.getName()}`);
      newLocation.addPlayer(player);
    }

    myPlayer.x = newCoords.x;
    myPlayer.y = newCoords.y;

    location.removePlayer(player);
  }
}
