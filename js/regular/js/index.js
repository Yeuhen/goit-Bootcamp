'use strict';

// спосіб створення регулярок (2 способи):
// 1. match - результат - масив
let pattern = /in/;
//method match (string.match(pattern)

const string = 'windows';
console.log(string.match(pattern));

//2. test - ПРОСТО повертає true/false
console.log(pattern.test(string));

//$flags: i - игнорує регістр, g - global, шукає усі співпадіння

//$flags

let string2 = 'Is that all there is?',
    reg = /is/,
    reg2 = /is/i,
    reg3 = /is/ig;


console.log('Without flags:', string2.match(reg));
console.log('register ignore:', string2.match(reg2));
console.log('Register ignore & global search:', string2.match(reg3));

//$classes

let string3 = '12345, q5ww. www h - wejfkf',
    reg4 = /[0-9]/g, //будьякі цифри від 0 до 9 або \d
    reg5 = /\d/g,
reg6= /\D/g,  // все окрім цифр
    reg7= /\s/g, // усі пробіли
    reg8= /\S/g, // усе окрім пробілів
    reg9= /\W/g; // усі букви


console.log('reg4:',string3.match(reg4).length);
console.log('reg5:',string3.match(reg5).length);
console.log('reg6:',string3.match(reg6).length);
console.log('reg7:',string3.match(reg7).length);
console.log('reg8:',string3.match(reg8).length);
console.log('reg9:',string3.match(reg9));

// \b - лише знаходить пробіли, але не показує їх (границя слова)
// \s - пробел і виводить їх

// \{1,3} - від 1 до 3 символів
// \{5} - виключно з 5-ма символами
// \{5,} - більше за 5
// $ - закінчення строки
// /\d$/g - закінчується на цифру
// ^ - початок строки
// /^\d/g - починається на цифру

// . - будьякий символ

// + - знайди один, або більше символіц

// \w+  - знайди "СЛОВА" з одним, або більше символів
// () - група символів
// [] - конкретні символи
//[a-z| A-Z] від а до z - маленькі, або великих
// | - або
// \b(c|g|p)ar\b - слово з трьох букв, при чому перша буква або c або g або p, друга і третя ar

// ?<= - перед ним...
// ?<! - після нього...

let str = 'The fat cat mat sat on the mat.';
let reg11 = /(?<=[T|t]he\s)(fat|mat)/g;
//
console.log(str.match(reg11));

//  Закінчується на .com \.com\b (867)
// Починаються з цифр \b[0-9]
// У назві є дефіс(и)