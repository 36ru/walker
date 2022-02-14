import { BasePlayer } from '../base.player';
import { EnemyCharacterInterface } from './interfaces';

export type CommonEnemyCharacterInterface = EnemyCharacterInterface;

export class EnemyPlayer extends BasePlayer {
  constructor(protected readonly character: CommonEnemyCharacterInterface) {
    super(character);
  }

  clone(): EnemyPlayer {
    return new EnemyPlayer(this.transformCharacterJSON(this.character));
  }
}
