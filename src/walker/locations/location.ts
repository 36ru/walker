import { BasePlayer, UserPlayer } from '../entity';

export class Location {
  private readonly players = new Map();

  constructor(players: BasePlayer[]) {
    this.addPlayers(players);
  }

  countPlayers(): number {
    return this.players.size;
  }

  getPlayers(): IterableIterator<BasePlayer> {
    return this.players.values();
  }

  findPlayer(id: string): BasePlayer | null {
    if (!this.players.has(id)) {
      return null;
    }

    return this.players.get(id);
  }

  addPlayer(player: BasePlayer): Location {
    this.players.set(player.getId(), player);
    return this;
  }

  removePlayer(player: BasePlayer): Location {
    this.players.delete(player.getId());
    return this;
  }

  addPlayers(players: BasePlayer[]): Location {
    for (let i = 0; i < players.length; i++) {
      const player = players[i];
      this.addPlayer(player);
    }

    return this;
  }

  notifyUserPlayers(messages: string, exceptId?: string): Location {
    for (const player of this.getPlayers()) {
      if (player.getId() === exceptId || !(player instanceof UserPlayer)) {
        continue;
      }

      player.addJournal(messages);
    }
    return this;
  }
}
