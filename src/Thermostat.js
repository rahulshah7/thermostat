"use strict";

class Thermostat {
  constructor() {
    this._DEFAULT_TEMPERATURE = 20;
    this._MINIMUM_TEMPERATURE = 10;
    this._temperature = this._DEFAULT_TEMPERATURE;
  }

  get temperature() {
    return this._temperature;
  }

  up() {
    this._temperature++;
  }

  down() {
    if (this._isMinimumTemperature()) return;

    this._temperature--;
  }

  _isMinimumTemperature() {
    return this._temperature === this._MINIMUM_TEMPERATURE;
  }
}
