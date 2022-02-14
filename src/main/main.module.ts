import { Module } from '@nestjs/common';
import { MainController } from './main.controller';
import { MainService } from './main.service';
import {PlayerModule} from "../player/player.module";

@Module({
  controllers: [MainController],
  providers: [MainService],
  imports: [PlayerModule]
})
export class MainModule {}
