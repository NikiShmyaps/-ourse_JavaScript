let books = document.querySelectorAll('.books'),
    book = document.querySelectorAll('.book');
books[0].insertBefore(book[1], book[0]);
books[0].insertBefore(book[4], book[2]);
books[0].insertBefore(book[3], book[2]);
books[0].insertBefore(book[5], book[2]);

let body = document.body;
body.setAttribute('style', 'background-image: url(./image/you-dont-know-js.jpg);');

let bookThree = document.getElementsByTagName('a');
bookThree[2].textContent = 'Книга 3. this и Прототипы Объектов';

let adv = document.querySelector('.adv');
body.removeChild(adv);

let list = document.getElementsByTagName('ul'),
    listItem = document.getElementsByTagName('li');
list[1].insertBefore(listItem[8], listItem[16]);
list[1].insertBefore(listItem[12], listItem[14]);
list[1].insertBefore(listItem[11], listItem[9]);
list[1].insertBefore(listItem[12], listItem[10]);

list[4].insertBefore(listItem[45], listItem[38]);
list[4].insertBefore(listItem[39], listItem[42]);
list[4].insertBefore(listItem[42], listItem[45]);

let listItemClone = listItem[56].cloneNode();
list[5].appendChild(listItemClone).textContent = 'Глава 8: За пределами ES6';
list[5].insertBefore(listItem[56], listItem[58]);