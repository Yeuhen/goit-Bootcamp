//---------------------------------create

// опис функції:
/*
function showText() {
    console.log('inside text');
}
*/


//запуск функцї:
// showText();
// без круглих дужок, покаже код. З круглими - виконає код

/*

function sum() {
    console.log(5 + 6)
}

sum();*/

//--------------------------------------------парамметр
// -------------------------------------------function expression

/*
function sum(a, b) {  // ------------------параметри
    console.log(a + b)

}
sum(10,12); //------------------------------аргументи
*/
// ---------------------------------------використовються в будьякому місці коду


// -------------------------------------------function declaration

/*
let calc = function () {
    console.log('inside text');
}
calc();
*/

// -----------------------------------функція працює лише після декларування


//------------------------------------анонімна функція

/*

let arr = [1,5,8,9];
let newArr = function () {
    el*2
 // код неробочий
}*/

/*

function showText() {

    let str = 'I am function';
    return str;                // вивести результат за границі функції
}

console.log(showText());
*/

// undefined+undefinde = NaN

/*

function  calculator(a,b) {
    let sum = a + b;
    let mult = a * b;
    let minus = a - b;
    let div = a / b;
    let result = sum + mult + minus + div;
    return ['сумма' + sum, mult, minus, div, result ];
}

let functionResult = calculator(10,5);
console.log(functionResult);*/


/*

function checkNumberType(num) {
    // let mess = null;
    return num % 2 === 0 ?  'Even' :  'Odd';
    // return mess;
}

console.log(checkNumberType(4));
*/
/*
function formatString(str) {
    return str.length <= 40 ? str : `${str.slice(0,40)}...`;
}

console.log(formatString('qwhhsddkjfvhsdjvhosvhosvhosdvhosfhoshvousuhgowrhghwoursghishi'));

console.log(
    formatString("Curabitur ligula sapien, tincidunt non.")
); // вернется оригинальная строка

console.log(
    formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
); // вернется форматированная строка

console.log(
    formatString("Curabitur ligula sapien.")
); // вернется оригинальная строка

console.log(
    formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.")
)*/
; // вернется форматированная строка

//------------------------------------------------------------------task3
/*


console.log( checkForSpam('Latest technology news') ); // false

console.log( checkForSpam('JavaScript weekly newsletter') ); // false

console.log( checkForSpam('Get best sale offers now!') ); // true

console.log( checkForSpam('[SPAM] How to earn fast money?') ); // true


function checkForSpam(str) {
    // return (str.toLowerCase()).split(' ');
    // return ((str.toLowerCase()).split(' ')).includes('spam') ? true : false;
    return !((str.toLowerCase()).indexOf('spam') === -1 && (str.toLowerCase()).indexOf('sale') === -1)
}*/


//------------------------------------------------------------- THEORY!
/*
let a = 30;         //глобальна область бачення
let b = 40;         //глобальна область бачення

function  addNumbers() {
    let a = 10;            //локальна область бачення
    let b = 20;            //локальна область бачення
    function number2() {
        let a = 10;
        let b = 20;
        return innerFunction ();
        function innerFunction() {
            let a = 100;
            let b = 200;
            return a + b;

        }

    }
    return number2();            //локальна область бачення
}

console.log(addNumbers());
*/

//--------------------------------------------------------------task
/*
/!*
  Написать функцию, getPx(str)

  Функция getPx должна получать строку вида '10px',
  проверять была ли передана строка, если да,
  возвращать только числовую составляющую, к примеру 10.

  Если была передана не строка, функция возвращает null.
*!/

// Вызовы функции для проверки

let getPx = str => typeof str === 'string' ? parseFloat(str) : null;

console.log( getPx("10px") === 10 ); // должно быть:  true
console.log( getPx("10.5") === 10.5 ); // должно быть:  true
console.log( getPx("0") === 0 ); // должно быть:  true
console.log( getPx(-1) ); // должно быть:  null
console.log( getPx(10) ); // должно быть:  null
*/

//--------------------------------------------------------------task
/*
/!*
  Создайте фукнцию findLongestWord(str),
  которая получает аргументом произвольную строку и
  возвращает самое длинное слово в этой строке.

  Важное условие - в строке могут быть только пробелы
  и символы букв и цифр!
*!/


// Вызовы функции для проверки
console.log(
    findLongestWord("The quick brown fox jumped over the lazy dog")
); // вернет 'jumped'

console.log(
    findLongestWord("Google do a roll")
); // вернет 'Google'

console.log(
    findLongestWord("May the force be with you")
); // вернет 'force'

function findLongestWord(str) {
    let arr = str.split(' ');
    let longest = '';
    for(let element of arr) {
        element.length > longest.length ? longest = element : null;
    };
    return longest;
}

*/

//--------------------------------------------------------------task


/*
/!*
  Создайте функцию findLargestNumber(numbers),
  которая получает массив чисел numbers, и возвращает
  самое большое число в массиве.
*!/

// Вызовы функции для проверки
console.log(
    findLargestNumber([1, 2, 3])
); // вернет 3

console.log(
    findLargestNumber([27, 12, 18, 5])
); // вернет 27

console.log(
    findLargestNumber([31, 128, 14, 74])
); // вернет 128

function findLargestNumber(numbers) {
    let maxNum = '';
    for(let element of numbers){
        element > maxNum ? maxNum = element : null;
    }
    return maxNum;
}*/


