'use strict';
// Цельсий в Фаренгейт  T(f) = 9 / 5 * T(c) + 32
// Цельсий в Кельвин    °C + 273,15 = K

// Кельвины в Фаренгейта.  ºF = 1.8 x (K - 273) + 32.
// Кельвинов в Цельсия. ºC = K - 273.15

// фаренгейт в цельсий   T(c) = 5 / 9 * (T(f) - 32)
// Фаренгейт в Кельвин   (32 °F − 32) × 5 / 9 + 273,15 = 273,15 K

// Вход: 26C, 299K, 79F
// Выход: в json формате, целые значения всех шкал кроме той, которая задавалась. {K: 299, F: 79}

// Fixed
// 1. Добавил статические свойства.

// To do
// 1. Добавить проверки на неверный формат
// 2. Добавить вспомогательные методы вместо блоков иф.

class TemperatureConverter {
  static kelvinNumber = 273.15;
  static fahrenheitNumber = 32;

  convert (temperature) {
    let celsius = 0;
    let fahrenheit = 0;
    let kelvin = 0;
    let result = {};
    let temperatureScale = temperature.charAt(temperature.length - 1);
    let value = parseFloat(temperature);


        if (temperatureScale === 'C') { // Блок для Цельсия 
          celsius = value;
          fahrenheit = Math.round(9 / 5 * celsius + TemperatureConverter.fahrenheitNumber);
          kelvin = Math.round(celsius + TemperatureConverter.kelvinNumber);
          result = {
            K: kelvin,
            F: fahrenheit
          };
        }


        if (temperatureScale === 'K') { // Блок для Кельвина
          kelvin = value;
          celsius = Math.round(kelvin - TemperatureConverter.kelvinNumber);
          fahrenheit = Math.round(9 / 5 * (kelvin - TemperatureConverter.kelvinNumber) + TemperatureConverter.fahrenheitNumber);
          result = {
            C: celsius,
            F: fahrenheit
          };
        }


        if (temperatureScale === 'F') { // Блок для Фаренгейта
          fahrenheit = value;
          celsius = Math.round(5 / 9 * (fahrenheit - TemperatureConverter.fahrenheitNumber));
          kelvin = Math.round((fahrenheit - TemperatureConverter.fahrenheitNumber) * (5 / 9) + TemperatureConverter.kelvinNumber);
          result = {
            C: celsius,
            K: kelvin
          };
        }

    let str = JSON.stringify(result);
    console.log(str);
    return str;
  }
}

new TemperatureConverter().convert('72K');
