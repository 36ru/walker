import { BasePlayer } from '../base.player';
import { UserCharacterInterface } from './interfaces';

export class UserPlayer extends BasePlayer {
  constructor(protected readonly character: UserCharacterInterface) {
    super(character);
  }

  getJournal(): string[] {
    return this.character.journal;
  }

  addJournal(messages: string): UserPlayer {
    this.character.journal.push(messages);
    return this;
  }

  clearJournal(): UserPlayer {
    this.character.journal = [];
    return this;
  }

  clone(): UserPlayer {
    return new UserPlayer(this.character);
  }
}
