'use strict';
//----------------------------template_1--------------------------
// //шаблон
// //у двойних віусах записується змінна, яка підтягується і вставляється
// const source = document.querySelector('#address-template').innerHTML.trim();
// console.log(source);
// const temp = Handlebars.compile(source);
//
// const context = {
//     "city": "London",
//     "street": "Baker Street",
//     "number": "2218"
// };
//
// const markup = temp(context);
// console.log(markup);
// const container = document.querySelector('.content-placeholder');
// container.innerHTML = markup;
//

//-----------------------------template_2---------------------------------
// const data = {
//     people: [
//         {firstName: 'Homer', lastName: 'Simpson'},
//         {firstName: 'Peter', lastName: 'Griffin'},
//         {firstName: 'Eric', lastName: 'Cartman'},
//         {firstName: 'Kenny', lastName: 'McCormick'},
//         {firstName: 'Bart', lastName: 'Simpson'}
//     ]
// };
//
// //    для кожного people намалюй параграф {{#...}} -назва метода
// // робота з масивом
//
// const source = document.querySelector('#example-template').innerHTML.trim();
// console.log(source);
// const template  = Handlebars.compile(source);
// console.log(template);
// const pearson = template(data);
// console.log(pearson);
// const container = document.querySelector('.content-placeholder');
// container.innerHTML = pearson;

//-----------------------------template_3---------------------------------
//
// const menuData = {
//     title: 'Eat it createElement, templates rule!',
//     items: ['Handlebars', 'LoDash', 'Pug', 'EJS']
// };
//
//
// const source = document.querySelector('#menu').innerHTML.trim(); // звертаємось до шаблона і отримуємо функцію
// const temp = Handlebars.compile(source); //запускаємо функцію з данними
// const menu = temp(menuData); //результат строка з тегами і заповненими даними
// console.log(menu);
// const container = document.querySelector('#menu-container');
// container.innerHTML = menu;

//-----------------------------template_4---------------------------------

// const data = {
//     animals:[
//         {
//             name: "cow",
//             noise: "moooo"
//         },
//         {
//             name: "cat",
//             noise: "meow"
//         },
//         {
//             name: "fish",
//             noise: ""
//         },
//         {
//             name: "farmer",
//             noise: "Get off my property!"
//         }
//     ]
// };
//
// const source = document.querySelector('#built-in-helpers-template').innerHTML.trim();
// const temp = Handlebars.compile(source);
// const anim = temp(data);
//
// const container = document.querySelector('.content-placeholder');
// container.innerHTML = anim;

//-----------------------------template_5---------------------------------
// const gallery = {
//     title: 'Gallery',
//     items: [
//         {img: 'https://placeimg.com/300/150/animals', text: 'animals'},
//         {img: 'https://placeimg.com/300/150/arch', text: 'architecture'},
//         {img: 'https://placeimg.com/300/150/nature', text: 'nature'},
//         {img: 'https://placeimg.com/300/150/people', text: 'people'},
//         {img: 'https://placeimg.com/300/150/tech', text: 'tech'},
//         {img: 'https://placeimg.com/300/150/any', text: 'random'}
//     ]
// }
//
// const source = document.querySelector('#gallery-imgs').innerHTML.trim();
// const temp = Handlebars.compile(source);
// const gall = temp(gallery);
// console.log(gall);
//
// const container = document.querySelector('.gallery-content');
// container.innerHTML = gall;

//-----------------------------template_6_phones---------------------------------

