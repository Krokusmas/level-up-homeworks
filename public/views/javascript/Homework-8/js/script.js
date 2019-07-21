'use strict';
// Unit link - https://learn.javascript.ru/array#tasks

// Task 1
// var lastElement = goods[goods.length - 1];

// Task 2
// goods.push('Компьютер');

// Task 3
// var styles = ['Джаз', 'Блюз'];
// console.log(styles);
// styles.push('Рок-н-Ролл');
// console.log(styles);
// styles[styles.length - 2] = 'Классика';
// console.log(styles);
// styles.shift();
// console.log(styles);
// styles.unshift('Рэп', 'Регги');
// console.log(styles);

// Task 4
// var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
// var min = 0;
// var max = arr.length - 1;
// var rand = min + Math.floor(Math.random() * (max + 1 - min));
// console.log(arr[rand]);
 
// Task 5
// function isNumeric (n) {
//   return !isNaN(parseInt(n)) && isFinite(n);
// }

// var arr = [];
// var char = 1;
// let sum = 0;

// while (isNumeric(char)) {
//   char = parseInt((prompt('Введите число для сложения', '')));
//   if (isNumeric(char)) {
//     arr.push(char);
//   }
// }

// for (var i = 0; i < arr.length; i += 1) {
//   sum += arr[i]; 
// }
// console.log(sum);

// Task 6
// Код выведет 5 в обоих случаях, так как во вторую переменную присвоена ссылка на первый объект. Как пара ключей от одной квартиры, изменения будут вноситься в один и тот же объект.

