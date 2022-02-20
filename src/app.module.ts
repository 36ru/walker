import { Module } from '@nestjs/common';
import { MainModule } from './main/main.module';
import { GoModule } from './go/go.module';
import { PlayerModule } from './player/player.module';
import {GameModule} from "./game/game.module";

@Module({
  imports: [MainModule, GoModule, PlayerModule, GameModule],
  exports: [],
  controllers: [],
})
export class AppModule {}
