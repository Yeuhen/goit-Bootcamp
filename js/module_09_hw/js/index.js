'use strict';
// let result = 'Date: ';
// result += date.getFullYear() + '/'; // год
// result += date.getMonth() + '/'; // месяц, начиная с 0
// result += date.getDate() + '. Day of the week: '; // день недели, начиная с 1
// result += date.getDay() + '.'; // день , начиная с 0



let parentDom = document.querySelector(parent);
let p = document.createElement('p');
let buttonStart = document.createElement('button');
let buttonLap = document.createElement('button');
let buttonReset = document.createElement('button');



// class Stopwatch {
//     constructor (parent){
//         this.parent = parent;
//         let parentStopwatch = document.querySelector(this.parent);
//         parentStopwatch.addEventListener('click', counter);
//     }
//
//     domConstruct{
//         let parentDom = document.querySelector(parent);
//         let p = document.createElement('p');
//         let buttonStart = document.createElement('button');
//         let buttonLap = document.createElement('button');
//         let buttonReset = document.createElement('button');
//
//
//
//
//
// }
//     counter (){
//
//     }
//
//
// }
//





// <div class="stopwatch">
//     <p class="time js-time">00:00.0</p>
// <button class="btn js-start">Start</button>
//     <button class="btn js-take-lap">Lap</button>
//     <button class="btn js-reset">Reset</button>
//     </div>



// let first = new Stopwatch('George','IV', 2016);
// George.getFullName();
// George.getCourse(


// // const deadline = new Date('1, january, 2019 '); //або
// const deadline = new Date(2019, 0, 1, 0, 0, 0);
// let secText = document.querySelector('.seconds');
// let minsText = document.querySelector('.minutes');
// let hoursText = document.querySelector('.hours');
// let daysText = document.querySelector('.days');
//
// function timer() {
//     const today = new Date();
//     let result = deadline - today;
//     let sec = Math.floor(result/1000)%60;
//     let mins = Math.floor(result/1000/60)%60;
//     let hours = Math.floor(result/1000/60/60)%24;
//     let days = Math.floor(result/1000/60/60/24);
//
//     secText.textContent = sec < 10 ? '0' + sec : sec;
//     minsText.textContent = mins < 10 ? `0${mins}` : mins;
//     hoursText.textContent = hours < 10 ? '0' + hours : hours;
//     daysText.textContent = days < 10 ? '0' + days : days;
// }
//
// setInterval(timer, 1000);


// console.log('Hello.');
// setTimeout(function () {
//     console.log("Goodby!");
// },2000);
// console.log("Hello again!");

// сінхронний код - усі задачі виконуються послідовно
//асінхроний код - задачі виконуються не послідовно

//setTimout - виконати код з затримкою
//setInterval - виконання коду з деякою періодичністю

//setTimout(callback,delay); delay in ms
//Затримка в 4мс - в активній вкладці, у фоновій, може ще збільшитись
//
// function sayHello() {
//     console.log('Hello.');
// }

// setTimeout(sayHello,3000);
// setInterval(sayHello,1000);
//зупинити можна через clearTimeout fбо clearInterval

// const ID = setTimeout(sayHello,3000);
// console.log(ID);
// let btn = document.querySelector('.stop');
// btn.addEventListener('click',function () {
//     clearTimeout(ID);
//     console.log('Timer stop')
// });

//Date - функція конструктор

// let date = new Date("March 4, 2017");
// console.log(date);
// //у date є купа методів
// console.log(date.getFullYear());
// console.log(date.getMonth());

// let days =['Неділя','Понеділок','Вівторок','Середа','Четвер','Пятниця','Субота'];
// // 1) Написати код що запитує в користувача День, місяць, рік
// // 2) Виводить в консоль день тижня що тоді був
//
// let day = +prompt('day');
// let month = prompt('month');
// let year = +prompt('year');
//
// let date = new Date(`${month} ${day}, ${year}`);
// console.log(days[date.getDay()]);

// let date = new Date;
//
// const options = {
//     weekday: 'long',
//     year    : 'numeric',
//     month   : 'short',
//     day     : 'numeric',
//     hour    :'2-digit',
//     minute  :'2-digit'
// };
// //
// // Україна
// let localeUa = date.toLocaleString('ua-UA', options);
// console.log(localeUa); // понеділок, 19 бер. 2018 р., 17:42
//
// let localeUs = date.toLocaleString("en-US", options);
// console.log(localeUs); // Monday, Mar 19, 2018, 5:43 PM
//
// let now = moment().add(7,'year').format('YYYY');
// console.log(now);


