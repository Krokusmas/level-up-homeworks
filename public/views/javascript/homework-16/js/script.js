'use strict';
// Unit link - http://web.archive.org/web/20190515020906/http://learn.javascript.ru/class-instanceof

// Task 1 // Решал пару часов потом подсмотрел ответы.

// function getSomeDate (date) {
//   var day = date.getDate();
//   if (day < 10) {
//     day = '0' + day;
//   }
//   var month = date.getMonth() + 1;
//   if (month < 10) {
//     month = '0' + month;
//   }
//   var year = date.getFullYear() % 100;
//   if (year < 10) {
//     year = '0' + year;
//   }
//   var formattedDate = day + '.' + month + '.' + year;
//   return formattedDate;
// }

// function formatDate (date) {
//   if (typeof date === 'number') {
//     date = new Date(date * 1000);
//   } else {
//     if (typeof date === 'string') {
//       date = new Date(date); 
//     } else {
//       if (Array.isArray(date)) { 
//         date = new Date(date[0], date[1], date[2]);
//       }
//     }
//   }
//   return getSomeDate(date);
// }
// console.log(formatDate('2011-10-02')); // 02.10.11
// console.log(formatDate(1234567890)); // 14.02.09
// console.log(formatDate([2014, 0, 1])); // 01.01.14
// console.log(formatDate(new Date(2014, 0, 1))); // 01.01.14

// Unit link - http://web.archive.org/web/20190603122521/http://learn.javascript.ru/json

// Task 1
// var leader = {
//   name: 'Василий Иванович',
//   age: 35
// };
// leader = JSON.stringify(leader);

// leader = JSON.parse(leader);

// Task 2
// 1. прямой вызов JSON.stringify(team) не может превратить объект team в JSON т.к. два объекта внутри этого объекта имеют ссылки друг на друга.
// 2. способ реализации посмотрел в ответах.

// Unit link - http://web.archive.org/web/20190706120809/https://learn.javascript.ru/settimeout-setinterval

// Task 1

