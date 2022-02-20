import { Module } from '@nestjs/common';
import { MainController } from './main.controller';
import { MainService } from './main.service';
import { PlayerModule } from '../player/player.module';
import {game} from "../walker";

@Module({
  controllers: [MainController],
  providers: [MainService, {
    provide: 'GAME',
    useValue: game
  }],
  imports: [PlayerModule],
})
export class MainModule {}
