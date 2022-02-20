import { Module } from '@nestjs/common';
import { MainModule } from './main/main.module';
import { GoModule } from './go/go.module';
import { PlayerModule } from './player/player.module';

@Module({
  imports: [MainModule, GoModule, PlayerModule],
  exports: [],
  controllers: [],
})
export class AppModule {}
