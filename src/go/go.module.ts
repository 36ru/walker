import { Module } from '@nestjs/common';
import { GoController } from './go.controller';
import { GoService } from './go.service';
import {game} from "../walker";

@Module({
  controllers: [GoController],
  providers: [GoService, {
    provide: 'GAME',
    useValue: game
  }],
})
export class GoModule {}
