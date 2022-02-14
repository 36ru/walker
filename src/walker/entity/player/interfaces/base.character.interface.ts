export interface BaseCharacterInterface {
  id: string;
  name: string;
  level: number;
  ghost: boolean;
  state: {
    attack: boolean;
    targetAttack: string;
    lastTimeMove: number;
  };
}
