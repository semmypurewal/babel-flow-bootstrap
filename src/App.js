// @flow

// async factory method
export async function createApp(name: string): Promise<App> {
  return new Promise(resolve => {
    setTimeout(resolve.bind(this, new App(name)), 2000);
  });
}

export class App {
  _name: string;

  constructor(name: string) {
    this._name = name;
  }

  run(): void {
    console.log(`hello from ${this._name}`);
  }
}
