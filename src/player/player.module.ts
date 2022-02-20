import { Module } from '@nestjs/common';
import { PlayerService } from './player.service';
import {game} from "../walker";

@Module({
  providers: [PlayerService, {
    provide: 'GAME',
    useValue: game
  }],
  exports: [PlayerService],
})
export class PlayerModule {}
