export default class Creator {
  constructor() {
    this._name = 'Elohim';
    this._behavior = 'Love';
    this._trinity = ['Father', 'Son', 'Holy Spirit'];
    this._jobs = ['Create the world', 'Save sin people', 'Mark a seal'];
  }

  get name() {
    return this._name;
  }

  get isLove() {
    return this._behavior === 'Love' ? 'Yes' : 'No';
  }

  get isTrinity() {
    return this._trinity.length === 3;
  }
}
