'use strict';

/*
  Напишите код, который бы  с помощью
  функции-конструкора User, позволял создавать
  объекты пользователя со следующим свойствами:
    - name - строка (имя)
    - isActive - буль (активен)
    - age - число (возраст)
    - friends - число (кол-во друзей)

  Имя, активность, возраст и друзей,
  необходимо передать как аргументы
  при вызове конструктора.

  Добавить метод getUserInfo(), которая, выводит строку:
  `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`

  Создать несколько объектов пользователя User и с помощью
  функции getUserInfo вывести строку в консоль.
*/

//----

function User({name, isActive, age, friends}) {
    this.name = name;
    this.isActive = isActive;
    this.age = age;
    this.friends = friends;
}

const jane = new User({age: 25, name: 'Jane', isActive: true, friends: 20});
const james = new User({age: 35, name: 'James', isActive: false, friends: 30});
const gordon = new User({age: 20, name: 'Gordon', isActive: true, friends: 120});
const rebecca = new User({age: 18, name: 'Rebecca', isActive: true, friends: 220});

console.log(jane);
console.log(james);
console.log(gordon);
console.log(rebecca);

//---------------------------------------------------------------------------------------
/*
  Расставьте отсутствующие this
  в методах объекта store
*/

const store = {
    products: ['bread', 'cheese', 'milk', 'apples'],
    managers: ['poly', 'mango', 'ajax'],
    addManager(manager) {
        this.managers.push(manager);

        console.log(this.managers);
    },
    removeManager(manager) {
        const idx = this.managers.indexOf(manager);

        this.managers.splice(idx, 1);

        console.log(this.managers);
    },
    getProducts() {
        console.log(this.products);

        return this.products;
    }
}

store.addManager('chelsey'); // ['poly', 'mango', 'ajax', 'chelsey']

store.removeManager('mango'); // ['poly', ajax', 'chelsey']

store.getProducts(); // ['bread', 'cheese', 'milk', 'apples']

//--------------------------------------------------------------------------------------------
/*
  Расставьте отсутствующие this в конструкторе объектов Account
*/

function Account({login, password, type = "regular"}) {
    this.login = login;
    this.password = password;
    this.type = type;

    this.changePassword = function (newPassword) {
        password = newPassword;
        return password;
    };

    this.getAccountInfo = function () {
        return `
      Login: ${login}, 
      Pass: ${password}, 
      Type: ${type}
    `;
    };
}

const account = new Account({
    login: "Mango",
    password: "qwe123",
    type: "premium"
});

console.log(account.login); // 'Mango'
console.log(account.password); // 'qwe123'
console.log(account.type); // 'premium'

console.log(account.changePassword("asdzxc")); // 'asdzxc'

console.log(account.getAccountInfo()); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'


//---------------------------------------------------HW------------------------------------------
console.log('----------------------------------------------');
/*
  Создайте скрипт кассира, который получает список продуктов и деньги,
  подсчитывает общую стоимость продуктов, и в зависимости от того хватает
  денег или нет, уведомляет покупателя о результате.
*/

/* Есть база данных товаров, в формате "имя-товара":"цена за одну единицу" */
const products = {
    bread: 10,
    milk: 15,
    apples: 20,
    chicken: 50,
    cheese: 40,
};

const order = {
    bread: 2,
    milk: 2,
    apples: 1,
    cheese: 1
};

function Cashier(name, products) {
    this.name = name;
    this.productsDatabase = products;
    this.customerMoney = 0;
    this.changeAmount = 0;
    this.totalPrice = 0;
    this.greet = function () {
        return `Здравствуйте, вас обслуживает ${this.name}`
    };
    this.onSuccess = function () {
        return this.changeAmount === 0 ? console.log('Спасибо за покупку'): this.changeAmount > 0 ? console.log(`Спасибо за покупку, ваша сдача ${this.changeAmount}`) : this.onError()
    };
    this.onError = function () {
        console.log(`Очень жаль, вам не хватает денег на покупки`)
    };
    this.countTotalPrice = function (order) {
        return this.totalPrice = Object.entries(order).reduce(function(acc, item)
        {
           return acc += order[item[0]]*products[item[0]]
        },0);
    };
    this.getCustomerMoney = function (value) {
        return this.customerMoney = value
    };
    this.countChange =function() {
        return this.changeAmount = this.customerMoney - this.totalPrice
    };
    // - countChange() - метод, считает сдачу, разницу между общей суммой покупок и деньгами покупателя,
    //     записывает результат в поле changeAmount.
    // * Обязательно проверьте что customerMoney не меньше чем значение поля totalPrice
    // * Если денег было передано достаточно, возвращает текущее значение changeAmount
    // * Если было передано меньше денег чем в поле totalPrice, возвращает null
    this.reset = function () {
        this.totalPrice = 0;
        this.customerMoney = 0;
        this.changeAmount = 0;
    };
};


