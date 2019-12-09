const thermostat = new Thermostat();

$(document).ready(function() {
  // Functions

  function updateTemperatureDisplay() {
    $(".display--temperature")[0].innerText = thermostat.temperature;
  }

  // Event Listeners

  $(".controls--up").on("click", function() {
    thermostat.up();
    updateTemperatureDisplay();
  });

  $(".controls--down").on("click", function() {
    thermostat.down();
    updateTemperatureDisplay();
  });

  $(".controls--reset").on("click", function() {
    thermostat.reset();
    updateTemperatureDisplay();
  });

  $(".controls--power-saving-mode:checkbox").change(function() {
    if ($(this).is(":checked")) {
      thermostat.switchPowerSavingModeOn();
      updateTemperatureDisplay();
      return;
    }
    thermostat.switchPowerSavingModeOff();
  });

  // Function Calls
  updateTemperatureDisplay();
});
