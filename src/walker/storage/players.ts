export interface TemplatePlayerInterface {
  x: number;
  y: number;
  world: string;
  prefix?: string;
}

export class Players {
  private readonly list: Record<string, TemplatePlayerInterface> = {};

  find(id: string): TemplatePlayerInterface | null {
    if (!this.list.hasOwnProperty(id)) {
      return null;
    }

    return this.list[id];
  }

  upsert(id: string, data: TemplatePlayerInterface): Players {
    if (!this.list.hasOwnProperty(id)) {
      this.list[id] = data;
    }

    this.list[id] = data;
    return this;
  }

  remove(id: string): boolean {
    if (!this.list.hasOwnProperty(id)) {
      return false;
    }

    delete this.list[id];
    return true;
  }
}
