
/*

let user ={
    id: 84759374983476983475,
    private: {
        login: 'user3',
        email: 'user@.com',
        tel: '982-374-27-34-0',
        'credit-Card': 3495798345703457,
        password: 'ohgohi43oiihfo334',
    },
    public: {
        name: 'Bob',
        photos: ['http://iusdgfks', 'http://sjdhfsfjpsf'],

    }
}

/!*
console.log(user.id);
console.log(user.private.password);
console.log(user.public.name);
console.log(user.private['credit-Card']);
*!/

function showValue(obj, prop) {
    return obj[prop];
}

console.log(showValue(user, 'id'));

function showPrivateValue(obj, prop1, prop2) {
    return obj[prop1][prop2];
}

console.log(showPrivateValue(user, 'private', 'tel')); // строками, бо функція буде шукати змінні типу let private, let tel...
*/

//--------------------------------------------------------------------------
/*

const hotel = {
    name: "Resort Hotel",
    star: 5,
    capacity: 100,
    status: 'Lux',
};


console.log(hotel.name);
hotel.adress = "1, Beach ave.";
console.log(hotel);
hotel.adress = "2, Beach ave";
hotel["manager"] = "Chuck Norris";
console.log(hotel);
hotel.tel = {};
hotel.tel.mts = '230-45-45-34';
hotel.tel.umc = '8723-45-23-13';
console.log(hotel);
*/

//--------------------------------------------------

/*
let users = [
    {name: '1'},
    {name: '2'},
    {name: '3'}
];

let ages = [25, 56, 35];
let i = 0;
for (let obj of users) {
    obj.age = ages[i];
    i += 1;
}

console.log(users);
*/

//---------------------------------------------------
/*
let name = 'Ave';
let adress = 'Tyta';
stars = 5;

/!*

const hotel = {
    name: name,
    adress: adress,
    stars: stars,
};
*!/

// аналогічний запис
const hotel = {
    name,
    adress,
    stars,
};

//oбїект шукає змінну з ім'ям, як у назві ключа
console.log(hotel);

//--------------------------------------------- Delete


delete hotel.stars;

console.log(hotel);
*/

//-----------------------------------------------Чи є ключ?

/*
const hotel = {
    name: "Resort Hotel",
    stars: 5,
    capacity: 100,
    status: 'Lux',
};

let hasName = 'name' in hotel; // true or false
let hasStars = hotel.hasOwnProperty('stars'); //старий запис
let hasPool = 'pool' in hotel;
console.log(hasName);
console.log(hasStars);
console.log(hasPool);
*/


//--------------------------------------------- в обїекті можна зберігати функціїї

/*

const hotel = {
    name: "Resort Hotel",
    star: 5,
    capacity: 100,
    status: 'Lux',
    getName: function () {
        return hotel.name;
    },
    getStars: () => hotel.stars,
    changeCapacity(value) {
        return hotel.name;
    },

};

console.log(hotel.getName());

//arr.push, Math.random - arr та Mаth - об'єкти, push та random - method
*/

//-----------------------------------------------------

/*//рисвоєння по значенню
// присвоєння по ссилці
// assign метод об'єкта

const first = {name: 'Tony'};
const last = {lastName: 'Stark'};
/!*

const person = Object.assign(first,last); // потипу до first додається параметри з last
console.log(person);
console.log(first);*!/
const copy = Object.assign({},first,last); // Створення копії об'єкта

console.log(first);
console.log(last);
console.log(copy);*/
//----------другий спосіб запису

//----------------------------------------------

/*const defaultSettings = {
    name: "Mango",
    age: 2,
    status: "happy",
    isActive: false,
    isAdmin: false,
};

const updatedSettings = {
    age: 3,
    status: "cheerful",
    isActive: true,
};

Object.assign(defaultSettings, updatedSettings);*/

//-------------------------------------------

// ...  spred operator

/*
const a = {x: 1, y: 2};
const b = {x: 0, z: 3};

/!*const c = Object.assign({}, a, b)
console.log(c);*!/

const c ={
    ...a,
    ...b,
};
console.log(c);
*/

//----------------------------------------------for in

//for of перебирає масиви,
//for in об'єкти
/*const hotel = {
    name: "Resort Hotel",
    star: 5,
    capacity: 100,
    status: 'Lux',
};*/
/*

for (let key in hotel) {
    console.log(hotel[key]);
    console.log(key);
}
*/