//--------------------------------------------------------------task

// 1) Написати функцію sliceElement() що вирізає з массива третій елемент
// 2) Написати функцію checkExist() що перевіряє чи є цей вирізаний елемент в базі
// 3) Якщо його немає додати його, якщо є нічого не робити addNumber()
/*

let dataBase = [5, 10, 25, 68, 75, 43];
let workArr = [10, 20, 30, 40];

function spliceElement(arr, position) {
    return arr.splice(position, 1)

}*/


//-------------------------------------------------------------- псевдомассив arguments()

/*
function sum(a, b) {
    return a + b;
}*/

/*

function arg() {
    // console.log(arguments);
    // arguments = 1, 5, 9, 12, 1, 100; // писок у вигляді масиву, псевдомассив
    // return arguments;
    let arr = Array.from(arguments);  // для arguments працюють лише порядковий номер та length
    if (typeof (arr[0]) === 'number'){
        let sum = 0;
        for(let item of arr) {
            sum += item;
        }
        return sum;
    } else {
        let sum = '';
        for(let item of arr) {
            sum += item + '';
        }
        return sum;
    }

}

console.log(arg(1, 5, 9, 12, 1, 100.56));
console.log(arg(5, 9));
console.log(arg('test', 'string', 'hello'));
*/

//-------------------------------------------------------

/*

function secretPassword() {
    let password = 'xh38sk';

    function guessPassword(guess) {
        if (guess === password) {
            return true;
        } else {
            return false;
        }
    }

    return guessPassword;
}

let passwordGame = secretPassword();
// console.log(passwordGame);
let tryOne = passwordGame('heyisthisit?');
let tryTwo = passwordGame('xh38sk');
// console.log(tryOne);
// console.log(tryTwo);
*/

/*function counter() {
    let count = 0;
    function increment() {
        count += 1;
        return count;
    }
    return increment;
}

// console.log(counter());
let user1 = counter();
// console.log(user1);
let first = user1();
console.log('First user counter', first);

let user2 = counter();
let user2First = user2();
let user2Second = user2();
let user2Third = user2();
let user2Fourth = user2();

console.log('Second user counter', user2Fourth);

 */
//Замикання це коли при визові функціі, створюється нова область бачення, зі своїєю

//---------------------------------------------------------------------------IIEF
//immediately involve expression function
/*
let x  = 5;

;(function () {   // захист від дурака. Якщо хтось забуде в кінці функції поставити ;
    let x = 10;
    let y = 20;

    console.log(x);
    console.log(y);
    })();

console.log(x); // 5
console.log(y); //  y is not defined
*/


//------------------------------------------------------------ callback
// функція, яку ми передаємо, як аргумент, в іншу функцію.

/*
//cb
const printString = function (cb) {
    let str = cb();
    let sum = 5 + 6;
    return str +sum;
};

function hello() {
    return 'Hello world';

}

console.log(printString(hello));

//-------------------------------------------------------default parammetres

function sum(a = 20, b = 10) {
    return a + b
}

console.log(sum(5));  // 15
*/


//------------------------------------------------------recursia

// функція, яка визиває сама себе з парамметром меншим на -1
/*

const pow = (base, exponent) => {
    if (exponent === 0) return 1;
    return base * pow(base, exponent - 1);
};

const pow = (2,3)=>{
     if (3 === 0 ) return 1;
     return 2 * pow(2,2)=> {
         if (2 === 0 ) return 1;
         return 2 * pow(2,1)=> {
             if (1 === 0 ) return 1;
             return 2 * pow(2,0)=> {
                 if (0 === 0 ) return 1;
             }
         }
     }
 }
*/

/*
function pow(a, b) {
    let res = 1;
    for (let i = b; i>0; i -= 1) {
        res *= a;
    }
    return res;
}

console.log(pow(2,3));*/

/*function faqt(a) {
    let res = 1;
    for (let i = 1; i<=a; i += 1) {
        res *= i;
    }
    return res;
}

console.log(faqt(1));*/

//--------------------------------------------faktorial
/*

const fakt = (a) => {
    if (a === 0) return 1;
    return a * fakt(a-1);
};
console.log(fakt(170));*/


//-----------------------------------------------task

/*
const rem = (a) => `size = ${parseFloat(a)/16}rem`;

console.log(rem('160px')); // 10rem
console.log(rem('16px')); // 1rem
console.log(rem('80px')); // 5rem
console.log(rem('8px')); // 0.5rem
*/

//----------------------------------------------task
/*

const prc = (a,b) => `prc = ${parseFloat(a)/parseFloat(b)*100}%`;

console.log(prc('160px','1600px')); // 10%
console.log(prc('16px','1600px')); // 1%
console.log(prc('80px','1600px')); // 5%
console.log(prc('8px','1600px')); // 0.5%
*/

//----------------------------------------------task

function convert(el, unit,cont=null) {
    switch (unit) {
        case 'rem':
            return `size = ${parseFloat(el) / 16}rem`;
        case 'prc':
            return `prc = ${parseFloat(el) / parseFloat(cont) * 100}%`;
        default:
            return 'Incorrect parammetr "unit"!'
    }
}

console.log(convert('100px','prc', '1000px'));
console.log(convert('320px','rem', '1000px'));
console.log(convert('100px','pic', '1000px'));