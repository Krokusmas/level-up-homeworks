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
//   function strReverse (str) {
//   let result = '';
//   let n = str.length - 1;
//   while (n >= 0) {
//     result += str[n];
//     n -= 1;  
//   }
//   return result;
// }
// }());

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
//       sdfl: 13
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
//     // name: 'George Orwell',
//     dob: 'Jun 25 1903',
//     size: {
//       w: 10,
//       h: 11,
//       sdfl: 13
//     }
//   }
// };

// function countObjKeys (obj) { // Сравнивает количество ключей объекта.
//   let sum = 0;
//   for (let key in obj) {
//     sum += 1;
//   }
//   return sum;
// }

// function areObjectsEqual (obj1, obj2) { // Сравнивает значения ключей объектов, а затем если среди них есть вложенные объекты, то сравнивает их между собой.
//   for (let key in obj1) {
//     if (obj1[key] !== obj2[key]) {
//       return false;
//     }
//     if ((typeof obj1[key] === 'object') && (typeof obj2[key] === 'object')) {
//       for (let key in obj1) {
//         areObjectsEqual(obj1[key], obj2[key]);
//       }
//     }
//     return true;
//   }
//   return true;
// }

// function objCompare (obj1, obj2) {
//   if (obj1 === obj2) {
//     return true;
//   } else {
//     if (countObjKeys(obj1) !== countObjKeys(obj2)) {
//       return false;
//     }
//     return areObjectsEqual(obj1, obj2);
//   }
// }

// console.log(objCompare(obj1, obj2));

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

// function arena (n) {
//   var str = '';
//   for (let i = 1; i <= n; i += 1) {
//     str = i + ' @ ';
//     if ((i === 1) || (i === n)) {
//       for (let i = 1; i < n; i += 1) {
//         str += ' @ '; 
//       }
//       console.log(str);
//     } else {
//       for (let i = 2; i < n; i += 1) {
//         str += ' - ';
//       }
//       str += ' @ ';
//       console.log(str);
//     }
//   }
// }

// console.log(arena(8));

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
