'use strict';
//
// const tank34 = {
//     coordinateX: 10,
//     coordinateY: 10,
//     life: 100,
//     ammunition: 5,
//     engineStatus: true,
//     moveToX(x) {
//         return this.coordinateX += x
//     },
//     moveToY(y) {
//         return this.coordinateY += y
//     },
//     fireTo(x, y) {
//         return this.canFire()? (this.ammunition -= 1, console.log(`firing to ${x}:${y}`)): alert('You should reload')
//     },
//     canFire() {
//         return (this.ammunition > 0 && this.life > 0)
//     },
//     checkHealth() { return this.life > 0 && this.life < 100
//     },
//     heal(x) {
//         this.checkHealth() ? this.life += x : console.log('не можливо')
//     },
//     checkEngine() {
//         return this.engineStatus === true ? alert('Engine is work') : alert('Engine doesn\'t work')
//     },
//     repairEngine() {
//
//         return this.engineStatus === false ? this.engineStatus = true : null
//     },
//     showCoordinate() {
//         return {x: this.coordinateX, y: this.coordinateY}
//     }
//     ,
//     name: 'Player #1',
//     color:
//         'Color',
// }
// ;
//
//
// tank34.moveToX(20);
// tank34.moveToX(50);
// tank34.moveToY(30);
// tank34.moveToY(40);
// tank34.moveToY(10);
// console.log(tank34.showCoordinate());
// tank34.fireTo(30,20);
// tank34.fireTo(30,20);
// tank34.fireTo(30,20);
// tank34.fireTo(30,20);
// tank34.fireTo(30,20);
// // tank34.fireTo(30,20);
// tank34.life -= 50;
// tank34.engineStatus = false;
// console.log(tank34);
// tank34.repairEngine();
// console.log(tank34);
// tank34.heal(30);
// console.log(tank34.checkHealth());
// console.log(tank34);
//
// // tank
// //  use strict
// // scope repeat
// // лбальна область бачення це об'єкт window, а функції(виключно функції) створюють локальні обл.функції
// // 1. Контекст - назва об'єкта з яким визивається
// // 2. в звичайній функції this  визначається ЛИШЕ при запуску функції
// // 3. в стрілочній функції this  визначається при її створенні.
//
// //this -
// // tanks
//
// let showThis =function () {
//     console.log(this);
//
// }

//showThis();
// в звичайній функції this  визначається ЛИШЕ при запуску функції
// this - undefined у строгому реимі
// this - window у нестрогому реимі

// стрелочна функція бере той this  в якому лежить
// call aply bind


const hotel = {
    name: 'Resort hotel'
};
const hotel2 = {
    name: '4 season hotel'
};
const hotel3 = {
    name: '7 days hotel'
};

// function showName(name, city) {
//     console.log(`${name} name is ${this.name}`);
// }
//
// showName.call(hotel, 'Tony', 'kyiv');
// function.call(object)
//call для використання фун-її для багатьох об'єктів

//--------------------------------------------------Apply
// в Apply а відємність від call аргументи передаються масивом

// function showName(name, city) {
//     console.log(`Welcom ${name} at the ${this.name}`);
// }
// showName.apply(hotel,['Tony', 'Marocco']);
// showName.apply(hotel2,['Tony', 'Magadan']);
// showName.apply(hotel3,['Tony', 'Paris']);


//--------------------------------------------------Bind
// щоб прив'язати виконання саме до конкретного контексту
//bind робить копію функцію і жорстко прив'язує до неї контекст

// function showName(name, city) {
//     // console.log(`Welcom ${name} at the ${this.name}`);
//     console.log(this);
// }
//
// const boundShowName = showName.bind(hotel);
// boundShowName();

// функція конструктор яка буде при кожному запуску створювати новий об'єкт по шаблону
// усі ф-ії конструктори називаються з великої букви

//
// const mick = {
//     name: 'Mick',
//     modules: 3,
//     learn(theme) {
//         this.modules += 1;
//         return `Student ${this.name} passed ${theme}`;
//     }
// };
// // //
// const jane = {
//     name: 'Jane',
//     modules: 5,
//     learn(theme) {
//         this.modules += 1;
//         return `Student ${this.name} passed ${theme}`;
//     }
// };


//----------------------------------------------Constructor

// function Student (name, modules) {
//     //this = {}
//     this.name = name;
//     this.modules = modules;
//     this.learn = function (theme) {
//         this.modules +=1;
//         return `Student ${this.name} passed ${theme}`;
//     };
//     this.isActive = true;
//     //{
//     // name: nameArg
//     // modules: modulesArg
//     // learn: func
//     // isActive: true
//     //}
//     // return this
// }
//
// const mick = new Student('Mick',5);
// const jane = new Student('Jane',3);
//
// // new зарезервоване слово, що покаже, що створюється новий об'єкт і лише для конструктора
// console.log(mick);
// console.log(jane);


