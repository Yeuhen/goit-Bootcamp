'use strict';
//dom дин батьківський тег, можуть декілька сусідніх елементів і безліч дочірніх

//кожен тег, це окремий елемент dom
//dom - разметка
//cssom - стилі

// щоб вибрати елемент на сотрінці і почати з ним працювати:
// console.log(document); //оступ до усього документу

//встроєний метод документа querySelector

// let title = document.querySelector('#title'); // вибрати перший, що зустріли ES6
// let title2 = document.querySelectorAll('#title'); // вибрати усі з  сайту
// //querySelector повертає псевдомасив
// console.log(title);

// ---------------------- classes

// old
// console.log(document.getElementsByClassName('text'));
// console.log(document.getElementsByTagName('li'));
// console.log(document.getElementById('title'));

// new
// let title = document.querySelector('#title');
// let li = document.querySelectorAll('.item');
//
// const text = document.querySelector('.text');
// console.log(text);
// console.log(text.classList[1]);
// console.log(text.classList.value);
// console.log(text.classList.contains('big')); //чи є класс big?
// text.classList.add('big');
// console.log(text.classList.contains('big'));
// text.classList.remove('big');
// console.log(text.classList.contains('big'));
// text.classList.toggle('big'); // якщо класс є, то він його видалить, якщо немає, то додає.
// console.log(text.classList.contains('big'));


// ----------------------- attr

// const link = document.querySelector('a');
// console.log(link);
// console.log(link.hasAttribute('href')); //перевіряє чи є такий атрібут, чи ні
// console.log(link.getAttribute('href')); // видає значення атрибуту, тобто лінк.
// link.setAttribute('title', 'super link'); //1 аргумент - назва атрибута, 2-й значення атрибута
// link.setAttribute('id', 'link-one');
// console.log(link);
// console.log(link.attributes);
// link.removeAttribute('title');
// console.log(link.attributes);
// console.log(link.href);
// console.log(link.title);
// console.log(link.title = 'test');


//--------------------------------------------test_task

// const title = document.createElement('h1');
// title.textContent = 'I am created from JS';
// console.log(title);
// const container = document.querySelector('div');
// // container.appendChild(title);  // вставляються в самий кінець контейнера
// const firstTitle = document.querySelector('#title');
// container.insertBefore(title, document.querySelector('#title'));
//
//
// //----------------------- insert on page-------------------
// const article = document.querySelector('article');
// container.append(title); // вставляється останнім у Контейнері
// container.prepend(title); // ставить title в самий початок
// article.after(title); //метод after для об'єкта article
// article.before(title);
// article.replaceWith(title); // замінює article на title
// document.querySelector('.list').remove(); // видаляє все, що має цей клас

//---------------------

//inner.HTML

// const div = document.querySelector('div');
// div.textContent = 'Hello world';
// div.innerHTML = '<h1>Hello World </h1> '; // видаляє все з классу і пише своє
// div.textContent += '<p> Hello world</p>'; //

// const frag = document.createDocumentFragment(); // в нього додаємо наші фрагменти, а потім за один раз це все вставляється на сайт

// let root = document.querySelector('.container');
// const frag = document.createDocumentFragment();
// for (let i = 0; i < 100; i++) {
//     let box = document.createElement('div');
//     box.classList.add('box');
//     frag.append(box);
// }
// root.append(frag); // працює виключно з елементами, які створювались за допомогою create


// let str = '';
// for (let i = 0; i< 100; i++) {
//     str += '<div class="box"></div>'
// }
//
// root.innerHTML = str;

// ul.insertAdjacentHTML('beforebegin',text); //перед ul
// ul.insertAdjacentHTML('afterend',text); //після ul
// ul.insertAdjacentHTML('afterbegin',text); //в середині контейнеру спочатку
// ul.insertAdjacentHTML('beforeend',text); //в середині контейнеру вкінці

// insertAdjacentElement  //се те саме, що й з HTML
// insertAdjacentText

// //clone
// const article = document.querySelector('.article');
// const clone = article.cloneNode(true); // false - скопіює лише тег, true - скопіються тег з наповненням
// console.log(clone);
//
//
//------------------------------------Events---------------------


//clicl
//submit
//focus
//keydown
//keyup
//keypress
//input -в формі відбувається будьяка зміна
//DOMContentLoaded - коли браузер закінчить малювати DOM

