import {Injectable, MethodNotAllowedException} from '@nestjs/common';
import {game, Locations} from "../walker";

@Injectable()
export class PlayerService {
    getPlayer(id:string) {
        const playerInfo = game.storage.players.find(id);

        if (!playerInfo) {
            throw new MethodNotAllowedException('Character not found.');
        }

        const coords = {
            x: Number(playerInfo.x),
            y: Number(playerInfo.y),
            world: playerInfo.world,
            prefix: playerInfo.prefix
        };

        const location = game.locations.find(Locations.convertId(coords.x,coords.y,coords.world,coords.prefix));

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
            location
        }
    }
}
