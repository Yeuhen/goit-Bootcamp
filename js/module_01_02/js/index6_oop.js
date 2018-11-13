'use strict';
// що таке класс - ескіз або шаблон, який описує наш об'єкт
// let animal = {
//     canEat: true,
//     canSleep: true,
//     canWalk: true,
// };
//
// let dog = Object.create(animal);
// dog.canBark = true;
// dog.canSwim = true;

// let dog = {
//     canBark: true,
//     canSwim: true,
// };
//
// let buldog = {
//     canSluna: true,
//     canJump: false,
// };

// console.log('animal',animal);
// console.log('dog',dog);
// console.log(dog.canBark);
// console.log(dog.canEat);
// console.log(buldog);
//
// let dog = Object.create(null);
// dog.age = 25;
// console.log(dog);

//[[Prototype]] е запис __proto__ в специфікації ECMAScript (аналог)
//
// let animal = {
//     canEat: true,
//     canSleep: true,
//     canWalk: true,
// };
// let dog = Object.create(animal);
// dog.age = 25;
// dog.canBark = true;
// dog.canSwim = true;
//
// // console.log('animal',animal);
// console.log('dog',dog);
// console.log('dog proto',dog.__proto


// function Human(name, age) {
//     // this ={}
//     // Human.prototype = {}
//     this.name = name;
//     this.age = age;
//     // return this
// }
// // Human.prototype.hello = 'Hello Max';
// Human.prototype.eat = function () {
//     console.log(`${this.name} can eat`);
// };
// Human.prototype.great = function () {
//     console.log(`Hello my name is ${this.name}`);
// };
// Human.prototype.friends = ['Jack', 'Ravshan', 'Nasalnika', 'Bambucha'];
//
// let max = new Human('Max',12);
// max.great();
// // console.log(max.__proto__ === Human.prototype);
// // max.__proto__.test = 'test';
// // console.log('Max proto', max.__proto__);
// // console.log('human.prototype',Human.prototype);
// let jane = new Human('Jane', 25);
// jane.friends.pop();
// console.log(jane.friends);
// console.log(max.friends);
// console.log(jane);
// console.log(max);
// max.great();
// max.eat();

//
// const Hero = function (name, level) {
//     this.name = name;
//     this.level = level;
// };
//
// Hero.prototype.greet = function () {
//     console.log(`Hello, I'm ${this.name}`);
// };
//
// const Alister = new Hero ('Alister', 1);
// Alister.greet();

//------------------------------------------------------------------------
// const Hero = function(name, level) {
//     this.name = name;
//     this.level = level;
// };
//
// Hero.prototype.greet = function() {
//     console.log(`Hello, I'm ${this.name}`);
// };
//
// //   const Alister = new Hero('Alister', 1);
// // Alister.greet();
//
// //   /*
// //     Warrior class, extends Hero
// //   */
// const Warrior = function(name, level, weapon) {
//     // this = {}
//     //  і в цей пустий this  запихуємо name + level властивості
//     Hero.call(this, name, level);
//     this.weapon = weapon;
// };
//
// Warrior.prototype = Object.create(Hero.prototype);
// Warrior.prototype.constructor = Warrior;
//
// Warrior.prototype.attack = function() {
//     console.log(`${this.name} attacks with an ${this.weapon}.`);
// };
//
// let alister = new Warrior('Alister', 1, 'sword');
// console.log(alister);

// console.log(1);
//
// setTimeout(function () {console.log(2)},1000)
// setTimeout(function () {console.log(3)},0)
// console.log();

// console.log(false =='0');
// console.log( 1 && 2);
// console.log( 'kjsdh' + 34);

//--------------------------------------------------------------------------------