//------------------------------------------ cheking for "for in"
/*
for (const key in hotel) {
    let hasKey =hotel.hasOwnProperty(key); // перевірка, чи є ключ виключно від цього об'єкта
    if(hasKey) {                            // якщо не буде перевірки, то for in  буде перевіряти ще й ключи від "батьківського" об'єкта.
        console.log('Value: ', jote[key]);
    }
}*/
//------------------------------------------------- object.keys ми можемо в форматі масива отримати всі ключі об'єкта

/*
const keys = Object.keys(hotel);
console.log(keys);
*/

//-------------------------------------------------object.keys ми можемо в форматі масива отримати всі значення об'єкта
/*const values = Object.values(hotel);
console.log(values);*/
//------------------------------------------------- масив ключів+значення
/*
const entries = Object.entries(hotel);
console.log(entries);
*/

//------------------------------------------------Деструктурізація

/*
const hotel = {
    name: "Resort Hotel",
    star: 5,
    capacity: 100,
    status: 'Lux',
};

// let name = hotel.name;

const {name, star, capacity, status, age = 5, adress} = hotel;
console.log(name, star, capacity, status, age, adress); // об'являємо змінні і присвоюємо їм значення з об'єкту.
*/

// аналогічно до запису:
/*
let name = hotel.name;
let star = hotel.star;
let capacity = hotel.capacity;
let status = hotel.status;
let age = hotel.age;
*/
//Найчастіше використовується з функціями.

//---------------------------------------------------------- dest in func
/*

let dog = {
    name: 'Mango',
    age: 5,
    isHappy: true,
};

/!*
function showObjVal(obj) {
    console.log(obj.name);
    console.log(obj.age);
    console.log(obj.isHapppy);
}
*!/

function showObjVal({name,age,isHappy}) {
    console.log(name);
    console.log(age);
    console.log(isHappy);
}
showObjVal(dog);
*/

//-----------------------------------------------------------dest of massive


/*
let strNum = ['one','two','three'];
let [a,b,c] =strNum;
console.log(a);
console.log(b);
console.log(c);
// a,b,c,d, - будь які назви змінних
*/

//------------------------------------------------------------
/*

 let numb = [5, 10, 20];

 function showArrVal(arr) {
     console.log(arr[0]);
     console.log(arr[1]);
     console.log(arr[2]);
 }

 function showArrVal([a, b, c]) {
     console.log(a);
     console.log(b);
     console.log(c);
 }
 showArrVal(numb);
*/



//------------------------------------------------------------
/*

/!*
  Напишите скрипт, который, для объекта user, последовательно:

    - добавляет поле mood со значением 'happy'

    - заменяет значение hobby на 'javascript'

    - удаляет свойство premium

    - выводит содержимое объекта user в формате ключ:значение
      используя цикл for...in

    - выводит содержимое объекта user в формате ключ:значение
      используя Object.keys и for...of

    - выводит содержимое объекта user в формате ключ:значение
      используя Object.entries и for...of
*!/

const user = {
    name: "Mango",
    age: 20,
    hobby: "html",
    premium: true
};

user.mood = 'happy';
console.log(user);
user.hobby = 'javascript';

delete user.premium;
console.log(user);

/!*
for (const key in user) {
    console.log(`${key}:${user[key]}`);
};

const keys = Object.keys(user);
console.log(keys);

for (const obj of keys) {
    console.log(`${obj}:${user[obj]}`);
}
*!/

const objEntries = Object.entries(user);
console.log(objEntries);

for (const arrEntries of objEntries) {
    console.log(`${arrEntries[0]}:${arrEntries[1]}`);
};
*/

//-----------------------------------------------------------------------task
/*

/!*
  Напиште скрипт который определит и выведет в консоль
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся
  как свойства объекта в формате "имя":"кол-во задач"
*!/

const tasksCompleted = {
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99
};

/!*
let name = '';
let maxWork = 0;
for (const workCompl in tasksCompleted){
    tasksCompleted[workCompl]>maxWork ? (maxWork = tasksCompleted[workCompl], name = workCompl) : null;
}
console.log(`${name}:${maxWork}`);*!/

// spred operator
let values = Object.values(tasksCompleted);
let users = Object.keys(tasksCompleted);
console.log(values);
console.log(Math.max(...values));
let maxTask = Math.max(...values);
let winner = users[values.indexOf(maxTask)];
console.log(winner);
*/

