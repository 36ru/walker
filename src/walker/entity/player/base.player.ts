import { BaseCharacterInterface, BasePlayerInterface } from './interfaces';
import { Attack } from '../../battle';
import { ManagerCombatCharacteristic } from './characteristic';

export abstract class BasePlayer implements BasePlayerInterface {
  protected constructor(protected readonly character: BaseCharacterInterface) {}

  getId(): string {
    return this.character.id;
  }

  getName(): string {
    return this.character.name;
  }

  isGhost(): boolean {
    return this.character.ghost;
  }

  setId(id: string): BasePlayer {
    this.character.id = id;
    return this;
  }

  setGhost(value: boolean): BasePlayer {
    this.character.ghost = value;
    return this;
  }

  getTargetAttack(): string {
    return this.character.state.targetAttack;
  }

  isAttack(): boolean {
    return this.character.state.attack;
  }

  setAttack(value: boolean): BasePlayer {
    this.character.state.attack = value;
    return this;
  }

  setTargetAttack(entityId: string): BasePlayer {
    this.character.state.targetAttack = entityId;
    return this;
  }

  getLastTimeMove(): number {
    return this.character.state.lastTimeMove;
  }

  setLastTimeMove(value: number): BasePlayer {
    this.character.state.lastTimeMove = value;
    return this;
  }

  getLevel(): number {
    return this.character.level;
  }

  setLevel(value: number): BasePlayer {
    this.character.level = value;
    return this;
  }

  getLastTimeAttack(): number {
    return this.character.state.latsTimeAttack;
  }

  setLastTimeAttack(value: number): BasePlayer {
    this.character.state.latsTimeAttack = value;
    return this;
  }

  attack(attack: Attack): BasePlayer {
    attack.make();
    return this;
  }

  getMinLife(): number {
    return this.character.minLife;
  }

  setMinLife(value: number): BasePlayer {
    this.character.minLife = value;
    return this;
  }

  getMaxLife(): number {
    return this.character.maxLife;
  }

  setMaxLife(value: number): BasePlayer {
    this.character.maxLife = value;
    return this;
  }

  getCombatCharacteristic(): ManagerCombatCharacteristic {
    return new ManagerCombatCharacteristic(this.character.combatCharacteristic);
  }

  abstract clone(): BasePlayer;

  transformCharacterJSON(
    value: BaseCharacterInterface,
  ): BaseCharacterInterface {
    return JSON.parse(JSON.stringify(value));
  }
}