// // const deadline = new Date('1, january, 2019 '); //або
// const deadline = new Date(2019, 0, 1, 0, 0, 0);
// let secText = document.querySelector('.seconds');
// let minsText = document.querySelector('.minutes');
// let hoursText = document.querySelector('.hours');
// let daysText = document.querySelector('.days');
//
// function timer() {
//     const today = new Date();
//     let result = deadline - today;
//     let sec = Math.floor(result/1000)%60;
//     let mins = Math.floor(result/1000/60)%60;
//     let hours = Math.floor(result/1000/60/60)%24;
//     let days = Math.floor(result/1000/60/60/24);
//
//     secText.textContent = sec < 10 ? '0' + sec : sec;
//     minsText.textContent = mins < 10 ? `0${mins}` : mins;
//     hoursText.textContent = hours < 10 ? '0' + hours : hours;
//     daysText.textContent = days < 10 ? '0' + days : days;
// }
//
// setInterval(timer, 1000);


//promise - функція конструктор, яка створює обєкт..., що створюється за допомогою конструктора і буде виконуватися виключно після отримання результату роботи

// const promise = new Promise((resolve,reject) => {});
// const promise = new Promise((resolve,reject) => {
//     //resolve - сюди функцію, що буде виконуватися, якщо запрос успішний
//     //reject - сюди функцію, що буде виконуватися, якщо запрос неуспішний
//     setTimeout(()=>{
//         resolve("success!");
//     }, 2000);
// });
// //then - при успіху в promise
// //catch - при reject в promise
//
// console.log("Before promise.then");
// promise.then(data => {
//     console.log("INSIDE promise.then");
//     console.log(data); //"success!"
// });
// console.log("AFTER promise.then");


//promise have three status:
//pending - очікування
//
//reject - ідхилення

// let myPromise = new Promise(function (ok, fatal) {
//     let isDone = false;
//
//     if (isDone) {
//         ok('this is done'); // да
//     } else {
//         fatal('error') // нет
//     }
// });
//
// myPromise.then(function (data) {
//     console.log(data);
// }).catch(function (error) {
//     console.log(error);
// });

// let myPromise = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         resolve('Data back from server');
//         console.log('resolve',resolve);
//     }, 3000);
//     setTimeout(()=>{
//         reject("no data back from server");
//     },2000)
//
// });
//
// myPromise.then(function (data) {
//     console.log(data);
// }).catch(function (error) {
//     console.log(error);
// });

// let promise = new Promise ((resolve, reject) => {
//     reject()
// }).then(
//     () => console.log("1"),
//     () => console.log("2") // reject() = false
// ).then(
//     () => console.log("3"), //  у минулому then було все ОК, false корректно спрацював, отже у цьому then отримуємо true;
//     () => console.log("4")
// );

// const promiseNames = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(['Homer', 'Bender', 'Filip']);
//     }, 1000);
//
//     setTimeout(() => {
//         reject("no data back from server, there was an error")
//     }, 2000);
// });
//
// // promiseNames
// //     .then(answer => {
// //         let result = answer.map(el => el.toUpperCase());
// //         return result;
// //     })
// //     .then(result => {
// //         for (let el of result) {
// //             console.log(el);
// //         }
// //     });
// //промисАлл приймає виключно масив
// const promiseSurnames = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(['Simpson', 'Rodriges', 'Fry']);
//     }, 3000);
//
//     setTimeout(() => {
//         reject("no data back from server, there was an error")
//     }, 5000);
// });
//
// Promise.all([promiseNames, promiseSurnames])
// .then(data => data
// )
//     .then( resArr => {
//         let [names, lastNames] = resArr;
//         // let result =[...names, lastNames];
//         // console.log(result);
//         names.map((el,index) => console.log(`${el} ${lastNames[index]}`))
//     })
// .catch(error => console.log(error));


//------------------------------promiseRace---------

// const makePromise = (text, delay) =>
//     new Promise(resolve => setTimeout(() => resolve(text), delay));
// //
// const promiseA = makePromise("promiseA", 4000);
// const promiseB = makePromise("promiseB", 2000);
// console.log(promiseA);
// console.log(promiseB);
//
// // выполнится спустя 1 секунду, когда выполнится
// // самый быстрый promiseA с задержкой в 1c.
// // Второй промис promiseB будет проигнорирован
// Promise.race( [promiseA, promiseB] )
//     .then(result => {
//         console.log(result); // promiseA
//     })
//     .catch(err => console.log(err));

