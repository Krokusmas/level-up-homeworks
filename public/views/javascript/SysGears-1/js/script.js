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
// 5. temperature.length положить в константу
// 6. при любом занчении делаю парсфлоат(парам). это можно сделать один раз.
// 7. Описать всю логику через класс TemperatureConverter с основным методом convert()
// 1) Добавил три метода внутри основного метода onvert, но выдается ошибка, что там неуместна закрывающая скобка метода. Не пойму в чем косяк.
// 2) Добавил статик поля с константами и зменил onst в названии на kelvinNumber и т.д.
// 3) Входной параметр изменил с param на temperature.
// 4) такая запись зачем нужна? let temperatureConverter = class TemperatureConverter ...... Я не знаю. Мы типа сохраняем в переменную код функции для удобства вызова, но я сам не понимаю, если конструктор имеет такое же название только с заглавной и вызвать его можно так же с new.

// To do
// 1. Добавить проверки на неверный формат

let temperatureConverter = class TemperatureConverter {
  static kelvinNumber = 273.15;
  static fahrenheitNumber = 32;

  convert (temperature) {
    let celsius = 0;
    let fahrenheit = 0;
    let kelvin = 0;
    let result = {};
    let temperatureScale = temperature.charAt(temperature.length - 1);
    let value = parseFloat(temperature);

      fromCelsium () {
        if (temperatureScale === 'C') { // Блок для Цельсия 
          celsius = value;
          fahrenheit = Math.round(9 / 5 * celsius + fahrenheitNumber);
          kelvin = Math.round(celsius + kelvinNumber);
          result = {
            K: kelvin,
            F: fahrenheit
          };
        }
      }
      fromKelvin () {
        if (temperatureScale === 'K') { // Блок для Кельвина
          kelvin = value;
          celsius = Math.round(kelvin - kelvinNumber);
          fahrenheit = Math.round(9 / 5 * (kelvin - kelvinNumber) + fahrenheitNumber);
          result = {
            C: celsius,
            F: fahrenheit
          };
        }
      }
      fromFahrenheit () {
        if (temperatureScale === 'F') { // Блок для Фаренгейта
          fahrenheit = value;
          celsius = Math.round(5 / 9 * (fahrenheit - fahrenheitNumber));
          kelvin = Math.round((fahrenheit - fahrenheitNumber) * (5 / 9) + kelvinNumber);
          result = {
            C: celsius,
            K: kelvin
          };
        }
      }

    let str = JSON.stringify(result);
    console.log(str);
    return str;
  }
}

new temperatureConverter().convert('72C').fromCelsium();
