'use strict';
// Additional task
// Write a function which checks whether the given value is IP.
// The pattern of IP is such a string '[0-999].[0-999].[0-999].[0-999]'
// Additionally write a class Buffer and use it in your solution. It must have get(), add() and reset() methods.

// Helper function to check whether it is an integer.
function isInt (n) {
  if (!isNaN(parseInt(n, 10)) && isFinite(n)) {
    return true;
  }
  return false;
}

function Buffer (initialValue) {
  this._str = initialValue;
}

Buffer.DEFAULT_VALUE = '';

Buffer.prototype.get = function () {
  return this._str;
}
Buffer.prototype.add = function () {
  return this._str += str;
}
Buffer.prototype.reset = function () {
  return this._value = Buffer.DEFAULT_VALUE;
}

function isIP (str) {
  if (typeof str !== 'string') {
    return false;
  }
  if ((str.indexOf(' ') !== -1) || (str.indexOf('.') === -1)) {
    return false;
  }
  let arr = str.split('.');
  if (arr.length < 4 || arr.length > 4) {
    return false;
  }
  for (let i = 0; i < arr.length; i += 1) {
    if (!isInt(arr[i]) || (arr[i] < 0) || (arr[i] > 999)) {
      return false;
    }
  }
  return true;
}

// Falsy values
console.log(isIP('sdfsdf'));
console.log(isIP('454454'));
console.log(isIP(null));
console.log(isIP('45.45.47.'));
console.log(isIP('45.45.47. 2'));
console.log(isIP('45.4547. 2'));
console.log(isIP('00000000'));
console.log(isIP('00000000'));
console.log(isIP('11.8.v.841'));
console.log(isIP('11.858.841'));
console.log(isIP('11.85.8.8(1'));
console.log(isIP('12.12.14.8.'));
console.log(isIP('.254.255.0'));
console.log(isIP('1.1.1.1a'));
console.log(isIP('1'));
console.log(isIP('1.23.256.255.'));
console.log(isIP('1.23.256..'));
console.log(isIP('0..1.0'));
console.log(isIP('1.1.1.1.1'));
console.log(isIP('a0.1.1.1'));
console.log(isIP('129380129831213981.255.255.255'));
console.log(isIP('129380129831213981.255.255.255'));
console.log(isIP('255.255.255.255abcdekjhf'));
console.log(isIP('7283728'));
console.log(isIP('---------------------------------'));
// True values
console.log(isIP('45.45.47.2'));
console.log(isIP('00.4.0.0'));
console.log(isIP('1.1.1.1'));
console.log(isIP('10.10.10.10'));
console.log(isIP('108.108.108.108'));
console.log(isIP('11.8.47.841'));
console.log(isIP('912.14.0.2'));
console.log(isIP('0.254.255.0'));
console.log(isIP('1.256.1.1'));
console.log(isIP('0.1.1.256'));
