'use strict';
//
// const jumbotron = document.querySelector('.jumbotron');
//
// // create
// const titleContainer = document.createElement('div');
// const h1 = document.createElement('h1');
// const deadpoolSpan = document.createElement('span');
// const deadpoolP = document.createElement('p');
// const deadpoolSpan2 = document.createElement('span');
// const mainImageContainer = document.createElement('div');
// const mainImage = document.createElement('img');
// const subTitleContainer = document.createElement('div');
// const listContainer = document.createElement('div');
// const ul = document.createElement('ul');
// // const mainImageContainerSecond = document.createElement('div');
// const mainImageSecond = document.createElement('img');
// const subTitleContainerSec = document.createElement('div');
// const divRow = document.createElement('div');
// const divCol = document.createElement('div');
// const blockquote = document.createElement('blockquote');
// const pBlockquote = document.createElement('p');
// const rowFooter = document.createElement('div');
// const colDivMdSix = document.createElement('div');
// const smallText = document.createElement('p');
// const colDivMdSixSec = document.createElement('div');
// const ulSec = document.createElement('ul');
//
//
// // add class
// titleContainer.classList.add('row', 'title-container');
// // console.log(titleContainer);
// h1.classList.add('text-center');
// deadpoolSpan.classList.add('red-text');
// deadpoolP.classList.add('text-center');
// deadpoolSpan2.classList.add('red-text');
// mainImageContainer.classList.add('row');
// mainImage.classList.add('img-responsive', 'inside-shadow');
// subTitleContainer.classList.add('row', 'sub-title-container');
// listContainer.classList.add('row', 'list-container');
// subTitleContainerSec.classList.add('row', 'sub-title-container');
// divRow.classList.add('row');
// divCol.classList.add('col-ls-6', 'col-ls-offset-3', 'col-md-6', 'col-md-offset-3');
// blockquote.classList.add('blockquote-reverse');
// rowFooter.classList.add('row', 'footer');
// colDivMdSix.classList.add('col-md-6');
// smallText.classList.add('small-text');
// colDivMdSixSec.classList.add('col-md-6');
// mainImageSecond.classList.add('img-responsive', 'inside-shadow');
//
//
// // add attr
// mainImageContainer.setAttribute('id', 'main-image-container');
// mainImage.setAttribute('src', 'http://s3.foxfilm.com/foxmovies/production/films/103/images/gallery/deadpool1-gallery-image.jpg');
// mainImage.setAttribute('alt', 'picture');
// mainImageSecond.setAttribute('src', 'http://s3.foxfilm.com/foxmovies/production/films/103/images/gallery/deadpool-gallery-06-gallery-image.jpg');
// mainImageSecond.setAttribute('alt', 'picture');
//
// // clone
// const h1Second = h1.cloneNode(false);
// const h1Third = h1.cloneNode(false);
// const mainImageContainerSecond = mainImageContainer.cloneNode(false);
//
//
// // add text
// h1.textContent = ' TRIBUTE PAGE';
// deadpoolSpan.textContent = 'DEADPOOL';
// deadpoolP.textContent = 'WITH GREAT POWER COMES GREAT';
// deadpoolSpan2.textContent = ' IRRESPONSIBILITY';
// h1Second.textContent = 'TIMELINE';
// h1Third.textContent = 'QUOTE';
// pBlockquote.textContent = 'MMMMHHH... I\'M TOUCHING MYSELF TONIGHT.';
// smallText.textContent = 'All rights and lefts reserved.';
//
//
// // paste
// jumbotron.append(titleContainer);
// titleContainer.append(h1);
// h1.prepend(deadpoolSpan);
// h1.append(deadpoolP);
// deadpoolP.append(deadpoolSpan2);
// jumbotron.append(mainImageContainer);
// mainImageContainer.append(mainImage);
// jumbotron.append(subTitleContainer);
// subTitleContainer.append(h1Second);
// jumbotron.append(listContainer);
// listContainer.append(ul);
// jumbotron.append(mainImageContainerSecond);
// mainImageContainerSecond.append(mainImageSecond);
// jumbotron.append(subTitleContainerSec);
// subTitleContainerSec.append(h1Third);
// jumbotron.append(divRow);
// divRow.append(divCol);
// divCol.append(blockquote);
// blockquote.append(pBlockquote);
// jumbotron.append(rowFooter);
// rowFooter.append(colDivMdSix);
// colDivMdSix.append(smallText);
// rowFooter.append(colDivMdSixSec);
// colDivMdSixSec.append(ulSec);
//
// // loops
//
// const liArr = ['- BORN IN CANADA AS WADE WILSON.', '- HIS MOTHER DIED OF CANCER WHILE HE WAS YOUNG AND HIS FATHER (WHO WAS IN THE MILITARY) WAS PHYSICALLY ABUSIVE.', '- WADE BEGAN HIS MERCENARY CAREER WHILE STILL IN HIS LATE TEENS.', '- IN AMERICA, HE MET AND FELL IN LOVE WITH TEENAGE PROSTITUTE VANESSA CARLYSLE, WITH WHOM HE SHARED DREAMS OF A BETTER LIFE.', '- LEARNING THAT HE HAD CONTRACTED CANCER, WILSON BROKE UP WITH VANESSA RATHER THAN FORCE HER TO REMAIN WITH A TERMINALLY ILL MAN.', '- IN PURSUE OF HOPE FOR HIS TERMINAL CONDITION, HE JOINS THE WEAPON X PROGRAM', '- HIS CANCER WAS TEMPORARILY ARRESTED VIA THE IMPLANTATION OF A HEALING FACTOR DERIVED FROM WOLVERINE', '- DURING ONE MISSION, WILSON KILLED HIS TEAMMATE SLAYBACK. AS A RESULT, HE WAS REJECTED FROM THE WEAPON X PROGRAM AND SENT TO THE HOSPICE, ALLEGEDLY A GOVERNMENT FACILITY WHERE FAILED SUPERHUMAN OPERATIVES WERE TREATED.', '- IN THE HOSPICE HE WAS TORTURED BY THE DOCTOR KILLEBREW AND HIS SADISTIC ASSISTANT AJAX, WHO TORE OUT WILSON’S HEART AND LEFT HIM FOR DEAD', '- FOLLOWING HIS ESCAPE HE SOON RETURNED TO HIS FREELANCE MERCENARY ACTIVITIES, DONNING A COSTUME IN KEEPING WITH HIS NEW IDENTITY, DEADPOOL', '- WHY DO YOU KEEP READING, THIS IS SO BORING...'];
//
// const spanArr = ['SOME YEAR', 'SOME OTHER YEAR', 'SOME OTHER DIFERENT YEAR', 'YET ANOTHER YEAR', 'YESTERDAY?', 'NO...', 'WHO CARES?', 'DUNNO', 'MEEH', '????', '@$%^#'];
// const frag = document.createDocumentFragment();
//
// for (let i = 0; i <= 10; i++) {
//     let listItem = document.createElement('li');
//     let spanItem = document.createElement('span');
//     listItem.classList.add('list-item');
//     spanItem.classList.add('red-text');
//     listItem.textContent = liArr[i];
//     spanItem.textContent = spanArr[i];
//     frag.append(listItem);
//     listItem.prepend(spanItem);
// }
// ul.append(frag);
//
//
// const linkArr = ['href="https://www.freecodecamp.com/"', 'href="http://www.foxmovies.com/movies/deadpool"', 'href="http://marvel.com/universe/Deadpool_(Wade_Wilson)"', 'href="https://twitter.com/deadpoolmovie"'];
//
// const textArr = ['CodeCamp', 'Assets and idea', 'Info', 'The best twitter ever'];
//
// const fragFooter = document.createDocumentFragment();
//
// for (let i = 0; i < 5; i++) {
//     let liFooter = document.createElement('li');
//     let links = document.createElement('a');
//     links.setAttribute('src', linkArr[i]);
//     links.setAttribute('target', '_blank');
//     links.textContent = (textArr[i]);
//
//     fragFooter.append(liFooter);
//     if (i === 0) {
//         liFooter.prepend('Made as a ');
//         liFooter.append(links);
//         liFooter.append(' project');
//     } else {
//         liFooter.append(links);
//     }
// }
// ulSec.append(fragFooter);

