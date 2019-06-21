'use strict';
// Unit link - https://learn.javascript.ru/ifelse

// Task 1
if ("0") {
  alert( 'Привет' );
}  // Выведется ли alert? Да, т.к. непустая строка - это true  


// Task 2
var officialNameJs;
officialNameJs = prompt ('Каково «официальное» название JavaScript?', '');
if (officialNameJs === 'EcmaScript') {
  console.log('Верно!');
} else {
  console.log('Не знаете? «ECMAScript»!');
}

// Task 3
var temperature;
temperature = prompt ('Сколько градусов по Цельсию в твоём холодильнике?', '');
if (temperature > 0) {
  console.log(1);
} else if (temperature < 0) {
  console.log(-1);
} else {
  console.log(0); 
}

// Task 4
var userName;
var password;
userName = prompt ('Кто пришёл?', '');
if (userName === 'Админ') {
  password = prompt ('Пароль?', '');
if (password === 'Черный Властелин') {
  console.log('Добро пожаловать!');
  } else if (password === null) {
    console.log('Вход отменен');
  } else {
    console.log('пароль неверен');
  }
} else if (userName === null) {
  console.log('Вход отменен');
} else { 
  console.log('Я вас не знаю');
}

// Task 5
result = (a + b < 4) ? 'Мало' : 'Много';

// Task 6
var message;
message = (login === 'Вася') ? 'Привет' : (login === 'Директор') ? 'Здравствуйте' : (login === '') ? 'Нет логина' : '';

// Unit link https://learn.javascript.ru/logical-ops

// Task 1

// выведет 2, т.к. это число даёт значение true и является первым неложным значением слева направо.

// Task 2

//внутренний alert выведет 1, но т.к. вызов alert дает значение undefined, то оператор ИЛИ пойдет проверять следующее значение и остановится на 2, т.к. это значение true. Итого выведется 1 и затем 2.

// Task 3

//null т.к. это первое ложное значение.

// Task 4

//1 т.к. alert вовзращает значение udefined на нем вычисление и закончится.

// Task 5

// выведет 3. У оператора И приоритет выше, поэтому он выдаст последнее значение true - это 3. Затем выполнится оператор ИЛИ null || 3 , где значение 3 - true и на нём останавливается вычисление.

// Task 6
if (!(age >= 14 && age <= 90));
if (age <14 || age >90);

// Task 7

// первое - верно, т.к. число -1 даст значение true.
// это if неверно т.к. ноль даст значение false.
// третье - верно, т.к. оператор И имеет приоритет и оба его операнда дают значение true. 
// Затем сравнивается null и 1, оператор ИЛИ выдаст значение 1, т.к. оно даёт true.

// Unit link https://learn.javascript.ru/types-conversion

// Task 1

"" + 1 + 0 // 10
"" - 1 + 0 // -1
true + false // 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // "9px"
"$" + 4 + 5 // "$45"

"4" - 2 // 2

"4px" - 2 // NaN

7 / 0 // Infinity

"  -9\n" + 5 // "-9\n5"
"  -9\n" - 5 // -14
5 && 2 // 2

2 && 5 // 5

5 || 0 // 5

0 || 5 // 5
null + 1 // 1
undefined + 1 // NaN
null == "\n0\n" // false
+null == +"\n0\n" // true
