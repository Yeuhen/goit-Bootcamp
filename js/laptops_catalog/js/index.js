'use strict';
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