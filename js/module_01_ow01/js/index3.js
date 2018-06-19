/*
//три функції, що роблять округлення
Math.floor(); // округлює до меншого 2.9999999 ->2
Math.ceil(); // округлює до більшого цілого числа 2.00000001 ->3
Math.round(); // по математичному 2.49999->2, 2.500000001 -> 3

Math.abs(); // МОДУЛЬ, від'ємні у додатні
Math.pow(); // степінь (2^2=4, pow=^), корінь - дрібна ступінь
console.log('корінь кубічний: ' + Math.pow(27, 1/3)); //(2^(-2)=1/2^2)
console.log('max: ' + Math.max(12, 25, -3));
console.log('min: ' + Math.min(-2, 12, -2));
console.log(Math.random()); // випадкове  число  в діапазоні [0,1)
console.log(Math.floor(Math.random()*100));


console.log(1 < 2);
console.log(1 > 2);

console.log(5 >= 1 +4); //true
console.log(5<4 <= 2+4); //true

let a = '1'; //=  Присвоювання
let b = 1;
console.log(a = b);
console.log(a);
console.log(a == b); // порівнює лише за значенням
console.log(a === b); // порівнює спочатку за типом данних, а потім за значенням

let a = 1;
let b = '1';
console.log(a = b);
console.log(a);
console.log(a != b); // true
console.log(a !== b); // false


let a = NaN;
b = NaN;
console.log(a != b); // false
console.log(a !== b); // false
console.log(a == b); // false
console.log(a === b); // false

//NaN не дорівнює нічому, навіть самому собі!!!

let a = 0;
b = null

console.log(a == b); // false
console.log(a === b); // false, тип для null = object

// ____________________________________
let a = null;
b = null

console.log(a == b); // true
console.log(a === b); // true,

//______________________________________

let a = null;
b = undefined;

console.log(a == b); //  true
console.log(a === b); // false , різні типи данних

//______________________________________
let a = 0;
b = undefined;

console.log(a == b); //  false
console.log(a === b); // false , різні типи данних

//______________________________________

let a = 'a';
b = null;

console.log(a == b); //  false
console.log(a === b); // false , різні типи данних

//_____________________________________
let a = 'H';
b = 'h';

console.log(a == b); //  false
console.log(a === b); // false

//______________________________________
let a = 'Hello';
b = 'Hello';

console.log(a == b); //  true
console.log(a === b); // true

//______________________________________

//false
//console.log(Boolean(0));
//console.log(Boolean(''));
//console.log(Boolean(NaN));
//console.log(Boolean(ubdefined));
//console.log(Boolean(null));
//console.log(Boolean(-0));
//console.log(Boolean(false));

// true
//console.log(Boolean(' '));


//____________________________________


// || - или
// зупиняється на першому true


console.log(1 || 2 || '0'); // 1
console.log(0 || 2 || '0'); // 2 , бо 0 - false
console.log(0 || null || '0'); // 0, якщо немає Тру, то останній false
console.log(0 || undefined || null); //
console.log(0 || null || 'undefined'); //
console.log(NaN || null || 5); //
console.log(28 || null || ''); //
console.log(Infinity || 55 || NaN); //
console.log(undefined || 'true' || 5); //

//___________________________________

// && - и
// зупиняються на першому false. Якщо всі тру, то покаже останній тру.
// спочатку робляться амперсанти, а потім пайпи
console.log(1 && 2 && '0'); // 0




//__________________________________________
let time = prompt('Введіть час: ');

if (time >= 14 && time <= 15){
    alert('Ідем їсти');
} else {
    alert('Пахать нєгри!');
}
*/

//__________________________________________

/*
let bablo = prompt('Скільки бабла на карті? ');

if (bablo >= 500){
    alert('Їдемо в Єгипет');
} else {
    alert('Облаштовуємо море у ванні');
}*/

/*let bablo = prompt('Скільки бабла на карті? ');

if(bablo > 1000) {
    alert('Thailand');
} else if (bablo > 500 && bablo <= 1000) {
    alert('Egypt');
} else if (bablo > 200 && bablo <= 500) {
    alert('Egypt');
} else {
    alert ('Ти не втомився');
}*/

//let за межами дужков не видно, а var видно!!! Якщо потрібна змінна по за межами {}, то її треба задати до циклу.

/*

let month = prompt('Введи назву місяця і я скажу тобі пору року:');

if( month === 'Грудень' || month === 'Січень' || month === 'Лютий') {
    alert('Зараз зима');
} else if( month === 'Березень' || month === 'Квітень' || month === 'Травень') {
    alert('Зараз весна');
} else if( month === 'Червень' || month === 'Липень' || month === 'Серпень') {
    alert('Зараз літо');
} else if( month === 'Вересень' || month === 'Жовтень' || month === 'Листопад') {
    alert('Зараз осінь');
} else {
    alert('Вивчай назви місяців!')
}*/

/*

let luckyNumber = 1;
if(luckyNumber === 1) {
    console.log('more');
} else if (luckyNumber === 3) {
    console.log('little more');
} else if (luckyNumber === 7) {
    console.log('You win');
}
*/

//аналогічно можна використати такий запис:
/*let luckyNumber = 1;
switch(luckyNumber) {
    case 1:                                   // в один виведе дщп з case 2
    case 2:
        console.log('more');
        break;
    case 3:
        console.log('little more');
        break;
    case 7:
        console.log('You win');
        break;
    default:
        console.log('Try again');
        break;
}*/
/*

let month = prompt('Введи назву місяця і я скажу тобі пору року:');
switch(month) {
    case 'Грудень':
    case 'Січень':
    case 'Лютий':
        alert('Зима');
        break;
    case 'Березень':
    case 'Квітень':
    case 'Травень':
        alert('Весна');
        break;

    case 'Червень':
    case 'Липень':
    case 'Серпень':
        alert('Літо');
        break;
    case 'Вересень':
    case 'Жовтень':
    case 'Листопад':
        alert('Осінь');
        break;
    default:
        alert('Вивчай назви місяців!');
        break;
}
*/

//Тернарний оператор

// let test = 6 > 5 ? 'Evrica' : 'Loser';

// let color = prompt('Enter color:');

// let result = color === 'white' || color === 'red' || color === '' ? : ;

let num = prompt('kjjbfvkj');
let result = num === '5' ? 'Evrika' : num == '5' ? 'Loser' : 'Fail';
console.log(result);


// cancel = null