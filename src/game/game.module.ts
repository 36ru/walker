import { Module } from '@nestjs/common';
import {game} from "../walker";

@Module({
    exports: ['GAME'],
    providers: [
        {
            provide: 'GAME',
            useValue: game
        }
    ]
})
export class GameModule {}