// Task 7
// var arr = ['test', 2, 1.5, false];
// function find (arr, value) {
//   let n = 0;
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] === value) {
//       console.log(i);
//       n += 1;
//     }
//   }
//   if (n === 0) {
//     console.log(-1);
//   }
// }

// find(arr, 'test'); // 0
// find(arr, 2); // 1
// find(arr, 1.5); // 2
// find(arr, 0); // -1

// Task 8
// var arr = [5, 4, 3, 8, 0];
// var filtered = [];

// function filterRange (arr, a, b) {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] >= a && arr[i] <= b) {
//       filtered.push(arr[i]);
//     }
//   }
//   for (let i = 0; i < filtered.length; i += 1) {
//     console.log(filtered[i]);
//   }
// }

// filterRange(arr, 3, 5); // [5, 4, 3]

// Task 9 Не решил.
// «Решето Эратосфена»

// Task 10 Не решил.
// Подмассив наибольшей суммы

// Unit link: https://learn.javascript.ru/array-methods

// Task 1
// var obj = {
//   className: 'open menu'
// }
// function addClass (obj, cls) {
//   let result = '';
//   let arr = obj.className.split(' ');
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] === cls) {
//       return 'Класс уже существует';
//     }
//   }
//   if (obj.className.length > 0) {
//     obj.className += ' ' + cls;
//   } else {
//     obj.className += cls;
//   }
//   return obj.className;
// }
// console.log(addClass(obj, 'new'));
// console.log(addClass(obj, 'open'));
// console.log(addClass(obj, 'me'));

// Task 2
// function camelize (str) {
//   let result = '';
//   for (let i = 0; i < str.length; i += 1) {
//     if (str[i] !== '-') {
//       result += str[i];
//     } else {
//       result += str[i + 1].toUpperCase();
//       i += 1;
//     }
//   }
//   return result;
// }
// console.log(camelize('background-color'));
// console.log(camelize('list-style-image'));
// console.log(camelize('-webkit-transition'));

// Task 3
// var obj = {
//   className: 'open menu'
// };

// function removeClass (obj, cls) {
//   let arr = obj.className.split(' ');
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] === cls) {
//       arr.splice(i, 1);
//       obj.className = arr.join(' ');
//       i -= 1;
//     }
//   }
//   return obj.className;
// }

// console.log(removeClass(obj, 'open')); // obj.className='menu'
// console.log(removeClass(obj, 'blabla')); // без изменений (нет такого класса)
// var obj = {
//   className: 'my menu menu'
// };
// console.log(removeClass(obj, 'menu'));

// Task 4
// var arr = [5, 3, 8, 1];
// function filterRangeInPlace (arr, a, b) {
//   for (let i = 0; i < arr.length; i += 1) {
//     if ((arr[i] < a) || (arr[i] > b)) {
//       arr.splice(i, 1);
//       i -= 1;
//     }
//   }
//   return arr;
// }
// console.log(filterRangeInPlace(arr, 1, 4));

// Task 5
// var arr = [5, 2, 1, -10, 8];
// function sortNumDESC (a, b) {
//   return b - a;
// }
// arr.sort(sortNumDESC);
// console.log(arr); // 8, 5, 2, 1, -10

// Task 6
// var arr = ['HTML', 'JavaScript', 'CSS'];
// var arrSorted = arr.concat();
// arrSorted.sort(function (a, b) {
//   return a > b ? 1 : a < b ? -1 : 0;
// });
// console.log(arrSorted); // CSS, HTML, JavaScript
// console.log(arr); // HTML, JavaScript, CSS (без изменений)

// Task 7
// Случайный порядок в массиве. Не решил.

// Task 8 Не решил.

// Task 9 Не решил.
// Вывести односвязный список.

// Task 10 Не решил.
// Отфильтровать анаграммы

// Task 11
// Оставить уникальные элементы массива
// var strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", "8-()"];
// var uniqueStrings = [];

// function unique (arr) {
//   for (let i = 0; i < strings.length; i += 1) {
//     if (uniqueStrings.indexOf(strings[i]) === -1) {
//       uniqueStrings.push(strings[i]);
//     }
//   }
//   return uniqueStrings;
// }

// console.log(unique(strings)); // кришна, харе, 8-()

// Unit link: https://learn.javascript.ru/array-iteration

// Taks 1
// var arr = ["Есть", "жизнь", "на", "Марсе"];
// let i = 0;
// let elementsLen = arr.map(function(item) {
//   return item.length;
// });
// console.log(elementsLen); // 4,5,2,5

// Task 2
// var arr = [1, 2, 3, 4, 5]; // 1, 3, 6, 10, 15
// var arr2 = [-2, -1, 0, 1]; // -2, -3, -3, -2
// var result = [];

// function getSums (arr) {
//   arr.reduce(function(acc, item) {
//     result.push(acc + item);
//     return acc + item;
//   }, 0);
//   return result;
// }

// console.log(getSums(arr));

// Additional task 1.
// const arr = [1, 10, 100, 1000, 10000]; // Проверка массива на положительные или отрицаельные элементы. Если все положительные - true. Иначе false.
// var n = 0;

// function every (arr, cb) {
//   for (let i = 0; i < arr.length; i += 1) {
//     cb(arr[i], i);
//   }
//   if (n === arr.length) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// function callback (item, i) {
//   if (arr[i] > 0) {
//     n += 1;
//   }
// }

// every(arr, callback);

// Additional task 2.
// const arr = [1, 0, 100, 1000, 10000]; // Проверка любого элемента массива на равество нулю. Если хотя бы 1 равен нулю, то true.
// var n = 0;

// function some (arr, cb) {
//   for (let i = 0; i < arr.length; i += 1) {
//     cb(arr[i], i);
//   }
//   if (n > 0) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// function callback (item, i) {
//   if (arr[i] === 0) {
//     n += 1;
//   }
// }

// some(arr, callback);

// Additional task 3.
// const arr = [1, 10, 100, 1000, 10000]; // filter. Создать массив в который войдут элементы из массива arr, которые больше 10.
// var newArr = [];

// function filter (arr, cb) {
//   for (let i = 0; i < arr.length; i += 1) {
//     cb(arr[i], i);
//   }
//   console.log(newArr);
// }

// function callback (item, i) {
//   if (arr[i] > 10) {
//     newArr.push(arr[i]);
//   }
// }

// filter(arr, callback);

// Additional task 4.
// const arr = ['HTML', 'CSS', 'JavaScript']; // map. Создать массив с длинами элементов массива arr.
// var newArr = [];

// function map (arr, cb) {
//   for (let i = 0; i < arr.length; i += 1) {
//     cb(arr[i], i);
//   }
//   console.log(newArr);
// }

// function callback (item, i) {
//   newArr.push(arr[i].length);
// }

// map(arr, callback);

// Additional task 5.
// const arr = [1, 10, 100, 1000, 10000]; // reduce. Получить сумму всех элементов массива.
// let result = 0;
// let initialValue = 0;

// function reduce (arr, cb, initialValue) {
//   for (let i = initialValue; i < arr.length; i += 1) {
//     cb(arr[i], i);
//   }
//   console.log(result);
// }

// function callback (item, i) {
//   result += arr[i];
// }

// reduce(arr, callback, initialValue);

// Additional task 6.
// const arr = [1, 10, 100, 1000, 10000]; // reduceRight. Получить сумму всех элементов массива, но справа-налево.
// let result = 0;
// let initialValue = arr.length - 1;

// function reduceRight (arr, cb, initialValue) {
//   for (let i = initialValue; i >= 0; i -= 1) {
//     cb(arr[i], i);
//   }
//   console.log(result);
// }

// function callback (item, i) {
//   result += arr[i];
// }

// reduceRight(arr, callback, initialValue);
