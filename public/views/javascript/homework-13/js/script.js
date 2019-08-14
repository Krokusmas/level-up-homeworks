'use strict';
// Unit link - http://web.archive.org/web/20190807100006/https://learn.javascript.ru/descriptors-getters-setters

// Task 1
function User (fullName) {
  this.fullName = fullName;
  Object.defineProperties(this, {
    firstName: {
      get: function () {
        return this.fullName.split(' ')[0];
      },
      set: function (value) {
        this.fullName = value + ' ' + this.lastName;
      }
    },
    lastName: {
      get: function () {
        return this.fullName.split(' ')[1];
      },
      set: function (value) {
       this.fullName = this.firstName + ' ' + value;
      }
    }
  });
}

var vasya = new User('Василий Попкин');

// чтение firstName/lastName
console.log(vasya.firstName); // Василий
console.log(vasya.lastName); // Попкин

// запись в lastName
vasya.lastName = 'Сидоров';
console.log(vasya.fullName); // Василий Сидоров