//-------------------------------Tanks return----------------------------

function Tank(name, color, startX, startY) {
    this.coordinateX = startX;
    this.coordinateY = startY;
    this.life = 100;
    this.ammunition = 5;
    this.engineStatus = true;
    this.moveToX = function (x) {
        return this.coordinateX += x
    };
    this.moveToY = function (y) {
        return this.coordinateY += y
    };
    this.fireTo = function (x, y) {
        return this.canFire() ? (this.ammunition -= 1, console.log(`firing to ${x}:${y}`)) : alert('You should reload')
    };
    this.canFire = function () {
        return (this.ammunition > 0 && this.life > 0)
    };
    this.checkHealth = function () {
        return this.life > 0 && this.life < 100
    };
    this.heal = function (x) {
        this.checkHealth() ? this.life += x : console.log('не можливо')
    };
    this.checkEngine = function () {
        return this.engineStatus === true ? alert('Engine is work') : alert('Engine doesn\'t work')
    };
    this.repairEngine = function () {

        return this.engineStatus === false ? this.engineStatus = true : null
    };
    this.showCoordinate = function () {
        return {x: this.coordinateX, y: this.coordinateY}
    };
    this.name = name;
    this.color = color;
}


const abrams = new Tank('Max', 'Red', 15, 18);
console.log(abrams);
const miledi = new Tank('Miledi', 'Purple', 10, 185);
console.log(miledi);

abrams.moveToX(20);
abrams.moveToX(50);
abrams.moveToY(30);
abrams.moveToY(40);
abrams.moveToY(10);
console.log(abrams.showCoordinate());
abrams.fireTo(30, 20);
abrams.fireTo(40, 30);
abrams.fireTo(50, 40);
abrams.fireTo(60, 50);
abrams.fireTo(70, 60);
abrams.fireTo(100, 90);
abrams.life -= 50;
// tank34.engineStatus = false;
// console.log(tank34);
// tank34.repairEngine();
// console.log(tank34);
// tank34.heal(30);
// console.log(tank34.checkHealth());
// console.log(tank34);


function User(setting) { // obj with settings
    this.age = setting.age;
    this.name = setting.name;
    this.isActive = setting.isActive;
    this.isPremium = setting.isPremium;
    this.likesCount = setting.likesCount;

    this.showLikes = function () {
        return this.likesCount;
    }
}

//
const jane = new User({
    age: 25,
    name: 'Jane',
    isActive: true,
    isPremium: true,
    likesCount: 500
});
const mick = new User({
    name: 'Mick',
    age: 30,
    likesCount: 150,
    isActive: false,
    isPremium: true
});
console.log(mick);
console.log(jane);
// let {name, age, likesCount, isActive, isPremium} =  settings
// через деструктурізацію

function User(name, age, likesCount = 0, isActive = false, isPremium = false) { // obj with settings
    this.age = age;
    this.name = name;
    this.isActive = isActive;
    this.isPremium = isPremium;
    this.likesCount = likesCount;

    this.showLikes = function () {
        return this.likesCount;
    }
}
const jane = new User({age: 25,name: 'Jane', isPremium: true});


//_-------------_______________________---------------------____________________

// <div class="row" id="main-image-container">
//     <img src="http://s3.foxfilm.com/foxmovies/production/films/103/images/gallery/deadpool-gallery-06-gallery-image.jpg"
// alt="" class="img-responsive inside-shadow"/>
//     </div>
//     <div class="row sub-title-container">
//     <h1 class="text-center">QUOTE</h1>
//     </div>
//     <div class="row">
//     <div class="col-ls-6 col-ls-offset-3 col-md-6 col-md-offset-3">
//     <blockquote class="blockquote-reverse">
//     <p>MMMMHHH... I'M TOUCHING MYSELF TONIGHT.</p>
// <footer><cite title="Source Title">Someone with a great ass</cite></footer>
// </blockquote>
// </div>
// </div>
// <div class="row footer">
//     <div class="col-md-6">
//     <p class="small-text">All rights and lefts reserved.</p>
// </div>
// <div class="col-md-6">
//     <ul>
//     <li>Made as a <a href="https://www.freecodecamp.com/" target="_blank">CodeCamp</a> project</li>
// <li><a href="http://www.foxmovies.com/movies/deadpool" target="_blank">Assets and idea</a></li>
// <li><a href="http://marvel.com/universe/Deadpool_(Wade_Wilson)" target="_blank">Info</a></li>
// <li><a href="https://twitter.com/deadpoolmovie" target="_blank">The best twitter ever</a></li>
// </ul>
// </div>
// </div>








