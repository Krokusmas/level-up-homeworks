'use strict';
// Unit link - https://learn.javascript.ru/number

// Task 1
// function isNumeric (n) {
//   return !isNaN(parseFloat(n)) && isFinite(n);
// }

// var b;
// var a = +prompt('Введите первое число', '');
// if (!isNaN(a)) {
//   b = +prompt('Введите второе число', '');
// } if (!isNaN(b)) {
//   console.log(a + b);
// } else {
//   console.log('Это не число');
// }

// Task 2
// Потому что десятичная дробь в двоичной системе счисления имеет большое количество знаков и не помещается в 8 байт, которые выделяются на число в системе IEEE 754. Поэтому возникает небольшая погрешность и число которое записалoсь в 8 байт является на какие-то тысячные доли меньше изначального. Метод num.toFixed(precision) округляет число до ближайшего целого значения, поэтому 6.35.toFixed(1) === 6.3 

// Task 3
// Чтобы избежать ошибок при округлении можно перед арифметическими операциями умножить числа на 100, а после, результат разделить на 100. Таким образом при операциях с целыми числами не будет теряться точность.

// Task 4
// Цикл бесконечный потому что i никогда н ебудет в точности равно 10 из-за погрешности в вычислениях.

// Task 5
// Формула Фибоначи для сравнения в примере.
// function fib (n) {
//   var a = 1,
//     b = 0,
//     x;
//   for (var i = 0; i < n; i++) {
//     x = a + b;
//     a = b
//     b = x;
//   }
//   return b;
// }

// function fibBinet (n) {
//   var phi = (1 + Math.sqrt(5)) / 2;
//   var x = Math.round(Math.pow(phi, n) / Math.sqrt(5));
//   return x;
// }

// console.log(fibBinet(77));
// console.log(fib(77));

// Результат функций для расчета формул Фибоначчи и Бине отличаются. Более верное значение в первой функции для расчета формулы Фибоначчи, так как во второй формуле квадратный корень из 5-ти приводит к погрешности в вычислениях.

// Task 6
// var max = 10;
// console.log(Math.random() * max);

// Task 7
// var min = 5;
// var max = 10;
// console.log(min + Math.random() * (max - min));

// Task 8
// function randomInteger (min, max) {
//   return ((min + Math.random() * (max + 1 - min)).toFixed(0));
// }
// var min = +prompt('Введите min', '');
// var max = +prompt('Введите min', '');
// console.log(randomInteger(min, max));

// Unit link https://learn.javascript.ru/string

// Task 1
// var str = '';
// function ucFirst (str) {
//   return (str.charAt(0).toUpperCase(0)) + str.slice(1);
// }
// console.log(ucFirst(str));

// Task 2
// function checkSpam (str) {
//   var strLowerCase = str.toLowerCase();
//   if (~strLowerCase.indexOf('viagra')) {
//     return true;
//   } 
//   if (~strLowerCase.indexOf('xxx')) {
//     return true;
//   } 
//   return false;
// }
// console.log(checkSpam('buy ViAgRA now'));
// console.log(checkSpam('free xxxxx'));
// console.log(checkSpam('innocent rabbit'));

// Task 3
// function truncate (str, maxlength) {
//   let result = '';
//   let strLen = str.length;
//   if (strLen > maxlength) {
//     result = str.slice(0, maxlength - 3);
//     return result + '...';
//   }
//   return str;
// }
// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
// console.log(truncate("Всем привет!", 20));

// Task 4
// function extractCurrencyValue (str) {
//   return +str.slice(1);
// }
// console.log(extractCurrencyValue('$120'));

// Additional task
// Данная функция принимае строку arg1, в которой меняет все вхождения arg2 в строке arg1 на соответствующую цифру из arg3 в порядке нахождения arg2. Если вхождений arg2 в строке arg1 больше чем цифр в arg3, оставшиеся вхождения заменяются на arg4.
// Естественно функцию и ее параметры надо назвать понятно.
// function funcName (arg1, arg2, arg3, arg4) {
//   // code...
// }
// console.log(funcName('abc^de^^fg^hij', '^', '1594', ':')); // output - 'abc1de59fg4hij'
// console.log(funcName('abc^de^^fg^hij', '^', '22', ':')); // output - 'abc2de2:fg:hij'
// console.log(funcName('abcde^fghij', '^', '0123', ':')); // output - 'abcde0fghij'

// function replaceChar (str, pattern, num, char) {
//   let i = 0;
//   let n = 0;
//   let result = '';
//   for (i; i < str.length; i += 1) {
//     if (str[i] !== pattern) {
//       result += str[i];
//     } else {
//       if (n < num.length) { 
//         result += num[n]; 
//         n += 1;
//       } else {
//         if (n === num.length) {
//           result += char;
//         }
//       }
//     }
//   }
//   return result;
// }
// console.log(replaceChar('abc^de^^fg^hij', '^', '1594', ':')); // output - 'abc1de59fg4hij'
// console.log(replaceChar('abc^de^^fg^hij', '^', '22', ':')); // output - 'abc2de2:fg:hij'
// console.log(replaceChar('abcde^fghij', '^', '0123', ':')); // output - 'abcde0fghij'
