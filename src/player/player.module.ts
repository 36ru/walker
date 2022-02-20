import { Module } from '@nestjs/common';
import { PlayerService } from './player.service';
import {GameModule} from "../game/game.module";

@Module({
  providers: [PlayerService],
  imports: [GameModule],
  exports: [PlayerService],
})
export class PlayerModule {}
