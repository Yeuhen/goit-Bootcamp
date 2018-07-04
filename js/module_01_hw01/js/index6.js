'use strict';
class Hamburger {
    constructor(size,stuffing) {
        this._size = size;
        this._stuffing = stuffing;
        this._topping = [];
    }
    getBurgerInfo(){
        return Humburger.SIZES['this.size'].price
    }

    addTopping(topping) {
        this._topping.includes(topping)? alert ('Така добавка вже є, візміть іншу'): this._topping.push(topping);
    }
    removeTopping(topping){
        this._topping.includes(topping) ? this._topping = this._topping.filter(elem => elem !== topping): alert('Нема такого спайса!')
    }
    getToppings(){
       return this._topping
    }
    getSize() {
        return this.size
    }
    getStuffing(){
        return this.stuffing
    }
    calculatePrice(){
        return Hamburger.SIZES[this.size].price + Hamburger.STUFFINGS[this.stuffing].price + this._topping.reduce((acc,elem) => acc += Hamburger.TOPPINGS[elem].price,0)

    }
    calulateCalories(){
        return Hamburger.SIZES[this.getSize()].calories + Hamburger.STUFFINGS[this.stuffing].calories + this._topping.reduce((acc,elem) => acc += Hamburger.TOPPINGS[elem].calories,0)
    }
    get size() {
        return this._size
    }

    get stuffing(){
        return this._stuffing
    }
    get topping () {
        this._topping
    }
    // set size(size) {
    //     this._size = size
    // }
    // set stuffing(stuffing){
    //     this._stuffing = stuffing
    // }
    // set topping(topping) {
    //     this._topping = topping
    // }
}

// статична властивість Hamburger
//статичні методи викликаються виключно з назвою класу
//щоб чайлди мали змогу користуватися змінними, пишемо їх через this

Hamburger.SIZE_SMALL = 'SIZE_SMALL';
Hamburger.SIZE_LARGE = 'SIZE_LARGE';

Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
Hamburger.STUFFING_SALAD = 'STUFFING_SALD';
Hamburger.STUFFING_MEAT = 'STUFFING_MEAT';

Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
Hamburger.TOPPING_SAUCE = 'TOPPING_SAUCE';

Hamburger.SIZES = {
    [Hamburger.SIZE_SMALL]: {
        price: 30,
        calories: 50,
    },
    [Hamburger.SIZE_LARGE]: {
        price: 50,
        calories: 100,
    },
};

Hamburger.STUFFINGS = {
    [Hamburger.STUFFING_CHEESE]: {
        price: 15,
        calories: 20,
    },
    [Hamburger.STUFFING_SALAD]: {
        price: 20,
        calories: 5,
    },
    [Hamburger.STUFFING_MEAT]: {
        price: 35,
        calories: 15,
    },
};

Hamburger.TOPPINGS = {
    [Hamburger.TOPPING_SPICE]: {
        price: 10,
        calories: 0,
    },
    [Hamburger.TOPPING_SAUCE]: {
        price: 15,
        calories: 5,
    },
};

// let burger = new Hamburger (Hamburger.SIZE_LARGE, Hamburger.STUFFING_CHEESE);
// console.log(burger);
// burger.addTopping(Hamburger.TOPPING_SPICE);
// // burger.addTopping(Hamburger.TOPPING_SPICE);
// burger.addTopping(Hamburger.TOPPING_SAUCE);
// console.log(burger);
//
// // burger.removeTopping(Hamburger.TOPPING_SAUCE);
// console.log(burger);
// console.log(burger.getToppings());
// console.log(burger.getSize());
// console.log(burger.getStuffing());
// console.log(burger.calculatePrice());
// console.log(burger.calulateCalories());

// Маленький гамбургер с начинкой из сыра
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// Добавка из приправы
hamburger.addTopping(Hamburger.TOPPING_SPICE);

// Спросим сколько там калорий
console.log("Calories: ", hamburger.calulateCalories());

// Сколько стоит?
console.log("Price: ", hamburger.calculatePrice());

// Я тут передумал и решил добавить еще соус
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А сколько теперь стоит?
console.log("Price with sauce: ", hamburger.calculatePrice());

// Проверить, большой ли гамбургер?
console.log("Is hamburger large: ", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false

// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SPICE);

// Смотрим сколько добавок
console.log("Hamburger has %d toppings", hamburger.getToppings().length); // 1

