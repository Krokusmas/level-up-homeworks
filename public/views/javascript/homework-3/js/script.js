'use strict';
// Unit link - https://learn.javascript.ru/ifelse

// Task 1
if ("0") {
  alert( 'Привет' );   // Выведется ли alert? Да, т.к. строка - это true
}  


// Task 2
var officialNameJs = prompt ('Каково «официальное» название JavaScript?', '');
if (officialNameJs === 'EcmaScript') {
  console.log('Верно!');
} else {
    console.log('Не знаете? «ECMAScript»!');
}

// Task 3
var temperature = prompt ('Сколько градусов по Цельсию в твоём холодильнике?', '');
if (temperature > 0) {
  console.log(1);
} else if (temperature < 0) {
  console.log(-1);
} else {
  console.log(0); 
}

// Task 4
var userName = prompt ('Кто пришёл?', '');
if (userName === 'Админ') {
  var password = prompt ('Пароль?', '');
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
var message = (login === 'Вася') ? 'Привет' :
(login === 'Директор') ? 'Здравствуйте' :
(login === '') ? 'Нет логина' : '';
