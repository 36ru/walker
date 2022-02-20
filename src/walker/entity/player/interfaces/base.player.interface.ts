import { Attack } from '../../../battle';
import { ManagerCombatCharacteristic } from '../characteristic';

export interface BasePlayerInterface {
  getId(): string;
  getName(): string;
  getLevel(): number;
  setLevel(value: number): BasePlayerInterface;
  isGhost(): boolean;
  setId(id: string): BasePlayerInterface;
  setGhost(value: boolean): BasePlayerInterface;
  getTargetAttack(): string;
  setTargetAttack(entityId: string): BasePlayerInterface;
  isAttack(): boolean;
  setAttack(value: boolean): BasePlayerInterface;
  getLastTimeMove(): number;
  setLastTimeMove(value: number): BasePlayerInterface;
  getLastTimeAttack(): number;
  setLastTimeAttack(value: number): BasePlayerInterface;
  attack(attack: Attack): BasePlayerInterface;
  getMinLife(): number;
  setMinLife(value: number): BasePlayerInterface;
  getMaxLife(): number;
  setMaxLife(value: number): BasePlayerInterface;
  getCombatCharacteristic(): ManagerCombatCharacteristic;
}
