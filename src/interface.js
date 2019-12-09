const thermostat = new Thermostat();

$(document).ready(function() {
  // Functions

  function updateTemperatureDisplay() {
    $(".display--temperature-degrees")[0].innerText = thermostat.temperature;
    $(".display--temperature-background").removeClass(function(
      _index,
      className
    ) {
      return className.match(/\w+-usage/)[0];
    });
    $(".display--temperature-background").addClass(thermostat.energyUsage());
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