// const Hero = function (name, level) {
//     // this = {}
//     // Hero.prototype = {}
//     this.name = name;
//     this.level = level;
// };
//
// Hero.prototype.greet = function () {
//     console.log(`Hello, I'm ${this.name}`);
// };
//
// //   const Alister = new Hero('Alister', 1);
// // Alister.greet();
//
// //   /*
// //     Warrior class, extends Hero
// //   */
// const Warrior = function (name, level, weapon) {
//     // this = {}
//     // Warrior.prototype = {}
//     // Hero.prototype = {}
//     Hero.call(this, name, level);
//     this.weapon = weapon;
//     // {name, level, weapon,}
//
// };
//
// Warrior.prototype = Object.create(Hero.prototype);
// Warrior.prototype.constructor = Warrior;
//
// Warrior.prototype.attack = function () {
//     console.log(`${this.name} attacks with an ${this.weapon}.`);
// };
//
// const Swordman = function (name, level, weapon, ability) {
//     Warrior.call(this, name, level, weapon);
//     this.ability = ability;
// };
//
// Swordman.prototype = Object.create(Warrior.prototype);
// Swordman.prototype.constructor = Swordman;
// Swordman.prototype.rush = function () {
//     console.log(`Attack aaaaaaaaaaahhhhhhhhhhhh!!!!!!!`);
// };
// Swordman.prototype.fatal = function () {
//     console.log(`You are dead`);
// };
// let archibald = new Swordman('Archi', 5, 'sword', '100 gram');
//
// // archibald.rush();
// console.log(archibald);
// console.log(Swordman.prototype);


//з прототипів ES5 на класи ES6
// в Джаваскрипте есть зареєстроване слово class
//
// class Human {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     eat () {
//         console.log(`${this.name} can eat`);
//     }
//     great () {
//         console.log(`Hello my name is ${this.name}`);
//     }
// }
//
// //наслідування
// class Warior extends Human {
//     constructor(name,age,weapon){
//         super(name,age);
//         this.weapon = weapon;  // this виключно після super!!!
//     }
//     attack() {
//         console.log(`Attack ${this.name}`);
//     }
// }
//
// class Knight extends Warior {
//     constructor(name, age, weapon, horse) {
//         super(name, age, weapon);
//         this.horse = horse;
//     }
//     static showMoney(){
//         console.log(`${this.name} have many golden coins`);
//     }
//     move() {
//         console.log(`${this.horse} move`);
//     }
// }
//
// let lancelot = new Knight('Lancelot', 25, 'Sword', 'Roach');
// lancelot.move();
// lancelot.attack();
// Knight.showMoney();


//---------------------------------------task1
//--------------------------------------Prototype-------------

// const Account = function(login, email,friendsCount = 0) {
//     this.login = login;
//     this.email = email;
//    this.friendsCount = friendsCount;
// };
// Account.prototype.getAccountInfo = function() {
//     console.log(`login: ${this.login}, email: ${this.email}, friendsCount: ${this.friendsCount}`);
// };
//
// let User1 = new Account('Namik','pram@gmylo.com', 10);
// User1.getAccountInfo();
// let User2 = new Account('Name2','pram@gmylo.com', 33);
// User2.getAccountInfo();
// let User3 = new Account('Namy3','pram@gmylo.com', 4);
// User3.getAccountInfo();

//-----------------------------------------------Classs-------

// class AccountClass {
//     constructor(login,email,friendsCount=0) {
//         this.friendsCount = friendsCount;
//         this.login = login;
//         this.email = email;
//     }
//     getAccountInfo(){
//         console.log(`login: ${this.login}, email: ${this.email}, friendsCount: ${this.friendsCount}`);
//     }
// }
//
// let bober = new AccountClass('Bober','Bober@bober.com');
// bober.getAccountInfo();

//-----------------------------------------------Task2_prototype

/*
  Напишите функцию-конструктор StringBuilder.

  На вход она получает один параметр string - строку.

  Добавьте следующие методы в prototype функции-конструктора.

    - getValue() - выводит в консоль текущее значение поля value

    - append(str) - получает парметр str - строку и добавляет
      ее в конец значения поля value

    - prepend(str) - получает парметр str - строку и добавляет
      ее в начало значения поля value

    - pad(str) - получает парметр str - строку и добавляет
      ее в начало и в конец значения поля value
*/

