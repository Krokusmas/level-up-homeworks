'use strict';
// Unit link - http://web.archive.org/web/20190603134523/http://learn.javascript.ru/object-conversion

// Task 1
// Потому что т.к. метод массива valueOf возвращает сам объект, то для преобразования объекта в примитив вызызвется метод toString. В результате возвращается список элементов через запятую в виде строки и 'x' == 'x'.

// Task 2
// 1 Ответ: 'foo'. toString вызывается автоматически т.к. как alert конвертирует всё к виду строки.
// 2 Ответ: 3. Оператор + указывает программе, что необходимо преобразовать объект к примитиву в виде числа, т.к. среди методов есть valueOf, то он и пользуется.
// 3 Ответ: 23. То же самое, но так как второй операнд строка, то и первый приводится к строке. Получается 23.

// Task 3
// true потому что два разных пустых массива всегда дают false при сравнении.
// почему false посмотрел в ответах. Решение понятно.

// Task 4
// new Date(0) - 0 // Ответ: 0. Создана дата соответствующая количеству миллисекунд (ноль) после 1.01.1970, затем оператор минус преобразует её к числу, вычитается ноль и остается ноль.
// new Array(1)[0] + '' // Ответ: 'undefined'. Создается пустой массив с длинной 1 и соответственно его нулевой эл-т равен undefined. При сложении с пустой строкой второй операнд тоже приводится к строке, получается строка 'undefined'.
// ({})[0] // Ответ: undefined. В круглых скобках создается объект у которого нет свойства '0'. Поэтому ответ undefined.
// [1] + 1 // Ответ: '11'. Оператор + дает программе понять, что необходимо преобразовать объект в примитив в виде числа, но так как valueOf массива возвращает сам объект, то вызывается метод toString, который приводит массив к примитиву в виде строки. Затем при сложении со строкой второй операнд также приводится к строке и получается '11'. 
// [1,2] + [3,4] // Ответ: '1,23,4'. То же самое. Оба массива приводятся к строке из их єлементов через запятую. Затем складіваются две строки.
// [] + null + 1 // Ответ: 'null1'. Оператор "плюс" вызывает в массиве метод toString и пустой массив приводится к пустой строке ''. Затем при сложении со строкой в строковый тип приводится null и 1. Получается строка 'null1'.
// [[0]][0][0] // Ответ: 0. Выражение обозначает взятие нулевого элемента из вложенного массива.
// ({} + {}) // Ответ: '[object Object][object Object]'. Так как у объектов метод valueOf возвращает этот же объект, то вызывается метод toString, который приводит объекты к их строковому выражению: '[object Object]'. Затем складывается две строки.

// Task 5 Не решил.

// Unit link - http://web.archive.org/web/20190405104502/https://learn.javascript.ru/constructor-new

// Task 1
// Ответ: Возможны, если они возвращают один объект.

// Task 2
// function Calculator () {
//   this.a;
//   this.b;
//   this.read = () => {
//     this.a = +prompt('Enter a', '');
//     this.b = +prompt('Enter b', '');
//   };
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
//   };
// }

// var accumulator = new Accumulator(1); // начальное значение 1
// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению
// console.log(accumulator.value); // выведет текущее значение

// Task 4
function Calculator (str) {
  this['+'] = function (a, b) {
    return a + b;
  };
  this['-'] = function (a, b) {
    return a - b;
  };
  this.calculate = function (value) {
    const parts = value.split(' ');
    const a = +parts[0];
    const b = +parts[2];
    if (!this[parts[1]]) {
      return 'Fatal Error';
    }
    return this[parts[1]](a, b);  
  };
  this.addOperation = function (name, func) {
    this[name] = func;
  };
  return this;
}

const calc = new Calculator;
console.log(calc.calculate('3 + 7') ); // 10
console.log(calc.calculate('3 - 7') ); // -4

calc.addOperation('*', (a, b) => a * b);
console.log(calc.calculate('3 * 7'));

calc.addOperation("/", (a, b) => a / b);
console.log(calc.calculate('3 / 7'));

calc.addOperation("**", (a, b) => Math.pow(a, b));
console.log(calc.calculate('3 ** 7'));

console.log(calc.calculate('3 f 7')); // 'Fatal Error'
