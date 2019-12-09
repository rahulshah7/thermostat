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

  function updateWeatherDisplay(city) {
    $.getJSON(
      `https://api.weatherbit.io/v2.0/current?key=396a74755ade41ecb83d23bb3011222e&city=${city}`,
      function(res) {
        const weatherData = res.data[0];
        $(".display--weather--temperature")[0].innerText = weatherData.temp;
        $(".display--weather--city")[0].innerText = weatherData.city_name;
        $(".display--weather--country")[0].innerText = weatherData.country_code;
      }
    );
  }

  // Event Listeners

  $(".controls--weather-city").on("change", function() {
    updateWeatherDisplay(this.value);
  });

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
  updateWeatherDisplay("LondonUK");
});
