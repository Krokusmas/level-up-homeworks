'use strict';
// Unit link - http://web.archive.org/web/20190515020840/http://learn.javascript.ru/object-methods

// Task 1
// Во второй элемент массива пропушится функция function() { alert( this );} и ответ будет "a","b",function() { alert( this );}

// Task 2
// Нет точки с запятой после объявления переменной и вызова метода функции поэтому будет синтаксическая ошибка.

// Task 3
// Вызов функции выдаёт undefined потому что при этом используются различные логические операторы. В таком случае теряется контекст this и он равняется undefined.

// Task 4
// Undefined, т.к. код находится вне функций, то this равен window. 
// а такого свойства как window.firstName нет.

// Task 5
// Ответ: Василий. 
// user.export() возвращает user т.к. функция возвращает this, который равен объекту user. Получается вызов user.name, которое равно Василий.

// Task 6
// Ответ: Василий.
// Создается объект со свойством value: this, в котором this равен ссылке на объект user. Значит вызов value.name будет равно Василий.

// Task 7
// var calculator = {
//   read: function () {
//     this.value1 = +prompt('Введите значение №1', '');
//     this.value2 = +prompt('Введите значение №2', '');
//   },
//   sum: function () {
//     return this.value1 + this.value2;
//   },
//   mul: function () {
//     return this.value1 * this.value2;
//   }
// };

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

// Task 8
// не решил. Посмотрел ответ - понял.
