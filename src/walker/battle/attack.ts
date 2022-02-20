import { BasePlayer, UserPlayer } from '../entity';
import { Location } from '../locations';

export class Attack {
  constructor(
    private location: Location,
    private readonly from: BasePlayer,
    private readonly to: BasePlayer,
    private readonly rangedAttack: boolean,
  ) {}

  private isTargetClose(): boolean {
    return !!this.location.findPlayer(this.to.getId());
  }

  make(): void {
    if (!this.isTargetClose() && !this.rangedAttack) {
      return;
    }

    if (this.from.getLastTimeAttack() > Date.now()) {
      return;
    }

    if (this.to.isGhost()) {
      this.from.setAttack(false);
      this.from.setTargetAttack(null);
      return;
    }

    const lastTimeAttack = Date.now() + 3 * 1000;

    this.from.setLastTimeAttack(lastTimeAttack);

    const damage = Math.floor(Math.random() * 100);
    const remainsLife = this.to.getMinLife() - damage;

    if (remainsLife > 0) {
      this.to.setMinLife(remainsLife);
    } else {
      this.to.setMinLife(0);
      this.to.setGhost(true);
    }

    if (this.from instanceof UserPlayer) {
      this.from.addJournal(`Вы нанесли +${damage} по [${this.to.getName()}]`);
    }

    if (this.to instanceof UserPlayer) {
      this.to.addJournal(`[${this.from.getName()}] нанес вам -${damage}`);
    }

    if (this.to instanceof UserPlayer && this.to.isGhost()) {
      this.to.addJournal(`Вы погибли от [${this.from.getName()}]`);
    }
  }
}
