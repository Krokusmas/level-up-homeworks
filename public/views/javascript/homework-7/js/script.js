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
// var schedule = {};

// function isEmpty (obj) {
//   var key;
//   for (key in obj) {
//     if (typeof key === 'string') { // Название свойства не может быть не строкой. Будет ошибка.
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isEmpty(schedule)); // true
// schedule['8:30'] = 'подъём';
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
//   'Вася': 100,
//   'Петя': 300,
//   'Даша': 250,
// };

// function maxSalary (salaries) {
//   let maxSal = 0;
//   let worker;
//   let key;
//   let counter = 0;
//   for (key in salaries) {
//     counter += 1;
//   }
//   if (counter === 0) {
//     return ('нет сотрудников');
//   }
//   for (key in salaries) {
//     if (maxSal < salaries[key]) {
//       maxSal = salaries[key];
//       worker = key;
//     }
//   }
//   return worker;
// }

// console.log(maxSalary(salaries));

// Task 4
// var menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// function isNumeric (key) {
//   return !isNaN(parseFloat(key)) && isFinite(key);
// }

// function multiplyNumeric (obj) {
//   for (let key in obj) {
//     if (isNumeric(obj[key])) {
//       obj[key] *= 2;
//     } 
//   }
//   return obj;
// }
// console.log(menu);
// console.log(multiplyNumeric(menu));

// ADDITIONAL TASKS
// Reverse the given string
// function strReverse (str) {
//   let result = '';
//   for (let n = str.length - 1; n >= 0; n -= 1) {
//     result += str[n];  
//   }
//   return result;
// }

// console.log(strReverse('My menu'));

// Compare two objects
// This function must return true if two objects refer to the same object or they refer to different objects but have the same keys number and their corresponding values are equal. The function must work with unlimited nestend objects. You can use "book" object with different set of properties to test.
// let obj1 = {
//   name: '1984',
//   pages: 300,
//   cover: 'Hard',
//   price: 240,
//   hasIllustrations: true,
//   author: {
//     name: 'George Orwell',
//     dob: 'Jun 25 1903',
//     size: {
//       w: 10,
//       h: 11,
//       // sdfl: 13
//     }
//   }
// };
// let obj2 = {
//   name: '1984',
//   pages: 300,
//   cover: 'Hard',
//   price: 240,
//   hasIllustrations: true,
//   author: {
//     name: 'George Orwell',
//     dob: 'Jun 25 1903',
//     size: {
//       w: 10,
//       h: 11,
//       sdfl: 13
//     }
//   }
// };

// function countObjKeys (obj) {
//   let sum = 0;
//   for (let key in obj) {
//     sum += 1;
//   }
//   return sum;
// }

// function objCompare (obj1, obj2) { // Проверка ссылаются ли на один объкт.
//   if (obj1 === obj2) {
//     return true;
//   }
//   if (countObjKeys(obj1) !== countObjKeys(obj2)) { // Проверка равно ли количество ключей.
//     return false;
//   }
//   for (let key in obj1) { // проверить равны ли значения ключей.
//     if (obj1[key] !== obj2[key] && typeof obj1[key] !== 'object' && typeof obj2[key] !== 'object') {
//       return false;
//     }
//   }
//   for (let key in obj1) { // Проверка есть ли объекты среди значений.
//     if (typeof obj1[key] === 'object') {
//       // let result = objCompare(obj1[key], obj2[key]);
      
//         console.log('result');
//         // return false; // Если рекурсия вернула, что объекты не равны.

//     }
//     console.log('если это есть в консоле, значит до сюда дошло');
//     return true;
//   }
// }

// console.log(objCompare(obj1, obj2));

// console.log(typeof obj1 === 'object');
// console.log(objCompare(
//   { key: 'Value' },
//   { key: 'Value' }
// )); // -> true
// console.log(objCompare(
//   { key: 'Value' },
//   { key: 'Value 1' }
// )); // -> false
// console.log(objCompare(
//   { key: 'Value', nested: { key: 'Value' } },
//   { key: 'Value', nested: { key: 'Value' } }
// )); // -> true
// console.log(objCompare(
//   { key: 'Value', nested: { key: 'Value' } },
//   { key: 'Value 1', nested: { key: 'Value' } }
// )); // -> false


// // Draw an area
// // Draw an area N wide and N height like it the example below. Use ' @ ' and ' - '.

// (function () {
//   function drawArena (n) {
//     var str = '';
//     for (let i = 1; i <= n; i += 1) {
//       str = i + ' @ ';
//       if ((i === 1) || (i === n)) {
//         for (let i = 1; i < n; i += 1) {
//           str += ' @ '; 
//         }
//         console.log(str);
//       } else {
//         for (let i = 2; i < n; i += 1) {
//           str += ' - ';
//         }
//         str += ' @ ';
//         console.log(str);
//       }
//     }
//   }
// }());


// // Strings comparison
// // Check whether two strings have the same set of chars. Return true if they are equal length and have the same set of chars no matter at which index those chars are

// function strCompare (str1, str2) {
//   let i;
//   let result;
//   let pos;
//   if (str1.length !== str2.length) {
//     return false; 
//   }
//   for (i = 0; i < str1.length; i += 1) {
//     while ((result = str2.indexOf(str1[i], pos + 1)) != -1) {
//       return true;
//     }
//     false;
//   }
// }

// console.log(strCompare('clock', 'lockc')); // -> true. Because two "c", one "l", one "o" and one "k". Doesn't matter they are at different positions
// console.log(strCompare('tree', 'three')); // -> false. Different lenghts
// console.log(strCompare('mttudd', 'dutmtd')); // -> true. Because two "t", two "d", one "m" and one "u". Doesn't matter they are at different positions
