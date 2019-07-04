'use strict';
// Unit link - https://learn.javascript.ru/recursion

// Task 1
// С использованием цикла
// function sum (n) {
//   var result = n;
//   var i;
//   for (i = n - 1; i > 0; i -= 1) {
//     result += i;
//   } 
//   return result;
// } 
// console.log(sum(100));

// Через рекурсию
// function sumTo (n) {
//   if (n > 1) {
//     return n + sumTo(n - 1);
//   } else {
//     return n;
//   }
// }
// console.log(sumTo(100));

// С использованием формулы для суммы арифметической прогрессии.
// function sumTo (n) {
//   return n * (n + 1) / 2;
// }
// console.log(sumTo(100)); 

// 1. Самый быстрый способ решения данного примера - это через формулу для суммы арифмитической прогрессии, поскольку программа при расчете выполнить всего 3 арифметических операции.
// 2. Наиболее долго будет работать второй вариант через рекурсию, т.к. программа создает стек контекстов для каждого вызова и неоконченные контексты хранятся в памяти.
// 3. sumTo(100000) при помощи рекурсии посчитать нельзя, т.к. большинством браузеров ограничена глубина рекурсии до 10,000.

// Task 2
// function factorial (n) {
//   var i = 1;
//   if (n - i > 1) {
//     return n * factorial(n - i);
//   } else {
//     return n;
//   }
// }
// console.log(factorial(4));

// Task 3
var a = 1;
var b = 1;
var c;
var n = 7;
var i = n;
while (i > 2) {
  c = a + b;
  a = b;
  b = c;
  i -= 1;
}
console.log(c);
// console.log(c); // 2
// console.log(fib(7)); // 13
// console.log(fib(77)); // 5527939700884757

// Unit https://learn.javascript.ru/named-function-expression
// Task 1
// 1) В первом случае выведется function... так как вызывался не  результат работы функции, а значение переменной.
// 2) Так как есть скобки снаружи, значит функция есть частью выражения и это именованное функциональное выражение. Следовательно, переменную g будет видно лишь внутри функции и при вызове значения g, программа выдаст "undefined variable".
 