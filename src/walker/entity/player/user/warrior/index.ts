import { UserCharacterInterface } from '../interfaces';
import { UserPlayer } from '../user.player';

export type WarriorUserCharacterInterface = UserCharacterInterface;

export class WarriorUserPlayer extends UserPlayer {
  constructor(protected readonly character: WarriorUserCharacterInterface) {
    super(character);
  }

  clone(): WarriorUserPlayer {
    return new WarriorUserPlayer(this.character);
  }
}