// let data = {
//     phones: [
//         {
//             id: "1",
//             categoryId: "1",
//             name: "Apple iPhone 5c",
//             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
//             price: 823,
//             image: "uploads/iphone5c-selection-hero-2013.png",
//             cpu: "1.3GHz Apple A6",
//             camera: "8mp (3264x2448)",
//             size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
//             weight: "132 grams (4.7 ounces) with battery",
//             display: "4.0 326 pixel density",
//             battery: "1480 mAh",
//             memory: "16GB, 32GB and RAM 1 GB"
//         },
//         {
//             id: "2",
//             categoryId: "1",
//             name: "Apple iPhone 6",
//             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
//             price: 953,
//             image: "uploads/51u6y9Rm8QL._SY300_.jpg",
//             cpu: "1.3GHz Apple A6",
//             camera: "8mp (3264x2448)",
//             size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
//             weight: "132 grams (4.7 ounces) with battery",
//             display: "4.0 326 pixel density",
//             battery: "1480 mAh",
//             memory: "16GB, 32GB and RAM 1 GB"
//         },
//         {
//             id: "3",
//             categoryId: "4",
//             name: "Lenovo A6000",
//             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
//             price: 764,
//             image: "uploads/_35%20(1).JPG",
//             cpu: "1.3GHz Apple A6",
//             camera: "8mp (3264x2448)",
//             size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
//             weight: "132 grams (4.7 ounces) with battery",
//             display: "4.0 326 pixel density",
//             battery: "1480 mAh",
//             memory: "16GB, 32GB and RAM 1 GB"
//         },
//         {
//             id: "4",
//             categoryId: "5",
//             name: "Nokia Lumia 1520",
//             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
//             price: 674,
//             image: "uploads/Lumia1520-Front-Back-png.png",
//             cpu: "1.3GHz Apple A6",
//             camera: "8mp (3264x2448)",
//             size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
//             weight: "132 grams (4.7 ounces) with battery",
//             display: "4.0 326 pixel density",
//             battery: "1480 mAh",
//             memory: "16GB, 32GB and RAM 1 GB"
//         },
//         {
//             id: "5",
//             categoryId: "3",
//             name: "HTC One",
//             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
//             price: 674,
//             image: "uploads/htc-one-m7-802w-dual-sim-silver.jpg",
//             cpu: "1.3GHz Apple A6",
//             camera: "8mp (3264x2448)",
//             size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
//             weight: "132 grams (4.7 ounces) with battery",
//             display: "4.0 326 pixel density",
//             battery: "1480 mAh",
//             memory: "16GB, 32GB and RAM 1 GB"
//         },
//         {
//             id: "6",
//             categoryId: "2",
//             name: "Samsung Galaxy S6",
//             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
//             price: 674,
//             image: "uploads/Agnes_Case_for_Samsung_Galaxy_S6_(1)__92643_thumb.jpg",
//             cpu: "1.3GHz Apple A6",
//             camera: "8mp (3264x2448)",
//             size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
//             weight: "132 grams (4.7 ounces) with battery",
//             display: "4.0 326 pixel density",
//             battery: "1480 mAh",
//             memory: "16GB, 3200GB and RAM 1 GB"
//         }
//     ]
// };
//
// const source = document.querySelector('#mobile-phone').innerHTML.trim();
// const template = Handlebars.compile(source);
// const phone = template(data);
//
// const container = document.querySelector('.container');
// container.innerHTML = phone;
//
// container.addEventListener('click', showMore);
//
// function showMore(e) {
//     if (e.target.localName==='button') {
//         const ulSpecific = document.querySelector(`#ul-${e.target.id}`);
//         ulSpecific.classList.toggle('show');
//         ulSpecific.classList.toggle('hide');
//         ulSpecific.classList.contains('hide') ? e.target.textContent = "Show more" : e.target.textContent = "Show less";
//         console.log(e);
//     }
// }

//-----------------------------template_7_laptops---------------------------------

const data = {
    laptops: [
        {
            size: 13,
            color: 'white',
            price: 28000,
            releaseDate: 2015,
            name: 'Macbook Air White 13"',
            img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
            descr:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
        },
        {
            size: 13,
            color: 'gray',
            price: 32000,
            releaseDate: 2016,
            name: 'Macbook Air Gray 13"',
            img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
            descr:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
        },
        {
            size: 13,
            color: 'black',
            price: 35000,
            releaseDate: 2017,
            name: 'Macbook Air Black 13"',
            img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
            descr:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
        },
        {
            size: 15,
            color: 'white',
            price: 45000,
            releaseDate: 2015,
            name: 'Macbook Air White 15"',
            img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
            descr:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
        },
        {
            size: 15,
            color: 'gray',
            price: 55000,
            releaseDate: 2016,
            name: 'Macbook Pro Gray 15"',
            img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
            descr:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
        },
        {
            size: 15,
            color: 'black',
            price: 45000,
            releaseDate: 2017,
            name: 'Macbook Pro Black 15"',
            img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
            descr:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
        },
        {
            size: 17,
            color: 'white',
            price: 65000,
            releaseDate: 2015,
            name: 'Macbook Air White 17"',
            img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
            descr:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
        },
        {
            size: 17,
            color: 'gray',
            price: 75000,
            releaseDate: 2016,
            name: 'Macbook Pro Gray 17"',
            img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
            descr:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
        },
        {
            size: 17,
            color: 'black',
            price: 80000,
            releaseDate: 2017,
            name: 'Macbook Pro Black 17"',
            img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
            descr:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
        },
    ]
};

const source = document.querySelector('#laptops').innerHTML.trim();
const template = Handlebars.compile(source);
const filter = document.querySelectorAll("[type = checkbox]");
const lapTops = template(data);
const gallery = document.querySelector('.gallery');
gallery.innerHTML = lapTops;

const btn = document.querySelector('.btn');
btn.addEventListener('click', filtered);

function filtered(e) {
    for (let el of filter) {
        const showItem = document.querySelectorAll(`.div-${el.id}`);
        if (el.checked === true) {
            // Array.from(showItem).map( el => el.classList.add('show'));
            Array.from(showItem).map( el => el.classList.remove('hide'));
        }
        else {
            // Array.from(showItem).map( el => el.classList.remove('show'));
            Array.from(showItem).map( el => el.classList.add('hide'));

        }
    }
}
