'use strict';
/*
  Есть список категорий с классом categories (на вкладке HTML).

  Напишите код, который для каждого элемента li (первая вложенность)
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li

  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/
//
// const liCount = document.querySelector('.categories');
// let liCountArr = Array.from(liCount.children);
//
// //liCountArr.map(elem)
// // console.log(liCountArr[0].firstChild.textContent);
// // console.log(liCountArr[0].firstElementChild.childElementCount);
//
// liCountArr.map( el => console.log(`Категорія = ${el.firstChild.textContent} , кількість лішок ${el.firstElementChild.children.length}`));


// ----------------------------------Task2------------------

/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/

// const list = document.querySelector('.list')
// list.firstElementChild.style.color = '#f4120c';
// list.lastElementChild.style.color = '#1a27f4';

//-------------------------------------task3---------------------


/*
Дан ul склассом .list и массив строк.

Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/
//
// const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];
// const list = document.querySelector('.list');
// for (let el of elements) {
//     const li =document.createElement('li');
//     list.append(li);
//     li.append(el);
// }


//-------------------------------------task4---------------------


/*
  Напишите скрипт для создания списка ul.

  Для каждого пункта:
    - Запрашивайте содержимое пункта li у пользователя с помощью prompt.
    - Создавайте пункт и добавляйте его к ul.
    - Процесс прерывается, когда пользователь нажимает Cancel.
    - Все элементы списка должны создаваться динамически.
*/
// const list = document.querySelector('body');

// const list = document.body;
// const ul = document.createElement('ul');
// list.append(ul);
// let result = '';
//
// while ( result !== null){
//     result = prompt('Enter "li" value:');
//     if (result !== null) {
//         const li = document.createElement('li');
//         li.textContent = result;
//         ul.append(li);
//     }
// }

//-------------------------------------task5---------------------

/*
  Есть список с классом .size-filter из произвольного
  количества чекбоксов, каждый из которых содержит
  размер одежды в фильтре.

  Напишите функцию getInputsData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.

  Возвращает массив значений атрибута data-prop.
*/

//const listCheck


//-------------------------------------task6---------------------
/*
  Создайте функцию createPostCard(), которая
  создает и возвращает DOM-узел карточки поста.

  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.

  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/

// const article = document.querySelector('.post')
// const body = document.querySelector('body');
// // const body = document.body;
//
// let objList = {
//     imgCard: "http://via.placeholder.com/400x150",
//     h2Card: "Lorem ipsum dolor",
//     pCard: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
//     aCard: "#",
// };
//
//
//
//
// //Завести змінні через деструктурізацію, тобто createPostCard(objList.imgSrc, objList. h2 )
//
// function createPostCard(obj) {
//     const div = document.createElement('div');
//     const img = document.createElement('img');
//     const h2 = document.createElement('h2');
//     const p = document.createElement('p');
//     const a = document.createElement('a');
//
//     div.classList.add('post');
//     img.classList.add('post__image');
//     h2.classList.add('post__title');
//     p.classList.add('post__text');
//     a.classList.add('button');
//
//     img.setAttribute('src',obj.imgCard);
//     img.setAttribute('alt','post image');
//     a.setAttribute('href',obj.aCard);
//
//     h2.textContent = obj.h2Card;
//     p.textContent = obj.pCard;
//     a.textContent = "Read more";
//
//     div.append(img);
//     div.append(h2);
//     div.append(p);
//     div.append(a);
//
//     return div
// }
//
// body.append(createPostCard(objList));

//-------------------------------------task7---------------------


/*
  В HTML-документе уже есть тег с id="root" (вкладка HTML)

  Создайте функцию createBoxes(num), которая принимает 1 параметр num - число.

  Функция создает столько div, сколько указано в num и возвращает их в одном
  общем контейнере. После чего необходимо повесить результат работы функции
  в div с id="#root"

  Каждый div:
    - Имеет случайный rgb цвет фона
    - Размеры самого первого div - 30px на 30px.
    - Каждый следующий div после первого, должен быть шире и выше предыдущего
      на 10px
*/
// const rootDiv = document.querySelector('#root');
//
//
// function createBoxes(num) {
//     const frag = document.createDocumentFragment();
//     for ( let i = 0; i<num; i++) {
//         const box = document.createElement('div');
//         let size = 30 + 10*i;
//         box.style.width = `${size}px`;
//         box.style.height = `${size}px`;
//         let r = Math.floor(Math.random() * 255);
//         let g = Math.floor(Math.random() * 255);
//         let b = Math.floor(Math.random() * 255);
//         box.style.backgroundColor = `rgb(${r},${g},${b})`;
//         frag.append(box);
//     }
//     return frag
// }
//
// rootDiv.append(createBoxes(8));


