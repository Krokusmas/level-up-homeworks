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
// 1. Сделать входящие параметры.
// 2. Добавить пробелы в 5 / 9.
// 3. Убрать запятые после if.
// 4. Создать костанты.
// 5. param.length положить в константу
// 6. при любом занчении делаю парсфлоат(парам). это можно сделать один раз.

// To do
// 1. Добавить проверки на неверный формат
// 4. Описать всю логику через класс TemperatureConverter с основным методом convert()

let temperatureConverter = class TemperatureConverter {
  convert (param) {
    let celsius = 0;
    let fahrenheit = 0;
    let kelvin = 0;
    let result = {};
    const kelvinConst = 273.15;
    const fahrenheitConst = 32;
    param += '';
    let temperatureScale = param.charAt(param.length - 1);
    let value = parseFloat(param);
    if (temperatureScale === 'C') { // Блок для Цельсия 
      celsius = value;
      fahrenheit = Math.round(9 / 5 * celsius + fahrenheitConst);
      kelvin = Math.round(celsius + kelvinConst);
      result = {
        K: kelvin,
        F: fahrenheit
      };
    }
    if (temperatureScale === 'K') { // Блок для Кельвина
      kelvin = value;
      celsius = Math.round(kelvin - kelvinConst);
      fahrenheit = Math.round(9 / 5 * (kelvin - kelvinConst) + fahrenheitConst);
      result = {
        C: celsius,
        F: fahrenheit
      };
    }
    if (temperatureScale === 'F') { // Блок для Фаренгейта
      fahrenheit = value;
      celsius = Math.round(5 / 9 * (fahrenheit - fahrenheitConst));
      kelvin = Math.round((fahrenheit - fahrenheitConst) * (5 / 9) + kelvinConst);
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

new temperatureConverter().convert('72C');