// class StringBuilder {
//     constructor (string = ""){
//         this.value = string;
//     }
// };

//
// function StringBuilder(string = "") {
//     this.value = string;
// }
//
// StringBuilder.prototype.getValue = function () {
//     console.log(this.value);
// };
//
// StringBuilder.prototype.append = function (str) {
//    this.value = str + this.value;
// };
//
// StringBuilder.prototype.prepend = function (str) {
//     this.value = this.value + str;
// };
//
// StringBuilder.prototype.pad = function (str) {
//     this.value = str + this.value + str;
// };
//
// const myString = new StringBuilder('.');
//
// myString.append('^');
// myString.getValue(); // '.^'
//
// myString.prepend('^');
// myString.getValue(); // '^.^'
//
// myString.pad('=');
// myString.getValue(); // '=^.^='

//-----------------------------------------task2_class
// class StringBuilder {
//     constructor (string =""){
//         this.value = string;
//     }
//     getValue(){
//         console.log(this.value)
//     }
//     append(str) {
//         this.value = this.value + str;
//     }
//     prepend (str) {
//         this.value = str + this.value;
//     }
//     pad (str) {
//         this.value = str + this.value + str;
//     }
// }
//
//
// const myString = new StringBuilder('.');
//
// myString.append('^');
// myString.getValue(); // '.^'
//
// myString.prepend('^');
// myString.getValue(); // '^.^'
//
// myString.pad('=');
// myString.getValue(); // '=^.^='

//------------------------------------------------task3_

/*
  Создайте класс Car с указанными полями и методами.
*/
//
// class Car {
//     constructor(maxSpeed) {
//         this.speed = 0;
//         this.maxSpeed = maxSpeed;
//         this.running = false;
//         this.distance = 0;
//         /*
//           Добавьте свойства:
//             - speed - для отслеживания текущей скорости, изначально 0.
//
//             - maxSpeed - для хранения максимальной скорости
//
//             - running - для отслеживания заведен ли автомобиль,
//               возможные значения true или false. Изначально false.
//
//             - distance - содержит общий киллометраж, изначально с 0
//         */
//     }
//
//     turnOn() {
//         this.running = true;
//         // Добавьте код для того чтобы завести автомобиль
//         // Просто записывает в свойство running значание true
//     }
//
//     turnOff() {
//         this.running = false;
//         // Добавьте код для того чтобы заглушить автомобиль
//         // Просто записывает в свойство running значание false
//     }
//
//     accelerate(spd) {
//         spd<=this.maxSpeed && spd > 0? this.speed = spd : console.log('Не корректная скорость');
//         // Записывает в поле speed полученное значение, при условии что
//         // оно не больше чем значение свойства maxSpeed
//     }
//
//     decelerate(spd) {
//         spd<=this.maxSpeed && spd > 0? this.speed = spd : console.log('Не корректная скорость');
//         // Записывает в поле speed полученное значение, при условии что
//         // оно не больше чем значение свойства maxSpeed и не меньше нуля
//     }
//
//     drive(hours) {
//         this.running === true ? this.distance = hours * this.speed : console.log ('Заведи машину!');
//         // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
//         // но только в том случае если машина заведена!
//     }
// }
//
// const myCar = new Car (200);
//
// myCar.turnOn();
// myCar.accelerate(100);
// myCar.drive(10);
//
// console.log(myCar);
//
// myCar.decelerate(50);
// myCar.turnOff();
// console.log(myCar);
//

//-----------------------------------------------------WOT-----

