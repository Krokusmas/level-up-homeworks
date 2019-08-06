'use strict';
// Unit link - http://web.archive.org/web/20190603134523/http://learn.javascript.ru/object-conversion

// Task 1
// Потому что у массива нет метода valueOf и вызывается toString. В результате возвращается список элементов через запятую в виде строки и 'x' == 'x'

// Task 2
// 1 Ответ: 'foo'. Используется toString
// 2 Ответ: 3. Оператор + преобразует объект объект к числу используя valueOf.
// 3 Ответ: 23. То же самое, но так как второй операнд строка, то и первый приводится к строке. Получается 23.

// Task 3
// true потому что два пустых массива - это два разных объекта.
// почему false посмотрел в ответах. Решение понятно.

// Task 4
// new Date(0) - 0 // Ответ: 0. Создана дата соответствующая количеству миллисекунд (ноль) после 1.01.1970, затем оператор минус преобразует её к числу, вычитается ноль и остается ноль.
// new Array(1)[0] + '' // Ответ: 'undefined'. Создается пустой массив с длинной 1 и соответственно его нулевой эл-т равен undefined. При сложении с пустой строкой второй операнд тоже приводится к строке, получается строка 'undefined'.
// ({})[0] // Ответ: undefined. В круглых скобках создается объект у которого нет свойства '0'. Поэтому ответ undefined.
// [1] + 1 // Ответ: '11'. В массиве отсутствует метод valueOf, поэтому вызывается toString и приводит массив к строке. Затем при сложении со строкой второй операнд также приводится к строке и получается '11'. 
// [1,2] + [3,4] // Ответ: '1,23,4'. То же самое. Оба массива приводятся к строке из их єлементов через запятую. Затем складіваются две строки.
// [] + null + 1 // Ответ: 'null1'. Оператор "плюс" вызывает в массиве метод toString и пустой массив приводится к пустой строке ''. Затем при сложении со строкой в строковый тип приводится null и 1. Получается строка 'null1'.
// [[0]][0][0] // Ответ: 0. Выражение обозначает взятие нулевого элемента из вложенного массива.
// ({} + {}) // Ответ: '[object Object][object Object]'. Так как у объектов нет встроенного метода valueOf, то вызывается toString и они объекты приводятся к их строковому выражению: '[object Object]'. Затем складывается две строки.

// Task 5 Не решил.

// Unit link - http://web.archive.org/web/20190405104502/https://learn.javascript.ru/constructor-new

// Task 1
// Ответ: Возможны, если они возвращают один объект.

// Task 2
// function Calculator () {
//   let a = 0;
//   let b = 0;
//   this.a = a;
//   this.b = b;
//   this.read = function () {
//     this.a = +prompt('Enter a', '');
//     this.b = +prompt('Enter b', '');
//   }
//   this.sum = () => this.a + this.b;
//   this.mul = () => this.a * this.b;
// }

// var calculator = new Calculator();

// calculator.read();
// console.log('Сумма=' + calculator.sum());
// console.log('Произведение=' + calculator.mul());

// Task 3
// function Accumulator (startingValue) {
//   this.value = startingValue;
//   this.read = function () {
//     this.value += +prompt('Enter a number', '');
//   }
// }

// var accumulator = new Accumulator(1); // начальное значение 1
// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению
// console.log(accumulator.value); // выведет текущее значение

// Task 4 // Не доделал вторую часть. И не получилось добавить метод toString поэтому поставил унарный плюс перед операндами при сложении.

function Calculator (str) {
  let result = 0;
  let arr = [];
  this.calculate = function (str) {
    arr = str.split(' ');
    (arr[1] === '+') ? (result = +arr[0] + +arr[2]) : (result = arr[0] - arr[2]);
    return result;  
  };
  // toString: function () {
  //   return this.result;
  // };
  this.addMethod = function(name, func) {
    return func();
  }
}

// var calc = new Calculator;
// console.log(calc.calculate("3 + 7") ); // 10

var powerCalc = new Calculator;

powerCalc.addMethod("*", function(a, b) {
  return a * b;
});
powerCalc.addMethod("/", function(a, b) {
  return a / b;
});
powerCalc.addMethod("**", function(a, b) {
  return Math.pow(a, b);
});
var result = powerCalc.calculate("2 ** 3");
console.log(result); // 8

// Поддержка скобок и сложных математических выражений в этой задаче не требуется.
// Числа и операции могут состоять из нескольких символов. Между ними ровно один пробел.
// Предусмотрите обработку ошибок. Какая она должна быть – решите сами.

