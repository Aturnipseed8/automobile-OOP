import automobile from './automobile';

export default class sedan extends automobile {
constructor (make, model, engine) {
  super('midsize', 4, false, 'beige');
  this._make = make;
  this._model = model;
  this._engine = engine;
}
}
