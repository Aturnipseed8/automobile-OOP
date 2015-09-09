import automobile from './automobile';

export default class coupe extends automobile {
constructor (make, model, engine) {
  super('compact', 2, true, 'red');
  this._make = make;
  this._model = model;
  this._engine = engine;
}
}