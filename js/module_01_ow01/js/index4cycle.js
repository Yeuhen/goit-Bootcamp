//---------------------------loop

//---------------------------while


//лічильник+перевірка(умова)+тіло циклу
//ітерація-один прохід циклу
/*
let number = 3;
let arr = [];

while (number >= 1) {
    let result = +prompt('Enter number');
    arr.push(result);
    number--;
}*/

/*
let count = 0;
let arr = [];
let number = null;

while (count < 10) {
    let number = Math.floor(Math.random()*100);
    arr.push (number);
    count++;
}

console.log(arr);
*/

//------------------------------do while (перевірка після виконання тіла)


/*
let condition = 1;

do {
    console.log('done');
    condition++;
}

while(condition > 5);
*/

//-----------------------------for

/*

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

*/
/*

let arr = [5, 10, 25, 68, 78, 95];
for (let i = 0, max = arr.length; i < max; i++) {
    console.log(arr[i]);
}
*/

//-------------------------
/*

let arr = [5, 10, 25, 68, 78, 95];

for (let i = 0, max = arr.length; i < max; i++) {
    arr[i] = Math.pow(arr[i],2);
    console.log(arr[i]);
}
console.log(arr);
*/

//--------------------------

/*

let count = +prompt('Скільки товарів ви плануєти придбати?');
let arr = [];
if (!isNaN(count) && Number.isInteger(count) && count>0) {
    for (i = 0; i < count; i++) {
        arr.push(prompt('Введи назву продукту:'));
    }
    console.log(`Ви обрали такі продукти: ${arr}`);
} else {
    alert('Ви маєте ввести ціле число!');
}*/


//------------------------------ for of

//before

/*
let arr = [5, 10, 25, 68, 78, 95];
for (let i = 0, max = arr.length; i < max; i++) {
    console.log(arr[i]);
}
*/
/*

//after
let arr = [5, 10, 25, 68, 78, 95];
for(let element of arr) {
    console.log(element*2);
}
*/

//---------------------------------breake, continue

//break - обриває цикл негайно
//continue - прериваю лише цю ітерацію
/*

for (let i = 1; i <=10; i++){
    if (i === 6) {
        break;
    }
    console.log(i);
}
*/

/*

for (let i = 1; i <=10; i++){
    if (i === 3) {
        continue;
    }
    console.log(i);
}*/

// вивести лише парні
/*
for(let i = 0; i <=10 ; i++)
    if(i % 2 !== 0) {
    continue
    }
    console.log(i)
}
*/
/*
let number = 0;
do{
   number = prompt('Ведіть число більше 100:');
} while (number <= 100 && number !== null);
alert(`Ви ввели число: ${number}`);*/


/*
let students = ['Stupak', 'Yurchenko', 'Tabanyk', 'Baranov', 'Didenko', 'Chuprun', 'Babenko', 'Mukanovskyi', 'Plaski',
    'Sokolov', 'Galatuk', 'Savin', 'Grygorchuk','Krasnoiarov',
    'Rotman', 'Scryagin', 'Humenchuk'];
alert(`До дошки йде: ${students[Math.floor(Math.random()*students.length)]}`);
*/
/*

Напишите скрипт, который выводит через console.log все
числа от min до max, с двумя исключениями:

    - Для чисел, нацело делящихся на 3, вместо числа выводится строка 'Fizz'

- Для чисел, нацело делящихся на 5, но не на 3, вместо числа выводится строка 'Buzz'

PS: используйте цикл for
*/
/*
const min = 1;
const max = 100;

for (i = min; i<= max; i++) {
    if(i % 3 === 0) {
        console.log('Fizz');
    } else if(i % 5 === 0){
        console.log('Bizz');
    } else {
        console.log(i);
    }
}
*/

/*
  Напишите скрипт, который выбирает из массива numbers
  все числа, которые больше чем значение переменной num,
  записывая эти числа в массив newArray.

  В результате в массиве newArray будут все подходяшие числа.

  PS: используйте цикл for или for...of и оператор ветвления if
*/

/*
const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
const num = 10;
const newArray = [];

for (let points of numbers){
    points > num ? newArray.push(points) : null;
}
console.log(numbers);
console.log(newArray);
*/


//-------------------

/*
  Напишите скрипт, который проверяет произвольную строку
  в переменной string и находит в ней самое длинное слово,
  записывая его в переменную longestWord.
*/
/*

const string = "May the force be with you";
let longestWord;

console.log(longestWord); // 'force'
*/


const string = 'May the force be with you';

let longestWord = '';
let wordArr =string

//......


//-------------------------------------------------------

/*
  Напишите скрипт который:

  - Запрашивает по очереди числа при помощи prompt и сохраняет их в массиве.
    Используйте do...while.

  - Заканчивает запрашивать числа, как только посетитель введёт не число
    или нажмёт Cancel. При этом ноль 0 не должен заканчивать ввод,
    это разрешённое число.

  - После того как ввод был завершен, если массив не пустой,
    скрипт выводит сумму всех значений массива: "Сумма: <сумма всех значений в массиве>"
    Используйте цикл for...of
*/


//--------------------------------------------Стрілочна функція

/*
function sum(a,b) {
    return a + b;
}
// ---- в стрелочной ф-іі це виглядатиме:

let sum = (a,b) => {return a + b};

let sum = (a, b) => a + b; // неявне повернення
*/
//--------------------------------------------------------------task
/*
  Написать функцию, getPx(str)

  Функция getPx должна получать строку вида '10px',
  проверять была ли передана строка, если да,
  возвращать только числовую составляющую, к примеру 10.

  Если была передана не строка, функция возвращает null.
*/

// Вызовы функции для проверки
console.log( getPx("10px") === 10 ); // должно быть:  true
console.log( getPx("10.5") === 10.5 ); // должно быть:  true
console.log( getPx("0") === 0 ); // должно быть:  true
console.log( getPx(-1) ); // должно быть:  null
console.log( getPx(10) ); // должно быть:  null


let getPx = (str) => {return (typeof str == string ? parseFloat(str) : null)};