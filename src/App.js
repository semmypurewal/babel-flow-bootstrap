// @flow

export default class App {
  _name: string;

  constructor(name: string) {
    this._name = name;
  }

  run(): void {
    console.log(`hello from ${this._name}`);
  }
}
