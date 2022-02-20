import {Inject, Injectable, MethodNotAllowedException} from '@nestjs/common';
import { Locations } from '../walker';
import {Game} from "../walker/game";

@Injectable()
export class PlayerService {
  constructor(@Inject('GAME') private readonly game:Game) {}

  getPlayer(id: string) {
    const playerInfo = this.game.storage.players.find(id);

    if (!playerInfo) {
      throw new MethodNotAllowedException('Character not found.');
    }

    const coords = {
      x: Number(playerInfo.x),
      y: Number(playerInfo.y),
      world: playerInfo.world,
      prefix: playerInfo.prefix,
    };

    const location = this.game.locations.find(
      Locations.convertId(coords.x, coords.y, coords.world, coords.prefix),
    );

    if (!location) {
      throw new MethodNotAllowedException('Location not found.');
    }

    const player = location.findPlayer(id);

    if (!player) {
      throw new MethodNotAllowedException('Character not found.');
    }

    return {
      coords,
      data: player,
      location,
    };
  }
}