//----------------------------function---------------------------------

function createNode(tag, classArr, attrObj, text, mode, container) {
    let el = document.createElement(tag);
    if ( classArr !== null) {
        for (let className of classArr) {
            el.classList.add(className);
        }
    }
//`${key}` шаблонна строка для того, що б ми приймали key, виключно як строку
    for (let key in attrObj) {
        let hasKey = attrObj.hasOwnProperty(`${key}`);
        if (hasKey) {
            el.setAttribute(`${key}`, attrObj[`${key}`])
        }
    }
    el.textContent = text;

    container[mode](el);
    return el;
}

const jumbotron = document.querySelector('.jumbotron');

let titleContainer = createNode('div', ['row', 'title-container'], null, null, 'append', jumbotron,);
let h1 = createNode('h1', ['text-center'], null, 'TRIBUTE PAGE ', 'append', titleContainer);
let deadpoolSpan = createNode('span', ['red-text'], null, 'DEADPOOL', 'append', h1);
let deadpoolP = createNode('p', ['text-center'], null, 'WITH GREAT POWER COMES GREAT', 'append', h1);
let deadpoolSpan2 = createNode('span', ['red-text'], null, ' IRRESPONSIBILITY', 'append', deadpoolP);
let mainImageContainer = createNode('div', ['row'], {id: 'main-image-container'}, null, 'append', jumbotron);
let mainImage = createNode('img', ['img-responsive', 'inside-shadow'], {
    src: 'http://s3.foxfilm.com/foxmovies/production/films/103/images/gallery/deadpool1-gallery-image.jpg',
    alt: 'picture'
}, null, 'append', mainImageContainer);
let subTitleContainer = createNode('div', ['row', 'sub-title-container'], null, null, 'append', jumbotron);
let h1Second = createNode('h1', ['text-center'], null, 'TIMELINE ', 'append', subTitleContainer);
let listContainer = createNode('div', ['row', 'list-container'], null, null, 'append', jumbotron);
let ul = createNode('ul', null, null, null, 'append', listContainer);

