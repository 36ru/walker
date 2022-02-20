import { Game } from './game';
import { Locations, Location } from './locations';
import { EnemyPlayer, WarriorUserPlayer } from './entity';

export * from './locations';
export const game = new Game();

game.storage.players.upsert('u.fry', {
  x: 4,
  y: 3,
  world: 'world',
});

const userWarrior = new WarriorUserPlayer({
  id: 'u.fry',
  name: 'FRY',
  level: 20,
  ghost: false,
  state: {
    attack: false,
    targetAttack: '',
    latsTimeAttack: 0,
    lastTimeMove: 0,
  },
  journal: [],
  minLife: 2000,
  maxLife: 2000,
  combatCharacteristic: {
    damage: {
      cutting: { min: 0, max: 0 },
      cool: { min: 0, max: 0 },
      crushing: { min: 0, max: 0 },
      chopping: { min: 0, max: 0 },
      magic: { min: 0, max: 0 },
    },
    armor: {
      cutting: 0,
      cool: 0,
      crushing: 0,
      chopping: 0,
      magic: 0,
    },
    params: {
      hit: 0,
      evade: 0,
      parsing: 0,
      evadeMagic: 0,
      parsingMagic: 0
    }
  },
});

const orkWarrior = new EnemyPlayer({
  id: 'ork.warrior',
  name: 'орк-воин',
  level: 10,
  ghost: false,
  state: {
    attack: false,
    targetAttack: '',
    latsTimeAttack: 0,
    lastTimeMove: 0,
  },
  minLife: 200,
  maxLife: 200,
  combatCharacteristic: {
    damage: {
      cutting: { min: 0, max: 0 },
      cool: { min: 0, max: 0 },
      crushing: { min: 0, max: 0 },
      chopping: { min: 0, max: 0 },
      magic: { min: 0, max: 0 },
    },
    armor: {
      cutting: 0,
      cool: 0,
      crushing: 0,
      chopping: 0,
      magic: 0,
    },
    params: {
      hit: 0,
      evade: 0,
      parsing: 0,
      evadeMagic: 0,
      parsingMagic: 0
    }
  },
});

game.locations.add(
  Locations.convertId(4, 4, 'world'),
  new Location([
    orkWarrior.clone().setId('ork.warrior.1'),
    orkWarrior.clone().setId('ork.warrior.2'),
    orkWarrior.clone().setId('ork.warrior.3'),
  ]),
);

game.locations.add(
  Locations.convertId(4, 3, 'world'),
  new Location([userWarrior.clone()]),
);
