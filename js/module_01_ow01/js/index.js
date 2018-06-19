/*
var x = 5;
x = 7;
console.log(x);

let y = 10;
y = 20;
console.log(y);

const z = 30;
z = 1;
console.log(z);


*/

/*

console.log(x);
var x = 10; // undefind
let x = 10; // is not defined*/

/*


let a = 10;
let b = 20;
let c = '30';
console.log (a + c + b); // 3030*/

//________________________________

// let age = prompt('Enter you age in the years:');
// let days = age * 365;
// let hours = days * 24;
// let minuts = hours * 60;
// let seconds = minuts *60;
//
// let user = {
//     age: age,
//     days: days,
//     hours: hours,
//     minuts: minuts,
//     seconds: seconds
// }
// console.log(user);

//_____________________________шаблонна строка

// let name = prompt('Enter your name:');
// let age = prompt('Enter your age');
// console.log('My name is ' + name + ' I am ' + age + ' years old.');
// console.log(`My name is ${name} I am ${age} years old.`);

//_______________________________
//
// let f = 'qwertyuiop';
// let s = 'asdfghjkl;';
// let t = 'zxcvbnm,.';
//
// // console.log(s[5] + f[2] + s[8] +s[8] + f[8] + ' ' + f[1] + f[8] + f[3] + s[8] + s[2]);
// console.log(`${s[5]}${f[2]}${s[8]}${s[8]}${f[8]} ${f[1]}${f[8]}`);

//____________________________upper+lowerCase

let c = 'Hello';
console.log(c.toLowerCase());
console.log(c.toUpperCase());

//__________________________split


// let d = 'Hello world';
// let splitWord = d.split(' ');
// console.log(splitWord);

//___________________________ join

let d = 'Hello world';
let splitWord = d.split(' ');
console.log(splitWord.join('123'));

//________________________substr

let a = 'heroplus';
// console.log(a.substring(1,3)); З, по...
// console.log(a.substring(1));
console.log(a.substr(1,3)); //С + скільки символів


//_______________________endsWith

// let b = 'Hello ';
//
// console.log(b.endsWith('l'));
// console.log(b.startsWith('H'));

//_______________________includes

let b = 'Hello.com';
console.log(b.includes(',')); // чи є символ у строці
console.log(b.indexOf('o')); // порядковий номер, першого сивола в строці, якщо елемент відсутній, повертається -1

