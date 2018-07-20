'use strict';

//Протокол - набір правил за якими відбувається передача данних
//AJAX і XMLHttpRequest
//AJAX - Asynchronous Javascript and XML — «асинхронный JavaScript и XML»

// const req = new XMLHttpRequest(); //отримуємо об'єкт req
//
// // req.open(method, URL, async);  // false - sync, true - async
// req.open('GET', 'https://jsonplaceholder.typicode.com/users', false);
// req.setRequestHeader('Content-Type', 'application/json');
// req.send();
//
// //req.abort - припинити запрос
// //status  - відповіді серверу на наш запит
// //
//
// //JSON - всі данні в форматі строки
// // console.log(req);
// // settings
// // req.open(method, URL, async);
// req.open('GET', 'https://jsonplaceholder.typicode.com/users', false);
// req.setRequestHeader('Content-Type', 'application/json');
// // req.send([body])
// req.send();
//
// // req.abort()
//
// // status
// // https://developer.mozilla.org/ru/docs/Web/HTTP/Status
//
// if (req.status !== 200) {
//     console.error(`${req.status}: ${req.statusText} `)
// } else {
//     console.log(JSON.parse(req.response));
// }
// console.log(`test`);
//
// const dog = {
//     name: "Mango",
//     age: 3,
//     isHappy: true
// };
//
// const dogJSON = JSON.stringify(dog); // перетворює в формат JSON
//
// //Зворотня задача - отримуємоJSON і перетворюємо у об'єкт
// console.log(json);
// const emp = JSON.parse(json);
// console.log(emp);

//----------------------------------------------------------------------


// 0 - початок
// 1 - икликаний open
// 2 - отримані заголовки
// 3 - отримуємо данні
// 4 - запит закінчено


//readystatechange -відстежує стан запиту
//асінхронний запит
//
// const req = new XMLHttpRequest();
// req.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
// req.setRequestHeader('Content-Type', 'application/json');
// req.send();
// req.onreadystatechange = function () {
//     if (req.readyState !== 4) {
//         console.log(req.readyState);
//         return
//     }
//     if (req.status !== 200) {
//         console.error(`${req.status}:${req.statusText}`);
//     } else {
//     console.log(JSON.parse(req.response));
// }
// };


//---------------------------FETCH----------------------------

//fetch сучасний спосіб керування запросами

// fetch(url, {option}); // за замовчуванням options = GET

// let ud = 152;
// fetch(url, {
//     method: 'DELETE',
//     body: JSON.stringify(id),
//     headers: new Headers({
//         'Content-Type': 'application/json',
//     }),
//     cors: 'no-cors'   // не дозволяє крос-домені запити.
// });

// let div = document.querySelector('#container');
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(result => {
//         if (result.ok) {
//             console.log('first', result);
//             return result.json() // конвертує данні з формату json на звичайний
//         }
//     })
//     .then(data => data.map(el => el.email))
//     .then(mapResult => mapResult.sort((a, b) => a < b))
//     .then(sortResult => createUl(sortResult, div))
//     .catch(error => console.log(error));
//
// function createUl(arr, container) {
//     let result = arr.reduce((acc,el) => acc + `<li>${el}</li>`,'');
//     let list = `<ul>${result}</ul>`;
//     container.innerHTML = list;
//
// }


//чотири види запросів
// CRUD - набір наступних чотирьох запросів(абревіатура):
// POST - CREATE створюємо на ПК і створюємо це на віддаленому сервері
// GET - READ забираємо з сервера до себе
// PUT - UPDATE оновлюємо на сервері, вже існуючі данні
// DELETE - DELETE видаляємо на сервері якусь інф-ю.

//---------------------REST API-------------------------

// endpoint -точка входу
// resource - ресурс до якого звертаємось
// ? - параметри запросу
// & - перерахування кількох параметрів запросу

//
// let url = 'https://pixabay.com/api/?key=9532170-c6f84b27f2d5087ed1a4058ff&category=background&order=popular&per_page=9';
// fetch(url)
// .then(response => {
//     if(response.ok){
//         return response.json()
//     }
// })
// .then(data => data.hits)
//     .then( choseLinks => choseLinks.map(el => el.previewURL))
//     .then(function pushPhotos(links) {
//         // console.log(links);
//         let gallery = document.querySelector('#container');
//         let ul = document.createElement('ul');
//         let frag = document.createDocumentFragment();
//         for (let el of links) {
//             let li = document.createElement('li');
//             let img = document.createElement('img');
//             img.setAttribute('src',el);
//             img.setAttribute('alt','pictures');
//             frag.append(li);
//             li.append(img);
//         }
//         ul.append(frag);
//         gallery.append(ul);
//     })
//
//
//
// //     let result = arr.reduce((acc,el) => acc + `<li>${el}</li>`,'');
// //     let list = `<ul>${result}</ul>`;
// //     container.innerHTML = list;


//-----------------------galery_sample----------------------


let btn = document.querySelector('.btn');
let galleryContainer = document.querySelector('#container');

function galleryCreate(arr,container) {
    let result = arr.reduce((acc,el) => acc + `<div class="one">
    <p>Photographer is ${el.user}</p>
<img src=${el.webformatURL}>
    </div>`,'');
    container.innerHTML = result;
}


function getValue() {
    let input = document.querySelector('.cars').value;
    let url = `https://pixabay.com/api/?key=9532170-c6f84b27f2d5087ed1a4058ff&q=${input}&order=popular&per_page=9`;
    fetch(url)
        .then(response => response.ok ? response.json():null)
        .then(data => data.hits)
        .then(galleryArr => galleryCreate(galleryArr,galleryContainer));
    document.querySelector('.cars').value = '';
}

btn.addEventListener('click',getValue);
window.addEventListener('keypress', function (e){
    if (e.key === 'Enter') {
        getValue();
    }
});
