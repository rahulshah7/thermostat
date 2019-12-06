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
});
