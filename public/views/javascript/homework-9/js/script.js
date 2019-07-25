'use strict';
// Unit link - https://learn.javascript.ru/arguments-pseudoarray

// Task 1
// function f(x) {
//   if (arguments.length > 0) {
//     return console.log(1);  
//   }
//   return console.log(0);
// }

// f(undefined); // 1
// f(); // 0

// Task 2
// function sum () {
//   let amount = 0;
//   for (let i = 0; i < arguments.length; i += 1) {
//     amount += arguments[i];
//   }
//   return console.log(amount);
// }

// sum(); // 0
// sum(1); // 1
// sum(1, 2); // 3
// sum(1, 2, 3); // 6
// sum(1, 2, 3, 4); // 10

// Unit link - https://learn.javascript.ru/datetime

// Task 1
// var date = new Date(2012, 1, 20, 3, 12)
// console.log(date);

// Task 2
// var date = new Date(2012,0,3);  // 3 января 2012

// function getWeekDay (date) {
//   let x = date.getDay();
//   return (x === 0) ? 'Вс' : (x === 1) ? 'Пн' : (x === 2) ? 'Вт' : (x === 3) ? 'Ср' : (x === 4) ? 'Чт' : (x === 5) ? 'Пт' : 'Сб';
// }

// console.log(getWeekDay(date)); // Должно вывести 'вт'

// Task 3
// var date = new Date(2012, 0, 3);  // 3 янв 2012
// function getLocalDay (date) {
//   let x = date.getDay();
//   return (x === 0) ? '7' : (x === 1) ? '1' : (x === 2) ? '2' : (x === 3) ? '3' : (x === 4) ? '4' : (x === 5) ? '5' : '6';
// }
// console.log(getLocalDay(date)); // вторник, выведет 2

// Task 4
// var date = new Date(2015, 0, 2);

// function getDateAgo (date, days) {
//   let x = new Date(date);
//   x.setDate(date.getDate() - days);
//   return x.getDate();
// }

// console.log(getDateAgo(date, 1)); // 1, (1 января 2015)
// console.log(getDateAgo(date, 2)); // 31, (31 декабря 2014)
// console.log(getDateAgo(date, 365)); // 2, (2 января 2014)

// Task 5, Task 6, Task 7, Task 8, Task 9 Не решил. Открыл решение, всё понятно.
