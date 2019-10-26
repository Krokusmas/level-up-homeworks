'use strict';
// Цельсий в Фаренгейт  T(f) = 9/5 * T(c) + 32
// Цельсий в Кельвин    °C + 273,15 = K

// Кельвины в Фаренгейта.  ºF = 1.8 x (K - 273) + 32.
// Кельвинов в Цельсия. ºC = K - 273.15

// фаренгейт в цельсий   T(c) = 5/9 * (T(f) - 32)
// Фаренгейт в Кельвин   (32 °F − 32) × 5/9 + 273,15 = 273,15 K

// Вход: 26C, 299K, 79F
// Выход: в json формате, целые значения всех шкал кроме той, которая задавалась. {K: 299, F: 79}



function temperatureConverter () {
  let celsius = 0;
  let fahrenheit = 0;
  let kelvin = 0;
  let result = {};
  let temperature = prompt('Введите значение температуры C, K или F. Дробное пишется через точку. Например 100.2C', '');
  if (temperature === null) {
    console.log('Ввод отменен.');
    return;
  }
  if (temperature.charAt(temperature.length - 1) === 'C') { // Блок для Цельсия 
    celsius = parseFloat(temperature);
    fahrenheit = Math.round(1.8 * celsius + 32);
    kelvin = Math.round(celsius + 273.15);
    result = {
      K: kelvin,
      F: fahrenheit
    };
  };
  if (temperature.charAt(temperature.length - 1) === 'K') { // Блок для Кельвина
    kelvin = parseFloat(temperature);
    celsius = Math.round(kelvin - 273.15);
    fahrenheit = Math.round(1.8 * (kelvin - 273) + 32);
    result = {
      C: celsius,
      F: fahrenheit
    };
  };
  if (temperature.charAt(temperature.length - 1) === 'F') { // Блок для Фаренгейта
    fahrenheit = parseFloat(temperature);
    celsius = Math.round(5/9 * (fahrenheit - 32));
    kelvin = Math.round((fahrenheit - 32) * (5/9) + 273,15);
    result = {
      C: celsius,
      K: kelvin
    };
  };
  let str = JSON.stringify(result);
  console.log(str);
  return str;
}
temperatureConverter();
