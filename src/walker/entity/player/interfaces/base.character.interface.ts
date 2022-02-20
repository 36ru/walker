import { CombatCharacteristicInterface } from '../characteristic';

export interface BaseCharacterInterface {
  id: string;
  name: string;
  level: number;
  ghost: boolean;
  state: {
    attack: boolean;
    targetAttack: string;
    latsTimeAttack: number;
    lastTimeMove: number;
  };
  minLife: number;
  maxLife: number;
  combatCharacteristic: CombatCharacteristicInterface;
}