// const one = document.querySelector('#one');
// const many  = document.querySelector('#many');
//
// function first() {
//     alert(`I am action from first button`);
// }
//
// one.addEventListener('click', first);
//
// // function second() {
// //     alert(`I am action from second button`);
// // }
// // function hello() {
// //     alert(`hello`);
// //
// // }
// //
// // many.addEventListener('click', function () {
// //     first();
// //     second();
// //     hello();
// // });
//
//
// function withRemoveListener() {
//     alert(`I am action from first button and i remove after end`);
//     one.removeEventListener('click', withRemoveListener);
//
// }
//
// one.addEventListener('click', withRemoveListener);


//----------not_work---------------------
// let clickNumber = 0;
// let firstButton = document.querySelector('#one');
// firstButton.addEventListener('click', function () {
//     clickCount(clickNumber);
// });
//
// function clickCount(number) {
//     if (number > 3) {
//         alert(`Go away!`);
//     } else{
//     number += 1;
//     console.log(number);}
// }

//------------------------------work-----------------
// let firstButton = document.querySelector('#one')
//
// function clickCount() {
//     let clickNumber = 0;
//     let limit = 3;
//     function increment() {
//         clickNumber += 1;
//         if(clickNumber > limit){
//             alert(`Go away!`);
//         }
//         console.log(clickNumber);
//     }
//     return increment;
// }
//
// let counter = clicCount();
// console.log(counter);
//
// firstButton.addEventListener('click', counter);

//-----------------------------------------
//
// function classAdd() {
//     this.classList.toggle('bigBtn');
// }
//
// // classAdd();
//
// let one = document.querySelector('#one');
//
// one.addEventListener('click', classAdd);

//------------------------------------------------------
//
// function showEvent(event) {
//     console.log(event);
// }
//
// //об'єкт event, в який потрапяє все, що відбувається при кліку
// //target - на чому спрацював клік
//
// let one = document.querySelector('#one');
// one.addEventListener('click', showEvent);
//
// // з клавіатури
// window.addEventListener('keypress', showEvent);


//--------------------------всплытие---вспливає event--------------------
//оброботчик навішуємо на
//
// function resizeFont(e) {
//     console.log('this',this);
//     console.log('target',e.target);
//     e.target.classList.toggle('bigText');
// }
// // bad practice
// // let listItem = document.querySelectorAll('.item');
// // listItem.forEach(el => el.addEventListener('click', resizeFont));
// // console.log(listItem);
//
// // good
//
// let list = document.querySelector('.list');
// list.addEventListener('click', resizeFont);

//---------------------------------------------------------

// target потрапляє подія, яка активувала подію (на що ми клацнули)
// в current target отрапляє подія, яка дійшла ()
//event.stop.propogation(); припинити всплиття
//
// function fromBoss() {
//     alert(`Hello i am active when bubbling up to Boss`);
//     console.log('boss target', event.target);
//     console.log('boss currentTarget', event.currentTarget);
// }








//------------------------------навігація -----------------
// const html = document.documentElement;
// console.log(html);
// const body = document.body;
// console.log(body);
// console.log(body.childNodes); // ХТМЛ елементи з коментарями, ентерами і т.д.
// console.log(body.children);  // лише ХТМЛ елементи
// console.log(body.firstChild); // перший елемент в середині контейнера (по суті перший перенос строки)
// console.log(body.firstElementChild);  //перший дочірній елемент (p, div, або будьякий інший елемент)
// console.log(body.lastChild);  //
// console.log(body.lastElementChild); // останній елемент в середині контейнера
// const div = body.children[0];
// console.log(div);
// console.log(div.children);
// console.log(div.lastElementChild);
// console.log(div.lastChild);
// const p = div.children[1];
// console.log(p);
// console.log(p.previousElementSibling); // елемент сусідній "зверху"
// console.log(p.previousSibling);
// console.log(p.nextElementSibling);  // елемент сусідній "знизу"
// console.log(p.nextSibling);
// console.log(p.parentNode);  // батьківський елемент

// const text = document.querySelector('.text');
// text.style.fontSize = '50px';
// console.log(text.style);   // якась реакція на дії користувача

const userName = document.querySelector('.name');
const btn = document.querySelector('#send');
btn.addEventListener('click', function (evt) {
    evt.preventDefault();
    console.log(userName.value);
    userName.value='';

});
console.log(userName.value);
