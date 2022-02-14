import { Location } from './location';

export type LocationCoords = {
  x: number;
  y: number;
  world: string;
  prefix?: string;
};

export class Locations {
  protected readonly data: Record<string, Location> = {};

  static convertId(
    x: number,
    y: number,
    world: string,
    prefix?: string,
  ): string {
    return [x, y, world, prefix].join('-');
  }

  static createMaps(coords: LocationCoords, radius: number): LocationCoords[] {
    const arr = [];
    for (
      let y = Number(coords.y) - Number(radius);
      y <= Number(coords.y) + Number(radius);
      y++
    ) {
      for (
        let x = Number(coords.x) - Number(radius);
        x <= Number(coords.x) + Number(radius);
        x++
      ) {
        arr.push({
          x,
          y,
          world: coords.world,
          prefix: coords.prefix,
        });
      }
    }
    return arr;
  }

  add(id: string, location: Location): Locations {
    if (!this.data.hasOwnProperty(id)) {
      this.data[id] = location;
    }

    return this;
  }

  find(id: string): Location {
    if (!this.data.hasOwnProperty(id)) {
      return null;
    }

    return this.data[id];
  }
}