//--------------------------------------------------task

/*
  Напишите функцию countProps(obj),
  считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/

// Вызовы функции для проверки

/*

function  countProps(obj) {
    return (Object.keys(obj)).length;
};
*/

/*
 let countProps = obj => (Object.keys(obj)).length;
console.log(countProps({})); // 0
console.log(countProps({a: 1, b: 3, c: 'hello'})); // 3
console.log(countProps({a: 1, b: 3, c: 'hello', d: true})); // 4
*/

//------------------------------------------------spred and rest


//---------------------------------------arr copy
/*

let arr = [1, 2, 3];
let arr2 = arr; // робить ссилку, на значення, замість копії


let arr = [1, 2, 3]; // Зробить незалежний, новий масив
let arr2 = [...arr]; // like arr.slice()


// -----------------------------------------concatenate arrays

let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];
// let arr3 = arr1.concat(arr2);

arr1 = [...arr2, "BootCamp"];  // перезапише перший
arr1 = [...arr1, ...arr2, "BootCamp"]; // додасть до першого
console.log(arr1);
*/

//--------------------------------------------------------


// // add the elements of an existing array into a new array
// let certsToAdd = ['Algorithms', 'Front End'];
// let certifications = ['Web Design', ...certsToAdd,'Data Visualization', 'APIs', 'Information Security'];
// console.log(certifications);

// // pass elements of an array as arguments to a function
// function addThreeNumbers(x, y, z) {
//     console.log(x + y + z)
// }
//
// variant #1
// let salary = [100, 200, 500, 800];
// addThreeNumbers(salary[0],salary[1],salary[2]);
// variant #2
// let salary = [100, 200, 500, 800];
// let [a, b, c] = salary;
// addThreeNumbers(a, b, c)
// variant #3
// let salary = [100, 200, 500, 800];
// console.log(addThreeNumbers(...salary));
// console.log(addThreeNumbers(100, 200, 500, 800));

// // copy arrays
// let arr = [1, 2, 3];
// let arr2 = arr;

// let arr = [1, 2, 3];
// let arr2 = [...arr]; // like arr.slice()
// arr2.push(4);
// console.log(arr);
// console.log(arr2);
//
//
// // concatenate arrays
// let arr1 = [0, 1, 2];
// let arr2 = [3, 4, 5];
// // let arr3 = arr1.concat(arr2);
// arr1 = ["BootCamp",...arr2,...arr1];
// // console.log(arr3);
// console.log(arr1);
//
//
// REST: condense multiple elements into an array
// function multiply(multiplier,...theArgs) {
//     console.log('multiplier', multiplier);
//     console.log('theArgs', theArgs);
// }
//
//  multiply(2, 1, 2, 3, 8, 9);


// --------------------------------------------функціональні методи масивів

// --- чисті функціі, це такі фу-ї, що працює лише з данними, що до неї прийшли і не смінює глобальні змінні.

// ------------------принцип запису:

// ---першим параметром в функції завжди буде елемент масива
// arr.methodName(function(element, index, arr){
// return
// })
// майже всі функ. метоли масива, як рез. виводять новий масив з рез-ми роботи.

//map
/*
let numbers = [0, 2, 4];

/!*let doubleNumbers = numbers.map(function (item) {
    return item*2;
})
console.log(numbers);
console.log(doubleNumbers);*!/

let arrowNumbers = numbers.map(item => item*2);
console.log(arrowNumbers);
*/



/*
let newNumbers = numbers.map(function (element,index,arr) {
    return element * 2;
});*/
// console.log(numbers);
// console.log(newNumbers);
//----------------------------------------------method filter щоб видалити з масива непотрібні едементи чи данні
/*

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let filteredArr = numbers.filter(item => item > 5 ? item : null);
console.log(filteredArr);
*/

// find шукає в масиві значення і повертає це елемент... перший, що знайде, після цього припине роботу.

/*
const logins = ['Einstein', 'Newton', 'Galileo', 'Copernicus'];
let findLogin = logins.find( el => el === 'Newton');
console.log(findLogin);
*/


/*
const logins = ['Einstein', 'Newton', 'Galilei', 'Copernicus'];
let findLogin = logins.find(function (el) {
    return el === 'Newton';
});

let arrowFind = logins.find(el => el === 'Newton');

console.log(findLogin);
*/

