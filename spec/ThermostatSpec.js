"use strict";

describe("Thermostat", function() {
  let thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("#temperature", function() {
    it("starts at 20 degrees", function() {
      expect(thermostat.temperature).toEqual(thermostat._DEFAULT_TEMPERATURE);
    });
  });

  describe("#up", function() {
    it("increases temperature by 1 degree", function() {
      thermostat.up();
      expect(thermostat.temperature).toEqual(
        thermostat._DEFAULT_TEMPERATURE + 1
      );
    });
  });

  describe("#down", function() {
    it("decreases temperature by 1 degree", function() {
      thermostat.down();
      expect(thermostat.temperature).toEqual(
        thermostat._DEFAULT_TEMPERATURE - 1
      );
    });

    it("does not decrease the temperature to below 10 degrees", function() {
      for (let i = 0; i < 15; i++) {
        thermostat.down();
      }
      expect(thermostat.temperature).toEqual(thermostat._MINIMUM_TEMPERATURE);
    });
  });

  describe("#isPowerSavingMode", function() {
    it("is on by default", function() {
      expect(thermostat.isPowerSavingMode).toBe(true);
    });
  });

  describe("#switchPowerSavingModeOn", function() {
    it("has a maximum temperature of 25 degrees", function() {
      for (let i = 0; i < 15; i++) {
        thermostat.up();
      }
      expect(thermostat.isPowerSavingMode).toEqual(true);
      expect(thermostat.temperature).toEqual(25);
    });
  });

  describe("#switchPowerSavingModeOff", function() {
    it("has a maximum temperature of 32 degrees", function() {
      thermostat.switchPowerSavingModeOff();
      for (let i = 0; i < 15; i++) {
        thermostat.up();
      }
      expect(thermostat.isPowerSavingMode).toEqual(false);
      expect(thermostat.temperature).toEqual(32);
    });
  });

  describe("#reset", function() {
    it("resets the temperature back to 20 degrees", function() {
      thermostat.reset();
      expect(thermostat.temperature).toEqual(thermostat._DEFAULT_TEMPERATURE);
    });
  });
});
