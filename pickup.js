import automobile from './automobile';

export default class pickup extends automobile {
constructor (make, model, engine) {
  super('large', 2, true, 'blue');
  this._make = make;
  this._model = model;
  this._engine = engine;
}
}