//-------------------------------------------------every  видає true/false в залежності, чи всі елементи масиву проходять перевірку.
// Якщо хоч один елемент не проходить перевірку, то повертається false.
/*

const money = [100, 500, 300, 250, 5]; // [true, true, true,true]
const go1 = money.every(function (element) {
    return typeof element === 'number';
})
console.log(go1);
*/

//------------------------------------------------- some якщо хоч один елемент пройде перевірку, то true, якщо ні, то false
/*

const money = [100, 500, 300, 250, 5]; // [true, true, true,true]
const go2 = money2.some(function (element) {
    return element >= 500;
})
console.log(go2);

*/




//-------------------------------------------------------------------------
// let arrowNumbers = numbers.map(element => element*20);
// console.log(arrowNumbers);
// const addOne = arr.map(n => n + 1);
// console.log(addOne); // [1, 3, 5]
// к значению массива добавим значение позиции этого числа
// const numbers = [0, 2, 4, 6, 8, 10];
// const flipFlop = numbers.map(function (element, index) {
//     return element + index
// });
// console.log(flipFlop);
// const flipFlop = numbers.map((element, index) => element + index);
// console.log(flipFlop);
//
// const addPosition = odd.map((n, i) => n + i);
// console.log(addPosition); // [0, 3, 6, 9, 12, 15]

//---------------------------------------------------------------------------
/*

let numbers2 = [4, 2, 5, 1, 3, 11];
numbers2.sort(function (a,b) {
/!*    if (a>b) {
        return 1
    } else {
        return -1
    }*!/
return a-b; // для строк  > або <, або strings.sort() або strings.sort().reverse();
});
console.log(numbers2);*/

/*
let arr = [
    {name: 'A', price: 500},
    {name: 'C', price: 700},
    {name: 'B', price: 800},
    {name: 'A', price: 50}
];
arr.sort(function (el1,el2) {
    return el1.name> el2.name || el1.price >el2.price

});
console.log(arr);
*/

//------------------------------------------------------- reduce
//перший параметр в функції - аккумулятор
/*
const hoursWorkedPerWeek = [9,8,8,8,10,5];
let result = hoursWorkedPerWeek.reduce(function (acc,el) {
    return acc + el

},0); //,0 початкове значення аккумулятора, якщо не передамо, то в поч.знач. попаде перший елемент масива.
console.log(result);
*/

/*
const hoursWorkedPerWeek = [
    {day: 'M',number: 9},
    {day: 'T',number: 10},
    {day: 'W',number: 11},
    {day: 'T',number: 5},
    {day: 'F',number: 12}
];
// let sum = 0;
// for (let el of hoursWorkedPerWeek) {
//     sum +=el
// }
// console.log(sum);

let result = hoursWorkedPerWeek.reduce(function (acc, el) {
    return acc + el.number;
},0);
let arrResult = hoursWorkedPerWeek.reduce((acc, el) => acc + el.number, 0);
console.log(result);
*/


//----------------------------------------------
/*

let superArr = [[1,5,10,11],[12,15,16,17],[25,65,47,89]];

/!*
let flatArr = superArr.reduce(function (acc,arr) {
    return acc.concat(arr)
},[])
    .sort((a,b) => a - b)
    .filter(el => el > 16);
    // .reverse();

console.log(flatArr);*!/

let superArr = [[1, 5, 10, 11], [12, 15, 16, 17], [25, 65, 47, 89]];
let flatArr = superArr
    .reduce((acc, arr) => acc.concat(arr),[])
    .sort((a, b) => a - b)
    .filter(el => el > 16);

*/

//-------------------------------------------------------task 1
/*Функция findGreaterThan получает два аргумента - число и массив.
    Возвращает новый массив, содержащий элементы которые больше числа.*/
/*
function findGreaterThen (num, arr) {
    return arr.filter( item => item>num)
}
console.log( findGreaterThen(2, [1, 2, 3, 4, 5]) ); // [3, 4, 5,]
console.log( findGreaterThen(3, [1, 2, 3, 4, 5]) ); // [4, 5,]
console.log( findGreaterThen(1, [1, 2, 3, 4, 5]) ); // [2, 3, 4, 5,]
*/
//-------------------------------------------------------task 1
/*
Функция multiplyBy принимает два аргумента - число и массив.
    Возвращает массив все значения которого умножены на число.
*/
// const numbers = [1, 2, 3, 4, 5];
/*
function multiplyBy(num, arr) {
    return arr.map(item => item*num)
}
console.log( multiplyBy(2, numbers) ); // [2, 4, 6, 8, 10]
console.log( multiplyBy(3, numbers) ); // [3, 6, 9, 12, 15]
console.log( multiplyBy(4, numbers) ); // [4, 8, 12, 16, 20]*/

