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
    lastTimeMove: 0,
  },
  journal:[]
});

const orkWarrior = new EnemyPlayer({
  id: 'ork.warrior',
  name: 'орк-воин',
  level:10,
  ghost: false,
  state: {
    attack: false,
    targetAttack: '',
    lastTimeMove: 0,
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
