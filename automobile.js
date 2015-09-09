export default class automobile {

constructor(size, numberOfDoors, gas, color) {
  this._size = size;
  this._numberOfDoors = numberOfDoors;
  this._gas = gas;
  this._tread = tread;
  this._stickShift = stickShift;
  this._color = color;
}

get size () {
  return this._size;
}

set size (size) {
  if (typeof (size) === 'string') {
    this._size = size;
  } else {
    throw new TypeError('size must be a string');
  }
}

get numberOfDoors () {

  return this._numberOfDoors;
}

set numberOfDoors (numberOfDoors) {
  if (typeof (numberOfDoors) === 'number') {
    this._numberOfDoors = numberOfDoors;
  } else {
    throw new TypeError('numberOfDoors must be a number');
  }
}

get gas () {
  return this._gas;
}

set gas (gas) {
  this._gas = gas;
}

get electric () {
  return !this._gas;
}

set electric (electric) {
  this._gas = !electric;
}

get color () {
  return this._color;
}

set color (color) {
  if (typeof (color) === 'string') {
    this._color = color;
  } else {
    throw new TypeError('color must be a string');
  }
}

}