const liArr = ['- BORN IN CANADA AS WADE WILSON.', '- HIS MOTHER DIED OF CANCER WHILE HE WAS YOUNG AND HIS FATHER (WHO WAS IN THE MILITARY) WAS PHYSICALLY ABUSIVE.', '- WADE BEGAN HIS MERCENARY CAREER WHILE STILL IN HIS LATE TEENS.', '- IN AMERICA, HE MET AND FELL IN LOVE WITH TEENAGE PROSTITUTE VANESSA CARLYSLE, WITH WHOM HE SHARED DREAMS OF A BETTER LIFE.', '- LEARNING THAT HE HAD CONTRACTED CANCER, WILSON BROKE UP WITH VANESSA RATHER THAN FORCE HER TO REMAIN WITH A TERMINALLY ILL MAN.', '- IN PURSUE OF HOPE FOR HIS TERMINAL CONDITION, HE JOINS THE WEAPON X PROGRAM', '- HIS CANCER WAS TEMPORARILY ARRESTED VIA THE IMPLANTATION OF A HEALING FACTOR DERIVED FROM WOLVERINE', '- DURING ONE MISSION, WILSON KILLED HIS TEAMMATE SLAYBACK. AS A RESULT, HE WAS REJECTED FROM THE WEAPON X PROGRAM AND SENT TO THE HOSPICE, ALLEGEDLY A GOVERNMENT FACILITY WHERE FAILED SUPERHUMAN OPERATIVES WERE TREATED.', '- IN THE HOSPICE HE WAS TORTURED BY THE DOCTOR KILLEBREW AND HIS SADISTIC ASSISTANT AJAX, WHO TORE OUT WILSON’S HEART AND LEFT HIM FOR DEAD', '- FOLLOWING HIS ESCAPE HE SOON RETURNED TO HIS FREELANCE MERCENARY ACTIVITIES, DONNING A COSTUME IN KEEPING WITH HIS NEW IDENTITY, DEADPOOL', '- WHY DO YOU KEEP READING, THIS IS SO BORING...'];