//------------------------------------------------------- task 3
/*
Функция summAllNumbers принимает любое число аргументов.
    Возвращает число - сумму всех аргументов.
*/
/*
function summAllNumbers(...args) {
    return args.reduce((acc,el) => (acc += el),0);
}
*/

/*

const summAllNumbers = (...args) => args.reduce((acc,el) => (acc += el),0);
console.log( summAllNumbers(1, 2, 3) ); // 6
console.log( summAllNumbers(1, 2, 3, 4) ); // 10
console.log( summAllNumbers(1, 2, 3, 4, 5) ); // 15

*/
//------------------------------------------------------- task 4
/*
Функция findEvery получает два аргумента - число и массив.
    Возвращает true если все элементы массива больше или равны числу.
    Иначе если есть хоть один элемент меньше числа, то возвращается false.
*/
/*
const findEvery = (num, arr) => arr.every(item => item >= num);
console.log( findEvery(5, [5, 6, 7, 8, 9]) ); // true
console.log( findEvery(6, [5, 6, 7, 8, 9]) ); // false
console.log( findEvery(4, [5, 6, 7, 8, 9]) ); // true

*/

//--------------------------------------------------------task5
/*
  Напишите функию getPropValues(arr, prop), принимающую
  параметры arr - массив, и prop - имя ключа в объекте.

  Функция должна возвращать массив всех значений этого ключа из arr.

  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

/*
const guests = [
    { name: "Mango", age: 20, isActive: true },
    { name: "Poly", age: 18, isActive: false },
    { name: "Ajax", age: 30, isActive: true },
    { name: "Chelsey", age: 45, isActive: false }
];

const getPropValues = (arr, prop) => arr.map(elem => elem[prop]);



// Вызовы функции для проверки
console.log( getPropValues(guests, "name") ); // ['Mango', 'Poly', 'Ajax', 'Chelsey']

console.log( getPropValues(guests, "age") ); // [20, 18, 30, 45]

console.log( getPropValues(guests, "isActive") ); // [true, false, true, false]

*/

//------------------------------------------------------task 6

/*
  Напишите функцию setGuestState(guests, period), где
  guests - массив гостей, period - кол-во дней после
  которого считается что гость не активен.

  Если значение поля inactiveDays болше чем period,
  поставить для isActive значение false.

  Если же значение inactiveDays меньше чем period,
  поставить для isActive значение true

  PS: обязательно используйте функциональные методы массивов, никаких for!
*/
/*

const users = [
    { name: 'Mango', inactiveDays: 15, isActive: true },
    { name: 'Poly', inactiveDays: 8, isActive: false },
    { name: 'Ajax', inactiveDays: 32, isActive: false },
    { name: 'Chelsey', inactiveDays: 85, isActive: true }
];

function setGuestState(guests, period) {
    return guests.map(elem => period > elem.inactiveDays ? {...elem,isActive: true}: {...elem,isActive: false});
}



// Вызовы функции для проверки
console.log(
    setGuestState(users, 10)
); // Объекты Mango, Ajax, Chelsey получат isActive false, а Poly наоборот true

console.log(
    setGuestState(users, 20)
); // Объекты Ajax, Chelsey получат isActive false, а Mango и Poly наоборот true

console.log(
    setGuestState(users, 50)
); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true
*/

//---------------------------------------task 7
/*
  Напишите функию getActiveGuests(guests), принимающую
  один параметр guests - массив объектов гостей.

  Функция должна возвращать массив объектов гостей,
  значение поля isActive которых true.

  PS: обязательно используйте функциональные методы массивов, никаких for!
*/
/*

const guests = [
    { name: "Mango", age: 20, isActive: true },
    { name: "Poly", age: 18, isActive: false },
    { name: "Ajax", age: 30, isActive: true },
    { name: "Chelsey", age: 45, isActive: false }
];

const getActiveGuests = (guests) => guests.filter(elem => elem.isActive === true? {...elem} : null);

// Вызовы функции для проверки
console.log(getActiveGuests(guests)); // массив из 2-х объектов Mango и Ajax
*/

//---------------------------------------task 8

