import {CombatCharacteristicInterface, DamageRange} from './interfaces';

export class ManagerCombatCharacteristic {
  constructor(
    private readonly combatCharacteristic: CombatCharacteristicInterface,
  ) {}

  getCuttingDamage() : DamageRange {
    return this.combatCharacteristic.damage.cutting;
  }

  setCuttingDamage(value:DamageRange): ManagerCombatCharacteristic {
    this.combatCharacteristic.damage.cutting = value;
    return this;
  }

  getCoolDamage() : DamageRange {
    return this.combatCharacteristic.damage.cool;
  }

  setCoolDamage(value:DamageRange): ManagerCombatCharacteristic {
    this.combatCharacteristic.damage.cool = value;
    return this;
  }

  getCrushingDamage() : DamageRange {
    return this.combatCharacteristic.damage.crushing;
  }

  setCrushingDamage(value:DamageRange): ManagerCombatCharacteristic {
    this.combatCharacteristic.damage.crushing = value;
    return this;
  }

  getChoppingDamage() : DamageRange {
    return this.combatCharacteristic.damage.chopping;
  }

  setChoppingDamage(value:DamageRange): ManagerCombatCharacteristic {
    this.combatCharacteristic.damage.chopping = value;
    return this;
  }

  getMagicDamage() : DamageRange {
    return this.combatCharacteristic.damage.magic;
  }

  setMagicDamage(value:DamageRange): ManagerCombatCharacteristic {
    this.combatCharacteristic.damage.magic = value;
    return this;
  }


  getCuttingArmor() : number {
    return this.combatCharacteristic.armor.cutting;
  }

  setCuttingArmor(value:number): ManagerCombatCharacteristic {
    this.combatCharacteristic.armor.cutting = value;
    return this;
  }

  getCoolArmor() : number {
    return this.combatCharacteristic.armor.cool;
  }

  setCoolArmor(value:number): ManagerCombatCharacteristic {
    this.combatCharacteristic.armor.cool = value;
    return this;
  }

  getCrushingArmor() : number {
    return this.combatCharacteristic.armor.crushing;
  }

  setCrushingArmor(value:number): ManagerCombatCharacteristic {
    this.combatCharacteristic.armor.crushing = value;
    return this;
  }

  getChoppingArmor() : number {
    return this.combatCharacteristic.armor.chopping;
  }

  setChoppingArmor(value:number): ManagerCombatCharacteristic {
    this.combatCharacteristic.armor.chopping = value;
    return this;
  }

  getMagicArmor() : number {
    return this.combatCharacteristic.armor.magic;
  }

  setMagicArmor(value:number): ManagerCombatCharacteristic {
    this.combatCharacteristic.armor.magic = value;
    return this;
  }
}
