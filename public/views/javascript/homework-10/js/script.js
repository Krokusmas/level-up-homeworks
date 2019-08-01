'use strict';
// Unit link - https://learn.javascript.ru/global-object

// Task 1
// Ответ: 1. Т.к. на момент выполнения цикла переменная а уже объявлена и объект window уже имеет свойство а. Затем в цикле в переменную записывается значение и дальше по коду выводится на экран.

// Task 2
// Ответ: ошибка. Т.к. без var переменная не попала в глобальный объект window и выполнение кода не зайдет в цикл - свойства а не существует.

// Task 3
// ответ: 1. Т.к. Переменная объявлена через var. Свойство а глобального объекта создано, выполнится цикл с присвоением значения 1 и затем выведется результат на экран.

// Unit link - https://learn.javascript.ru/closures

// Task 1
// Сообщение выведется, но вместо переменной phrase будет undefined, т.к. функция объявлена через fuction declaration и попала в лексическое окружение window. Переменная phrase объявлена через var и тоже сразу попала в лексическое окружение window, но еще с неприсвоенным значением.

// Task 2
// Каков будет результат выполнения этого кода?
// Ответ: true. Переменная value объявлена в этой функции ниже через var и находится в лексическом окружении функции. В её значение записывается true для кода внутри функции и выводтся на экран.
// Изменится ли внешняя переменная value ?
// Ответ: нет. Переменная value объявлена в этой функции ниже через var и находится в лексическом окружении функции.
// Какими будут ответы, если из строки var value = false убрать var?
// Ответ: результаты вызова функции останутся прежними. Но переменная value не будет найдена в Л.О. функции и поиск пойдет на уровень выше в Л.О. window и перезапишет значение внешней переменной.

// Task 3
// Ответ: 
// 1) undefined, т.к. в коде функции ниже объявлена через var локальная переменная window.
// 2) 5, т.к. перед вызовом alert в переменную записали 5.

// Task 4
// Ответ: ошибка, не поставлена точка с запятой после обявления переменной.

// Task 5
// Ответ: нельзя. локальная переменная полностью перекрывает внешнюю.

// Task 6
// 1, 2, 3, 4. Т.к. обе функции будут обращаться каждый раз к глобальному объекту window и брать текущее значение одной и той же переменной, перезаписывая на новое.

// Unit link - https://learn.javascript.ru/closures-usage

// Task 1

// function sum (a) {
//   let f = function (b) {
//     return a + b;
//   }
//   return f;
// }

// console.log(sum(1)(2)); // 3
// console.log(sum(5)(-1)); // 4

// Task 2
// function makeBuffer () {
//   let currentStr = '';
//   return function (str) {
//     if (arguments.length === 0) {
//       return currentStr;  
//     }
//     currentStr += str;
//   }
// }

// var buffer = makeBuffer();

// buffer('Замыкания');
// buffer(' Использовать');
// buffer(' Нужно!');

// console.log(buffer()); // Замыкания Использовать Нужно!

// Task 3
// function makeBuffer () {
//   let currentStr = '';
//   function counter (str) {
//     if (arguments.length === 0) {
//       return currentStr;  
//     }
//     currentStr += str;
//   }
//   counter.clear = function () {
//       currentStr = '';
//   }
//   return counter;
// }

// var buffer = makeBuffer();

// buffer('Тест');
// buffer(' тебя не съест ');
// console.log(buffer()); // Тест тебя не съест

// buffer.clear();

// console.log(buffer()); // ''

// Task 4
// var users = [{
//   name: 'Вася',
//   surname: 'Иванов',
//   age: 20
// }, {
//   name: 'Петя',
//   surname: 'Чапаев',
//   age: 25
// }, {
//   name: 'Маша',
//   surname: 'Медведева',
//   age: 18
// }];

// function byField (field) {
//   return function (a, b) {
//     return a[field] > b[field] ? 1 : a[field] < b[field] ? -1 : 0;
//   }
// }

// users.sort(byField('name'));
// users.forEach(function(user) {
//   console.log(user.name);
// }); // Вася, Маша, Петя

// users.sort(byField('age'));
// users.forEach(function(user) {
//   console.log(user.name);
// }); // Маша, Вася, Петя

// Task 5 // + Разобрали на уроке.
// var arr = [1, 2, 3, 4, 5, 6, 7];

// function filter (arr, func) {
//   const result = [];

//   for (let i = 0; i < arr.length; i += 1) {
//     if (func(arr[i]) === true) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// function inBetween (a, b) {
//   return function (n) {
//     return n >= a && n <= b;
//   }
// }

// function inArray (arr) {
//   return function (item) {
//     return arr.indexOf(item) !== -1;
//   }
// }

// console.log(filter(arr, inBetween(3, 6))); // 3, 4, 5, 6
// console.log(filter(arr, inArray([1, 2, 10]))); // 1, 2

// Task 6
// function makeArmy () {
//   let shooters = [];

//   let i = 0;
//   while (i < 10) {
//     let shooter = function() { // функция shooter
//       console.log(i); // должна выводить порядковый номер
//     };
//     shooters.push(shooter()); // Нужно было добавить скобки после шутер для вызова функции. Иначе в каждый элемент массива клалась просто функция.
//     i += 1;
//   }
//   return shooters;
// }

// let army = makeArmy();