//-------------------------------------task1 module08---------------------

// stopPropogation - в середині елемента обработчики завершують роботу, але не "вспливають"
// stopPropogationImidatly - більше не виконувати обработчики навіть в середині елемента


// 2 ) Написати скрипт який буде рахувати загальну вартість мяса і виводити її на екран
// 3) При змінні данних в інпуті №1 чи №2 автоматично має перераовуватися загальна вартість
// 4) Завжди має відображатися валюта - гривня
// 5) Загальна сума відображається з копійками (2 знаки після коми)
// 6) В підписі другого інпута має бути кольорова підказка скільки кілограм вибрав користувач на другому інпуті.
// 7) Кольрова підказка має змінювати своє значення при перетягувані повзунка.
// 8) В інпуті №2 мін і мах поріг встановлюєте самостійно.
// 9) При завантаженні сторінки скрип має автоматично розрахувати вартість на основі данних за замовчуванням які ви встановите в розмітці.

// let form = document.querySelector('.form');
// let priceTotal = document.querySelector('.total');
// let span  = document.querySelector('.amount');
//
// function totalPrice() {
//     let priceInput = document.querySelector('#price').value;
//     let quantityInput = document.querySelector('#quantity').value; // ('[name = quantity]');
//     let sum = priceInput * quantityInput;
//     priceTotal.textContent = `${sum.toFixed(2)}uah`;
//     span.textContent = quantityInput;
// }
// form.addEventListener('input', totalPrice);
// window.addEventListener('DOMContentLoaded', totalPrice);



//-------------------------------------task1 module08---------------------
//
// 1) Створити в HTML 5 кнопок
// 2) Написати скрипт який при ховері буде міняти позицію кнопок на екрані, щоб не можна було по них клікнути
// 3) Нова позиція кнопок має бути випадковою
// 4) Кнопки не повинні виїжати за межі екрану
// 5) Позиція кнопок має вираховуватися відносно висоти і ширини вікна браузера
// 6) Переміщення кнопок зробити плавним за допомогою transition
// 7) Визначати кнопку на якій відбулася подія двома способами:
//     7.1) event
// 7.2) this
// 8) Корисні команди:
//     window.innerWidth
// window.innerHeight
// clientHeight - розміри клієнта
// clientWidth
// mouseenter


//mouseover - навести на елемент
//mouseenter - навести на чайлд
//window.innerWidth
//window.innerHeight

// let btns = document.querySelectorAll('.btn');
// let container = document.querySelector('.container');
// console.log(btns);


//через event

// function moveBtn(evt) {
//     console.log(evt);
//     let randomLeft = Math.floor(Math.random()*(window.innerWidth - evt.target.clientWidth));
//     let randomTop = Math.floor(Math.random()*(window.innerHeight - evt.target.clientHeight));
//
//     evt.target.style.top = `${randomTop}px`;
//     evt.target.style.left = `${randomLeft}px`;
//
// }

// за допомогою this

// function moveBtn() {
//     // console.log(evt);
//     let randomLeft = Math.floor(Math.random()*(window.innerWidth - this.clientWidth));
//     let randomTop = Math.floor(Math.random()*(window.innerHeight - this.clientHeight));
//
//     this.style.top = `${randomTop}px`;
//     this.style.left = `${randomLeft}px`;
//
//     console.log(this);
// }
//
// // container.addEventListener('mouseenter', moveBtn); // не працює
//
// btns.forEach(el => el.addEventListener('mouseenter',moveBtn));

