'use strict';
// Unit link - https://learn.javascript.ru/while-for

// Task 1
// последнее значение будет 1, т.к. при 0 в условии цикла будет получено значение false и цикл остановится. На первой итерации команда alert выведет 3, после чего значение будет уменьшено на 1. 
// Затем выведет 2 и уменьшит до 1.
// Затем выведет 1 и уменьшит до 0. Конец цикла.

// Task 2
// 1. Цикл while выведет значения 1 до 4.
// 2. Цикл while выведет значения 1 до 5, т.к. постфиксный плюс увеличивает значение переменной, но возвращает старое значение в текущем выражени сравнения. Вначале переменная равна 0. После сравнения следует новая инструкция alert, в которой значение переменной уже будет на 1 больше.
// На последнем шаге значение переменной в условии будет 4, цикл проходит дальше и в alert выведется увеличенное на один число 5.

// Task 3
// От 0 до 4 в обоих случаях т.к. инструкция alert будет выполняться сразу если условие верно и только после этого переменная будет увеличена в обоих случаях.

// Task 4
var i;
for (i = 2; i <= 10; i += 1) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Task 5
var i = 0;
while (i < 3) {
  console.log('номер ' + i + '!');
  i + 1;
}

// Task 6
var num;
while (true) {
  num = +prompt('Введите число больше 100', '');
  if (num > 100) {
    break;
  } else if (!num) {
    break;
  }
} 

// Второй вариант через do..while
var num;
do {
  num = +prompt('Введите число больше 100', '');
} while (i <= 100 && num != null);

// Task 7
nextPrime:
for (var i = 2; i <= 10; i += 1) {
  for (var j = 2; j < i; j += 1) {
    if (i % j === 0) continue nextPrime 
  }
  console.log(i); 
}

// Unit link https://learn.javascript.ru/switch

// Task 1
var browser = 'Chrome';
if (browser === 'IE') {
  console.log('О, да у вас IE!');
} else if (browser === 'Chrome'|| browser === 'Firefox' || browser === 'Safari' || browser === 'Opera'); {
    console.log('Да, и эти браузеры мы поддерживаем');
  } else { 
    console.log('Мы надеемся, что и в вашем браузере все ок!');
  }

// Task 2
var a = +prompt('a?', '');
switch (a) {
  case 0: {
    console.log(0);
    break;
  } 
  case 1: {
    console.log(1);
    break; 
  }
  case 2:
  case 3: {
    console.log('2,3');
    break;
  }
}

// Unit link https://learn.javascript.ru/function-basics

// Task 1
// Есть else или нет - без разницы, программа работает одинаково.

// Task 2
// Вариант с '?'
function checkAge (age) {
  return (age > 18) ? true : confirm('Родители разрешили?');
}

// Вариант с ||
function checkAge (age) {
  return (age > 18) || confirm('Родители разрешили?');
}

// Task 3
function min (a, b) {
  if (a < b) {
    return a;
  }
  return b;
}
var a = +prompt('Введите а', '');
var b = +prompt('Введите b', '');
min(a, b);

// Task 4
function pow (x, n) {
  var result = x;
  var i;
  for (i = 1; i < n; i += 1) {
    result *= x;
  }
  console.log(result);
  return result;
}
var x = +prompt('Введите число', '');
var n = +prompt('Введите степень', '');

if (n < 1) {
  console.log('Неверный формат. Введите число > 1');
} else {
  pow (x, n);
}