const spanArr = ['SOME YEAR', 'SOME OTHER YEAR', 'SOME OTHER DIFERENT YEAR', 'YET ANOTHER YEAR', 'YESTERDAY?', 'NO...', 'WHO CARES?', 'DUNNO', 'MEEH', '????', '@$%^#'];

const frag = document.createDocumentFragment();
for (let i = 0; i <= 10; i++) {
    let listItem = createNode('li', ['list-item'], null, liArr[i], 'append', frag);
    let spanItem = createNode('span', ['red-text'], null, spanArr[i], 'prepend', listItem);
}
ul.append(frag);
let mainImageContainerSecond = createNode('div', ['row'], {id: 'main-image-container'}, null, 'append', jumbotron);
let mainImageSecond = createNode('img', ['img-responsive', 'inside-shadow'], {
    src: 'http://s3.foxfilm.com/foxmovies/production/films/103/images/gallery/deadpool-gallery-06-gallery-image.jpg',
    alt: 'picture'
}, null, 'append', mainImageContainerSecond);
let subTitleContainerSec = createNode('div', ['row', 'sub-title-container'], null, null, 'append', jumbotron);
let h1Third = createNode('h1', ['text-center'], null, 'QUOTE ', 'append', subTitleContainerSec);
let divRow = createNode('div', ['row'], null, null, 'append', jumbotron);
let divCol = createNode('div', ['col-ls-6', 'col-ls-offset-3', 'col-md-6', 'col-md-offset-3'], null, null, 'append', divRow);
let blockquote = createNode('blockquote', ['blockquote-reverse'], null, null, 'append', divCol);
let pBlockquote = createNode('p', null, null, 'MMMMHHH... I\'M TOUCHING MYSELF TONIGHT.', 'append', blockquote);
let footer = createNode('footer', null, null, null, 'append', blockquote );
let cite = createNode('cite', null, { title: 'Source Title'}, 'Someone with a great ass', 'append', footer);
let rowFooter = createNode('div', ['row', 'footer'], null, null, 'append', jumbotron);
let colDivMdSix = createNode('div', ['col-md-6'], null, null, 'append', rowFooter);
let smallText = createNode('p', ['small-text'], null, 'All rights and lefts reserved.', 'append', colDivMdSix);
let colDivMdSixSec = createNode('div', ['col-md-6'], null, null, 'append', rowFooter);
let ulSec = createNode('ul', null, null, null, 'append', colDivMdSixSec);
const linkArr = ['href="https://www.freecodecamp.com/"', 'href="http://www.foxmovies.com/movies/deadpool"', 'href="http://marvel.com/universe/Deadpool_(Wade_Wilson)"', 'href="https://twitter.com/deadpoolmovie"'];
const textArr = ['CodeCamp', 'Assets and idea', 'Info', 'The best twitter ever'];

const fragFooter = document.createDocumentFragment();

for (let i = 0; i < 5; i++) {
    let liFooter = createNode('li', null, null, null , 'append', fragFooter);
    let links = createNode('a', null, {src: linkArr[i], target: '_blank'}, textArr[i], 'append', liFooter);
    if (i === 0) {
        liFooter.prepend('Made as a ');
        liFooter.append(' project');
    }
}
ulSec.append(fragFooter);




