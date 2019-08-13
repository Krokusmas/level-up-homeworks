'use strict';
// Unit link - http://web.archive.org/web/20190807100006/https://learn.javascript.ru/descriptors-getters-setters

// Task 1
function User (fullName) {
  this.fullName = fullName;
}

var vasya = new User('Василий Попкин');

Object.defineProperty(vasya, 'firstName', {writable: true, configurable: true});
Object.defineProperty(vasya, 'lastName', {writable: true, configurable: true});

Object.defineProperty(vasya, 'lastName', {
  fullName: {
    get: function () {
      return this._firstName + ' ' + this._lastName;
    },
  }
});

Object.defineProperties(vasya, {
  firstName: {
    get: function () {
      let arr = this.fullName.split(' ');
      this.firstName = arr[0];
      return this._firstName;
    },
    set: function (value) {
     this._firstName = value;
    }
  },
  lastName: {
    get: function () {
      let arr = this.fullName.split(' ');
      this.lastName = arr[1];
      return this._lastName;
    },
    set: function (value) {
     this._lastName = value;
    }
  }
});

// чтение firstName/lastName
console.log(vasya.firstName); // Василий
console.log(vasya.lastName); // Попкин

// запись в lastName
vasya.lastName = 'Сидоров';
console.log(vasya.fullName); // Василий Сидоров