// class Tank {
//     constructor(name, color, startX, startY) {
//         this.coordinateX = startX;
//         this.coordinateY = startY;
//         this.life = 100;
//         this.ammunition = 5;
//         this.engineStatus = true;
//         this.name = name;
//         this.color = color;
//     }
//     moveToXY(x,y){
//         this.life>0?(this.coordinateX += x, this.coordinateY += y):console.log('You are die');
//     }
//     fireTo (x, y){
//         this._canFire() ? (this.ammunition -= 1, console.log(`firing to ${x}:${y}`)) : alert('You should reload');
//     }
//     _canFire(){
//         return this.life > 0 && this.ammunition > 0;
//     }
//     checkHealth(){
//         return this.life > 0 && this.life < 100
//     }
//     heal(h){
//         this.checkHealth() ? this.life += h : console.log('не можливо')
//     }
//     checkEngine(){
//         this.engineStatus === true ? alert('Engine is work') : alert('Engine doesn\'t work')
//     }
//     repairEngine(){
//         this.engineStatus === false ? this.engineStatus = true : null
//     }
//     showCoordinate(){
//         console.log(`x: ${this.coordinateX}, y: ${this.coordinateY}`)
//     }
// }
//
//
//
//
// // function Tank(name, color, startX, startY) {
// //     this.coordinateX = startX;
// //     this.coordinateY = startY;
// //     this.life = 100;
// //     this.ammunition = 5;
// //     this.engineStatus = true;
// //     this.moveToX = function (x) {
// //         return this.coordinateX += x
// //     };
// //     this.moveToY = function (y) {
// //         return this.coordinateY += y
// //     };
// //     this.fireTo = function (x, y) {
// //         return this.canFire() ? (this.ammunition -= 1, console.log(`firing to ${x}:${y}`)) : alert('You should reload')
// //     };
// //     this.canFire = function () {
// //         return (this.ammunition > 0 && this.life > 0)
// //     };
// //     this.checkHealth = function () {
// //         return this.life > 0 && this.life < 100
// //     };
// //     this.heal = function (x) {
// //         this.checkHealth() ? this.life += x : console.log('не можливо')
// //     };
// //     this.checkEngine = function () {
// //         return this.engineStatus === true ? alert('Engine is work') : alert('Engine doesn\'t work')
// //     };
// //     this.repairEngine = function () {
// //
// //         return this.engineStatus === false ? this.engineStatus = true : null
// //     };
// //     this.showCoordinate = function () {
// //         return {x: this.coordinateX, y: this.coordinateY}
// //     };
// //     this.name = name;
// //     this.color = color;
// // }
// //
// //
// // const abrams = new Tank('Max', 'Red', 15, 18);
// // console.log(abrams);
// // const miledi = new Tank('Miledi', 'Purple', 10, 185);
// // console.log(miledi);
// //
// // abrams.moveToX(20);
// // abrams.moveToX(50);
// // abrams.moveToY(30);
// // abrams.moveToY(40);
// // abrams.moveToY(10);
// // console.log(abrams.showCoordinate());
// // abrams.fireTo(30, 20);
// // abrams.fireTo(40, 30);
// // abrams.fireTo(50, 40);
// // abrams.fireTo(60, 50);
// // abrams.fireTo(70, 60);
// // abrams.fireTo(100, 90);
// // abrams.life -= 50;
// // // tank34.engineStatus = false;
// // // console.log(tank34);
// // // tank34.repairEngine();
// // // console.log(tank34);
// // // tank34.heal(30);
// // // console.log(tank34.checkHealth());
// // // console.log(tank34);
// //
// //
// // function User(setting) { // obj with settings
// //     this.age = setting.age;
// //     this.name = setting.name;
// //     this.isActive = setting.isActive;
// //     this.isPremium = setting.isPremium;
// //     this.likesCount = setting.likesCount;
// //
// //     this.showLikes = function () {
// //         return this.likesCount;
// //     }
// // }
// const abrams = new Tank('Max', 'Red', 15, 18);
// console.log(abrams);
// abrams.moveToXY(50,50);
// abrams.fireTo(30, 20);
// abrams.fireTo(40, 30);
// abrams.fireTo(50, 40);
// abrams.fireTo(60, 50);
// // abrams.fireTo(70, 60);
// abrams.fireTo(100, 90);
// abrams.life -= 50;
// console.log(abrams);
// abrams.showCoordinate();
// abrams.checkEngine();
// abrams.heal(30);
// console.log(abrams);
// abrams._canFire();
//

