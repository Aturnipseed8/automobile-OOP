import automobile from './automobile';

export default class van extends automobile {
constructor (make, model, engine) {
  super('full-size', 4, true, 'silver');
  this._make = make;
  this._model = model;
  this._engine = engine;
}
}