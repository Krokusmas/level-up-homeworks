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
//   "Даша": 250,
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
// var salaries = {
//   "Вася": 100,
//   "Петя": 300,
//   "Даша": 250,
// };

// var counter = 0;
// var maxSalary = 0;
// var worker;
// var key;

// for (key in salaries) {
//   counter += 1;
//   if (maxSalary < salaries[key]) {
//     maxSalary = salaries[key];
//     worker = key;
//   }
// }
// if (counter < 1) {
//   console.log('нет сотрудников');
// } else {
//   console.log(worker);
// }

// Task 4
// var menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// function isNumeric (n) {
//   return !isNaN(parseFloat(n)) && isFinite(n)
// }

// var key;
// var counter = 0;

// function multiplyNumeric (n) {
//   for (key in menu) {
//     if (isNumeric(menu[key])) {
//       menu[key] *= 2;
//     } 
//   }
//   return menu;
// }
// console.log(menu);
// console.log(multiplyNumeric(menu));

// ADDITIONAL TASKS
// Reverse the given string
// (function () {
//   function funcName (param) {
//     // code...
//   }
//   funcName('Some string'); // -> 'gnirts emoS'
// }());

var result = '';
var i;

  function strReverse (str) {
    let n = str.length;
    for (i = 0; i < str.length; i += 1) {
      result += str[n];
      n -= 1; 
    }
    return result;
  }
  strReverse('Some string');



// Compare two objects
// This function must return true if two objects refer to the same object or they refer to different objects but have the same keys number and their corresponding values are equal. The function must work with unlimited nestend objects. You can use "book" object with different set of properties to test.
// (function () {
//   function funcName (param1, param2) {
//     // code...
//   }
//   funcName(
//     { key: 'Value' },
//     { key: 'Value' }
//   ); // -> true
//   funcName(
//     { key: 'Value' },
//     { key: 'Value 1' }
//   ); // -> false
//   funcName(
//     { key: 'Value', nested: { key: 'Value' } },
//     { key: 'Value', nested: { key: 'Value' } }
//   ); // -> true
//   funcName(
//     { key: 'Value', nested: { key: 'Value' } },
//     { key: 'Value 1', nested: { key: 'Value' } }
//   ); // -> false
// }());

// // Draw an area
// // Draw an area N wide and N height like it the example below. Use ' @ ' and ' - '.
// (function () {
//   function funcName (N) {
//     // code...
//   }
//   funcName(8); // -> http://prntscr.com/jpobhn
// }());

// // Strings comparison
// // Check whether two strings have the same set of chars. Return true if they are equal length and have the same set of chars no matter at which index those chars are
// (function () {
//   function funcName (param1, param2) {
//     // code...
//   }
//   funcName('clock', 'lockc'); // -> true. Because two "c", one "l", one "o" and one "k". Doesn't matter they are at different positions
//   funcName('tree', 'three'); // -> false. Different lenghts
//   funcName('mttudd', 'dutmtd'); // -> true. Because two "t", two "d", one "m" and one "u". Doesn't matter they are at different positions
// }());
