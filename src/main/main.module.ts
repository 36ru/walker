import { Module } from '@nestjs/common';
import { MainController } from './main.controller';
import { MainService } from './main.service';
import { PlayerModule } from '../player/player.module';
import {GameModule} from "../game/game.module";

@Module({
  controllers: [MainController],
  providers: [MainService],
  imports: [PlayerModule, GameModule],
})
export class MainModule {}
