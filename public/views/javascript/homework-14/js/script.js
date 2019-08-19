'use strict';
// Unit link - http://web.archive.org/web/20190405104501/https://learn.javascript.ru/static-properties-and-methods

// Task 1
// function Article() {
//   this.created = new Date();
//   Article.count += 1;
//   Article.date = this.created;
// }

// Article.count = 0;
// Article.date = '';
// Article.showStats = function () {
//   console.log('Всего: ' + Article.count + ', Последняя дата: ' + Article.date);
// }

// new Article();
// new Article();
// Article.showStats(); // Всего: 2, Последняя: (дата)
// new Article();
// Article.showStats(); // Всего: 3, Последняя: (дата)

// Unit link - http://web.archive.org/web/20190405104501/https://learn.javascript.ru/call-apply

// Task 1
// function sumArgs() {
//   return Array.prototype.reduce.call(arguments, function (a, b) {
//     return a + b;
//   });
// }
// console.log(sumArgs(1, 2, 3)); // 6, аргументы переданы через запятую, без массива

// Task 2 // Сам не решил, сверялся с овтетами
// function applyAll (func) {
//   return func.apply(this, Array.prototype.slice.call(arguments, 1));
// }
// function mul() {
//   return [].reduce.call(arguments, function(a, b) {
//     return a * b;
//   });
// }
// console.log(applyAll(Math.max, 2, -2, 3)); // 3
// console.log(applyAll(mul, 2, 3, 4)); // 24
