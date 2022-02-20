import { Module } from '@nestjs/common';
import { GoController } from './go.controller';
import { GoService } from './go.service';
import {GameModule} from "../game/game.module";

@Module({
  controllers: [GoController],
  providers: [GoService],
  imports: [GameModule]
})
export class GoModule {}
