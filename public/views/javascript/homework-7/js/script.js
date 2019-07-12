'use strict';
// Unit link - https://learn.javascript.ru/object

// Task 1
// var user = {};
// user.name = 'Вася';
// user.surname = 'Петров';
// user.name = 'Сергей';
// delete user.name;

// Unit link - https://learn.javascript.ru/object-for-in

// Task 1
// function isEmpty (obj) {
//   var key;
//   var counter = 0;
//   for (key in obj) {
//     counter += 1;
//   }
//   if (counter > 0) {
//     return false;
//   } else {
//     return true;
//   }
// }

// var schedule = {};
// console.log(isEmpty(schedule)); // true
// schedule["8:30"] = "подъём";
// console.log(isEmpty(schedule)); // false

// Task 2
// var salaries = {
//   "Вася": 100,
//   "Петя": 300,
//   "Даша": 250
// };

// function salariesSum (obj) {
//   var key;
//   var counter = 0;
//   for (key in obj) {
//     counter += obj[key];
//   }
//   return counter;
// }
// console.log(salariesSum(salaries));

// Task 3
// Есть объект salaries с зарплатами. Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.

// Если объект пустой, то пусть он выводит «нет сотрудников».

// Например:

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};
// ... ваш код выведет "Петя"
var counter = 0;
var salary = 0;
var worker;
var key;

for (key in salaries) {
  counter += 1;
  if (salary < salaries[key]) {
    worker = [key];
  } 
  if (salary >= salaries[key]) {
      break;
  }
  if (counter < 1) {
    console.log('нет сотрудников');
  }
}
console.log(worker);


