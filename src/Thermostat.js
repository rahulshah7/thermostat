"use strict";

class Thermostat {
  constructor() {
    this._DEFAULT_TEMPERATURE = 20;
    this._MINIMUM_TEMPERATURE = 10;
    this._MAXIMUM_TEMPERATURE = 25;
    this._temperature = this._DEFAULT_TEMPERATURE;
    this.switchPowerSavingModeOn();
  }

  get temperature() {
    return this._temperature;
  }

  get isPowerSavingMode() {
    return this._isPowerSavingMode;
  }

  up() {
    if (this._isMaximumTemperature()) return;
    this._temperature++;
  }

  down() {
    if (this._isMinimumTemperature()) return;

    this._temperature--;
  }

  reset() {
    this._temperature = 20;
  }

  energyUsage() {
    if (this.temperature < 18) {
      return "low-usage";
    }

    if (this.temperature < 25) {
      return "medium-usage";
    } else {
      return "high-usage";
    }
  }

  switchPowerSavingModeOff() {
    this._MAXIMUM_TEMPERATURE = 32;
    this._isPowerSavingMode = false;
  }

  switchPowerSavingModeOn() {
    this._MAXIMUM_TEMPERATURE = 25;
    this._temperature = Math.min(this.temperature, this._MAXIMUM_TEMPERATURE);
    this._isPowerSavingMode = true;
  }

  _isMinimumTemperature() {
    return this._temperature === this._MINIMUM_TEMPERATURE;
  }

  _isMaximumTemperature() {
    return this._temperature === this._MAXIMUM_TEMPERATURE;
  }
}