/*
  Напишите функцию getGuestsOlderThan(guests, age), где
  guests - массив объектов гостей, age - предел возраста
  для сортировки.

  Функция возвращает массив объектов значение свойства
  age которых больше чем параметр age.

  PS: обязательно используйте функциональные методы массивов, никаких for!
*/
/*

const guests = [
    { name: "Mango", age: 20, isActive: true },
    { name: "Poly", age: 18, isActive: false },
    { name: "Ajax", age: 30, isActive: true },
    { name: "Chelsey", age: 45, isActive: false }
];

const getGuestsOlderThan = (guests, age) => guests.filter(elem => elem['age'] > age ? {...elem} : null);


// Вызовы функции для проверки
console.log(getGuestsOlderThan(guests, 25)); // массив из 2-х объектов Ajax и Chelsey

console.log(getGuestsOlderThan(guests, 35)); // [{name: 'Chelsey', age: 45, isActive: false}]

console.log(getGuestsOlderThan(guests, 55)); // []
*/

//---------------------------------------task 9

/*
  Напишите функию getGuestById(guests, id), принимающую
  guests - массив объектов гостей, id - идентификатор (число).

  Функция должна возвращать объект гостя с совпадающим id.

  PS: обязательно используйте функциональные методы массивов, никаких for!
*/
/*

const guests = [
    { id: 1, name: 'Mango', age: 20 },
    { id: 2, name: 'Poly', age: 18 },
    { id: 3, name: 'Ajax', age: 30 },
    { id: 4, name: 'Chelsey', age: 45 }
];

const getGuestById = (guests, id) => guests.find(elem => elem['id'] === id);

// Вызовы функции для проверки
console.log(
    getGuestById(guests, 3)
); // {id: 3, name: 'Ajax', age: 30}

console.log(
    getGuestById(guests, 1)
); // {id: 1, name: 'Mango', age: 20}

console.log(
    getGuestById(guests, 5)
); // undefined

*/


//---------------------------------- task 10_7

/*
  Используя метод reduce, посчитайте сумму
  всех значений свойств объекта order.
*/
/*

const order = {
    bread: 10,
    apples: 25,
    chicken: 60,
    milk: 15,
    cheese: 40
};

console.log((Object.values(order)).reduce((acc,elem) => acc += elem, 0));
*/
// console.log(order.reduce((acc,elem) => acc += elem,0)); // 150

//---------------------------------- task 11_8

/*
  Напишите функцию getTotalPrice(products, order), где
  products - объект со свойствами "имя продукта":"цена за единицу"
  order - объект со свойствами "имя продукта":"количество единиц".

  Функция возвращает общую сумму стоимости всех продуктов заказа.

  PS: используйте метод reduce
*/

const products = {
    bread: 10,
    milk: 15,
    apples: 20,
    cheese: 30,
    chicken: 40
};

const orderA = {
    bread: 2,
    apples: 4,
    chicken: 1
};

const orderB = {
    bread: 1,
    milk: 2,
    cheese: 3
};


// let getTotalPrice = (products, order) => console.log(Object.keys(order).map(items => order[items]*products[items]).reduce((acc,item) => acc += item, 0));

/*
let getTotalPrice = (products, order) => Object.keys(order).map(items => order[items]*products[items]).reduce((acc,item) => acc += item, 0);

// Вызовы функции для проверки

console.log(getTotalPrice(products, orderA)); // 140

console.log(getTotalPrice(products, orderB)); // 130*!/!*!/
*/

//---------------------------------------------------------task 12_9

/*
  Напишите функию allGuestsActive(guests), принимающую
  один параметр guests - массив объектов гостей.

  Функция должна возвращать true если значение поля isActive
  всех объектов true, в противном случае false.

  PS: используйте метод every или some, никаких for!
*/

const guestsA = [
    { name: "Mango", isActive: true },
    { name: "Poly", isActive: false },
    { name: "Ajax", isActive: true }
];

const guestsB = [
    { name: "Mango", isActive: true },
    { name: "Poly", isActive: true },
    { name: "Ajax", isActive: true }
];
//
// let allGuestsActive = (guests) => console.log((Object.values(guests).map(item => item['isActive']).every(item => item === true)));
/*

let allGuestsActive = (guests) => (guests.every(item => item['isActive'] === true));

// Вызовы функции для проверки
console.log(allGuestsActive(guestsA)); // false

console.log(allGuestsActive(guestsB)); // true

*/

