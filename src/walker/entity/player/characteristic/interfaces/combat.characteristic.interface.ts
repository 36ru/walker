export type DamageRange = {
  min: number;
  max: number;
};

export interface CombatCharacteristicInterface {
  damage: {
    cutting: DamageRange,
    cool: DamageRange,
    crushing: DamageRange,
    chopping: DamageRange,
    magic: DamageRange,
  };
  armor: {
    cutting: number,
    cool: number,
    crushing: number,
    chopping: number,
    magic: number,
  };
  params: {
    hit: number,
    evade: number,
    parsing: number,
    evadeMagic: number,
    parsingMagic: number
  }
}