//-------------------------------------------------
// <div class="row title-container">
//     <h1 class="text-center"><span class="red-text">DEADPOOL</span> TRIBUTE PAGE</h1>
// <p class="text-center">WITH GREAT POWER COMES GREAT <span class="red-text">IRRESPONSIBILITY</span></p>
// </div>
// <div class="row" id="main-image-container">
//     <img src="http://s3.foxfilm.com/foxmovies/production/films/103/images/gallery/deadpool1-gallery-image.jpg"
// alt="" class="img-responsive inside-shadow"/>
//     </div>
//     <div class="row sub-title-container">
//     <h1 class="text-center">TIMELINE</h1>
//     </div>
//     <div class="row list-container">
//     <ul>
//     <li class="list-item"><span class="red-text">SOME YEAR</span> - BORN IN CANADA AS WADE WILSON.</li>
// <li class="list-item"><span class="red-text">SOME OTHER YEAR</span> - HIS MOTHER DIED OF CANCER
// WHILE HE WAS YOUNG AND HIS FATHER (WHO WAS IN THE MILITARY) WAS PHYSICALLY ABUSIVE.
// </li>
// <li class="list-item"><span class="red-text">SOME OTHER DIFERENT YEAR</span> - WADE BEGAN HIS
// MERCENARY CAREER WHILE STILL IN HIS LATE TEENS.
// </li>
// <li class="list-item"><span class="red-text">YET ANOTHER YEAR</span> - IN AMERICA, HE MET AND FELL
// IN LOVE WITH TEENAGE PROSTITUTE VANESSA CARLYSLE, WITH WHOM HE SHARED DREAMS OF A BETTER LIFE.
// </li>
// <li class="list-item"><span class="red-text">YESTERDAY?</span> - LEARNING THAT HE HAD CONTRACTED
// CANCER, WILSON BROKE UP WITH VANESSA RATHER THAN FORCE HER TO REMAIN WITH A TERMINALLY ILL MAN.
// </li>
// <li class="list-item"><span class="red-text">NO...</span> - IN PURSUE OF HOPE FOR HIS TERMINAL
// CONDITION, HE JOINS THE WEAPON X PROGRAM
// </li>
// <li class="list-item"><span class="red-text">WHO CARES?</span> - HIS CANCER WAS TEMPORARILY ARRESTED
// VIA THE IMPLANTATION OF A HEALING FACTOR DERIVED FROM WOLVERINE
// </li>
// <li class="list-item"><span class="red-text">DUNNO</span> - DURING ONE MISSION, WILSON KILLED HIS
// TEAMMATE SLAYBACK. AS A RESULT, HE WAS REJECTED FROM THE WEAPON X PROGRAM AND SENT TO THE
// HOSPICE, ALLEGEDLY A GOVERNMENT FACILITY WHERE FAILED SUPERHUMAN OPERATIVES WERE TREATED.
// </li>
// <li class="list-item"><span class="red-text">MEEH</span> - IN THE HOSPICE HE WAS TORTURED BY THE
// DOCTOR KILLEBREW AND HIS SADISTIC ASSISTANT AJAX, WHO TORE OUT WILSON’S HEART AND LEFT HIM FOR
// DEAD
// </li>
// <li class="list-item"><span class="red-text">????</span> - FOLLOWING HIS ESCAPE HE SOON RETURNED TO
// HIS FREELANCE MERCENARY ACTIVITIES, DONNING A COSTUME IN KEEPING WITH HIS NEW IDENTITY, DEADPOOL
// </li>
// <li class="list-item"><span class="red-text">@$%^#</span> - WHY DO YOU KEEP READING, THIS IS SO
// BORING...
// </li>
// </ul>
// </div>
// <div class="row" id="main-image-container">
//     <img src="http://s3.foxfilm.com/foxmovies/production/films/103/images/gallery/deadpool-gallery-06-gallery-image.jpg"
// alt="" class="img-responsive inside-shadow"/>
// </div>
//<div class="row sub-title-container">
//<h1 class="text-center">QUOTE</h1>
//</div>
//<div class="row">
//<div class="col-ls-6 col-ls-offset-3 col-md-6 col-md-offset-3">
//  <blockquote class="blockquote-reverse">
//      <p>MMMMHHH... I'M TOUCHING MYSELF TONIGHT.</p>
//      <footer>
//          <cite title="Source Title">Someone with a great ass</cite>
//      </footer>
//  </blockquote>
//</div>
// </div>

// <div class="row footer">
//     <div class="col-md-6">
//     <p class="small-text">All rights and lefts reserved.</p>
//     </div>
//     <div class="col-md-6">
//      <ul>
//          <li>Made as a <a href="https://www.freecodecamp.com/" target="_blank">CodeCamp</a> project</li>
//          <li><a href="http://www.foxmovies.com/movies/deadpool" target="_blank">Assets and idea</a></li>
//          <li><a href="http://marvel.com/universe/Deadpool_(Wade_Wilson)" target="_blank">Info</a></li>
//          <li><a href="https://twitter.com/deadpoolmovie" target="_blank">The best twitter ever</a></li>
// </ul>
// </div>
// </div>