//------------------------------------------------
// class User {
//     constructor(name,surname) {
//         this._name = name;
//         this._surname = surname;
//     }
//     static methodSTATIC() { // метод, до якого може достучатися виключно сам класс, екземпляри классу не мають до нього доступу. Тобто, щоб метод не потрапляв у цепочку прототипів.
//         console.log('HELLO');
//     }
//
//     getFullName() {
//         return `${this._name} ${this._surname}`
//         }
//     get getterName(){
//         return this._name;
//     }
//     set age(age) {
//         this._age = age;
//     }
//     set name(name){
//         this._name = name;
//     }
//     get name () {
//         return this._name;
//     }
// }
// //set приймає виключно один параметр
// // getter фу-ція,що вертаэ значення поля
//
//
//
// let user = new User( 'Jhon', 'Dou');
// console.log(user.getFullName());
// console.log(user.name);
// user.name = 'Mike';
// console.log(user.name);
// User.methodSTATIC()


//-------------------------------samleTask

// 1)Створити клас Worker що буде мати властивості name, surname, rate, days
// 2) Додати метод getSalary(),
// 3) Створити 2 робітника і знайти їх зарплати
// 4) Модифікувати клас так щою всі 4 властивості з пункта №1 були приватними і написати для їх читання гетери
// 5) Для властивостей rate, days додати методи сетери

// class Worker {
//     constructor(name, surname, rate, days) {
//         this._name = name;
//         this._surname = surname;
//         this._rate = rate;
//         this._days = days;
//     }
//     getSalary() {
//         console.log(`Salary of ${this.name} ${this.surname} is ${this.rate*this.days} gold coins.`)
//     }
//     get name() {
//         return this._name
//     }
//     get surname() {
//         return this._surname
//     }
//     get rate() {
//         return this._rate
//     }
//     get days() {
//         return this._days
//     }
//     set name(name) {
//         this._name=name
//     }
//     set surname(surname) {
//         this._surname = surname
//     }
//     set rate(rate) {
//         this._rate = rate
//     }
//     set days(days) {
//         this._days = days
//     }
//
// }
//
// let Ravshan = new Worker ('Ravshan', 'Dou', 50, 3);
// Ravshan.getSalary();
// Ravshan.surname = 'Duck';
// console.log(Ravshan);
//
// let Gogi = new Worker ('Gogi', 'Kruz', 10, 24);
// Gogi.rate = 80;
// Gogi.getSalary();
// console.log(Gogi);


//---------------------------------------------task 3

// 1) Створити клас User шо буде мати поля name, surname
// 2) Додати метод getFullName() що виводить на екран імя і прізвище
// 3) Створити клас Student шо буде наслідуватися від User
// 4) Властивості  name, surname буде наслідувати від User і буде мати власну властивість yearIn
// 5) Для студента додати метод getCourse() що показує курс на якому навчається зараз студент (від поточного року відняти рік вступу)
// 6) Додати студенту метод getFullInfo() який бере інформацію з батьківського метода getFullName() і свого getCourse() і виводить її на екран
//
class User {
    constructor (name, surname) {
        this._name = name;
        this._surname = surname;
    }
    getFullName() {
        console.log(`FullName: ${this.name} ${this.surname}`)
    }
    get name() {
        return this._name
    }
    get surname() {
        return this._surname
    }
}



class Student extends User{
    constructor (name, surname, yearIn){
        super(name, surname);
        this._yearIn = yearIn;
    }
    getCourse() {
        let today = new Date;
        console.log(`Поточний рік навчання: ${today.getFullYear() - this.yearIn} курс`)
    }
    get yearIn(){
        return this._yearIn
    }
    getFullInfo() {
        return `${this.getFullName()} ${this.getCourse()}`
    }
}

let George = new Student('#first');
// George.getFullName();
// George.getCourse();

George.getFullInfo();

