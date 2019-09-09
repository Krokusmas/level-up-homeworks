'use strict';
// Unit link - http://web.archive.org/web/20190405104454/https://learn.javascript.ru/traversing-dom

// Task 1
// Напишите код, который получит элемент HEAD.
// Напишите код, который получит UL.
// Напишите код, который получит второй LI. Будет ли ваш код работать в IE8-, если комментарий переместить между элементами LI?
// console.log(document.head);
// console.log(document.body.children[1]);
// console.log(document.body.children[1].children[1]);
// В IE8 код работать не будет т.к. узел комментария так же будет учитываться в коллекции.

// Task 2
// Придумайте самый короткий код для проверки, пуст ли элемент elem.
// «Пустой» – значит нет дочерних узлов, даже текстовых.

// if (!elem.childNodes.length) { 
//   console.log('узел elem пуст');
// }

// Task 3
// Если elem – это произвольный узел DOM…
// 1. Верно ли, что elem.lastChild.nextSibling всегда null?
// 2. Верно ли, что elem.children[0].previousSibling всегда null ?
// Ответ 1: верно, потому что у узла либо может не быть дочерних элементов вообще, либо если есть дочерние элементы, то после последнего не может быть следующего.
// Ответ 2: не верно т.к. перед первым элементом может быть например текстовый узел. 

// Task 4
// Напишите код, который выделит все ячейки в таблице по диагонали. Вам нужно будет получить из таблицы table все диагональные td и выделить их, используя код:

// в переменной td DOM-элемент для тега <td>
// td.style.backgroundColor = 'red';
// let table = document.body.lastElementChild.previousElementSibling;
//   for (let i = 0; i < table.rows.length; i += 1) {
//     let row = table.rows[i];
//     row.cells[i].style.backgroundColor = 'red';
//   }
