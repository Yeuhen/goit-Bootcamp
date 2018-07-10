'use strict';

const article = document.querySelector('.post');
const body = document.body;

const posts = [
    {
        img: "https://placeimg.com/400/150/arch",
        title: "Post title 1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
        link: 'link-1.com'
    },
    {
        img: "https://placeimg.com/400/150/nature",
        title: "Post title 2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
        link: 'link-2.com'
    },
    {
        img: "https://placeimg.com/400/150/arch",
        title: "Post title 3",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
        link: 'link-3.com'
    }
];

function createPostCard(post) {
    const divCard = document.createElement('div');
    const imgCard = document.createElement('img');
    const h2Card = document.createElement('h2');
    const pCard = document.createElement('p');
    const aCard = document.createElement('a');

    divCard.classList.add('post');
    imgCard.classList.add('post__image');
    h2Card.classList.add('post__title');
    pCard.classList.add('post__text');
    aCard.classList.add('button');

    imgCard.setAttribute('src', post.img);
    imgCard.setAttribute('alt', 'post image');
    aCard.setAttribute('href', post.Link);

    h2Card.textContent = post.title;
    pCard.textContent = post.text;
    aCard.textContent = "Read more";

    divCard.append(imgCard);
    divCard.append(h2Card);
    divCard.append(pCard);
    divCard.append(aCard);

    return divCard
}


function createCards(arr) {
    const divCards = document.createElement('div');
    for (let el of arr) {
        divCards.append(createPostCard(el));
    }
    return divCards
}

body.append(createCards(posts));