/*
  Необходимо создать функцию-конструктор Cashier.

  Поля будущего объекта кассира (🔔 объявляются как this.имя_поля в конструкторе):
    - name - строка, имя кассира, передается при вызове конструктора

    - productsDatabase - объект база данных продуктов, передается при вызове конструктора

    - totalPrice - число, общая стоимость покупок текущего покупателя, всегда начинается с 0

    - customerMoney - число, сумма введенная пользователем при запросе денег, всегда начинается с 0

    - changeAmount - число, сдача, всегда начинается с 0

    - greet() - метод, выводит в консоль строку `Здравствуйте, вас обслуживает ${имя_кассира}`

    - onSuccess() - метод, выводит в консоль строку `Спасибо за покупку, ваша сдача ${сдача}`
        если сдача больше 0, и строку `Спасибо за покупку` если сдача равна 0.

    - onError() - метод, выводит в консоль строку 'Очень жаль, вам не хватает денег на покупки'

    - countTotalPrice(order) - метод, получает список покупок, считает общую стоимость исходя из
        поля productsDatabase. Записывает результат в поле totalPrice.

    - getCustomerMoney(value) - метод, получает число - деньги покупателя и записывает его в поле customerMoney

    - countChange() - метод, считает сдачу, разницу между общей суммой покупок и деньгами покупателя,
        записывает результат в поле changeAmount.
        * Обязательно проверьте что customerMoney не меньше чем значение поля totalPrice
        * Если денег было передано достаточно, возвращает текущее значение changeAmount
        * Если было передано меньше денег чем в поле totalPrice, возвращает null

    - reset() - метод, сбрасывает поля totalPrice, customerMoney и changeAmount в 0.
*/

//function Cashier(name, productsDatabase) {
// 🔔 не забывайте о this при обращении к свойствам и методам будущего объекта
// }

/* Заказ пользователя хранится в виде объекта следующего формата. "имя-продукта":"количество-единиц" */
// const order = {
//     bread: 2,
//     milk: 2,
//     apples: 1,
//     cheese: 1
// };

/* Пример использования */
const mango = new Cashier('Mango', products);
// console.log('Проверяем исходные значения полей');
// Проверяем исходные значения полей
console.log(mango.name); // Mango
console.log(mango.productsDatabase); // ссылка на базу данных продуктов (объект products)
console.log(mango.totalPrice); // 0
console.log(mango.customerMoney); // 0
console.log(mango.changeAmount); // 0

// Вызываем метод greet
console.log(mango.greet()); // Здравствуйте, вас обслуживает Mango

// Вызываем метод countTotalPrice для подсчета общей суммы
// передавая order - список покупок пользователя
console.log(mango.countTotalPrice(order));

// Проверям что посчитали
console.log(`total price: ${mango.totalPrice}`); // 110

// Вызываем getCustomerMoney для запроса денег покупателя
mango.getCustomerMoney(300);

// Проверяем что в поле с деньгами пользователя
console.log(`customerMoney: ${mango.customerMoney}`); // 300

// Вызываем countChange для подсчета сдачи
const result = mango.countChange();

// Проверяем что нам вернул countChange
console.log(`countChange: ${result}`); // 190

// Проверяем результат подсчета денег
if (result !== null) {
    // При успешном обслуживании вызываем метод onSuccess
    mango.onSuccess(); // Спасибо за покупку, ваша сдача 190
} else {
    // При неудачном обслуживании вызываем метод onError
    mango.onError(); // Очень жаль, вам не хватает денег на покупки
}

// Вызываем reset при любом исходе обслуживания
mango.reset();

// Проверяем значения полей после reset
console.log(mango.totalPrice); // 0
console.log(mango.customerMoney); // 0
console.log(mango.changeAmount); // 0