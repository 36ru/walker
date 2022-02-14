import { Locations } from '../locations';
import { EventEmitter } from 'events';
import { Storage } from '../storage';

export class Game extends EventEmitter {
  public readonly storage: Storage = new Storage();

  public readonly locations: Locations = new Locations();
}