//делегирование - навешивание обработчика на "парент",  через event.target можемо з'ясувати, на що був клік

//-------------------------------------task2 module08---------------------

//+50px bold red

// let listItems = document.querySelectorAll('.list__item'); // і робить з них псевдомасив
// let list = document.querySelector('.list');
// let listArr = Array.from(listItems);
// console.log(listArr);
//
// function liClick(e) {
//     console.log(e.target);
//     console.log(listArr.indexOf(e.target)+1);
//
// }
//
// list.addEventListener('click', liClick);

//----------------------------------------------------------------
// let listItems = document.querySelectorAll('.list__item');
// let list = document.querySelector('.list');
// let listArr = Array.from(listItems);
//
// function liClick(e) {
//     e.target.classList.toggle('li');
//     let checkResult = listArr.forEach(el => el.classList.contains('li'));
//     console.log(e);
// }
// list.addEventListener('click', liClick);
//---------------------------------------------------------------------
// let listItems = document.querySelectorAll('.list__item');
// let list = document.querySelector('.list');
// let btn = document.querySelector('.btn')
//
// function liClick() {
//     list.classList.toggle('ul');
//     console.log(list);
// }
//
// btn.addEventListener('click', liClick);


let vont =document.querySelector('.cont');
let bodyPaste = document.body;


let galleryArr = [
    {small: 'https://placeimg.com/480/240/animals', big: 'https://placeimg.com/960/480/animals'},
    {small: 'https://placeimg.com/480/240/arch', big: 'https://placeimg.com/960/480/arch'},
    {small: 'https://placeimg.com/480/240/nature', big: 'https://placeimg.com/960/480/nature'},
    {small: 'https://placeimg.com/480/240/people', big: 'https://placeimg.com/960/480/people'},
    {small: 'https://placeimg.com/480/240/tech', big: 'https://placeimg.com/960/480/tech'},
    {small: 'https://placeimg.com/480/240/animals/grayscale', big: 'https://placeimg.com/960/480/animals/grayscale'},
    {small: 'https://placeimg.com/480/240/tech/sepia', big: 'https://placeimg.com/960/480/tech/sepia'},
    {small: 'https://placeimg.com/480/240/people/sepia', big: 'https://placeimg.com/960/480/people/sepia'},
    {small: 'https://placeimg.com/480/240/arch/sepia', big: 'https://placeimg.com/960/480/arch/sepia'},
    {small: 'https://placeimg.com/480/240/nature/grayscale', big: 'https://placeimg.com/960/480/nature/grayscale'},
];


//
// function prepArr(arr) {
//     let frag = document.createDocumentFragment()
//     for (let el of arr) {
//         let img = document.createElement('img')
//         img.setAttribute('src', el.small);
//         img.setAttribute('alt', "picture");
//         img.setAttribute('data-big', el.big);
//         frag.append(img);
//     }
//     return frag
// }
//
// vont.append(prepArr(galleryArr));
//
function gallery(e) {
    let overlay = document.createElement('div');
    bodyPaste.prepend(overlay);
    console.log(e.target.dataset.big);

    let img = document.createElement('img');
    img.classList.add('big-img');
    overlay.classList.add('overlay');
    img.setAttribute('src',e.target.dataset.big);
    img.setAttribute('alt','picture');
    overlay.append(img);


    overlay.addEventListener('click',function (event) {
        if (event.target === this) {
            this.remove();
        }
    })
}




//--------------------------------------------
function createTemp(arr){
    let result = arr.reduce((acc,el) => acc + `<img src=${el.small} alt = 'picture' data-big = ${el.big}>`,'');
    console.log(result);
    vont.innerHTML = result;
}

createTemp(galleryArr);
vont.addEventListener('click', gallery);