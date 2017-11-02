export default class Man {
  constructor() {
    this._name = null;
    this._behaviors = [];
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  addBehavior(whichBehavior) {
    this._behaviors.push(whichBehavior);
  }
}
