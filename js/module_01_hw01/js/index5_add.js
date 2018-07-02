const scientist = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

// 1) отримати масив вчених що народилися в 19 ст
// 2) знайти суму років скільки прожили всі вченні
// 3) Відсортувати вчених по алфавіту
// 4) Відсортувати вчених по даті народження
// 5) Відсортувати вчених по кількості прожитих років
// 6) Видалити з масива вчених що родилися в 15 або 16 або 17 столітті
// 7) Знайти вченого який родився саме пізніше.
// 8) Знайти рік народження Albert Einstein
// 9) Знайти вчених прізвище яких починається на літеру С
// 10) Видалити з масива всіх вчених імя яких починається на A

//-------------------------TASK 1----------------------------------

// const getNameBornAfter = (scientist, sen) => scientist.filter(elem => elem['year']  / 100 >= (sen - 1));
//
// console.log(getNameBornAfter(scientist, 19));

//-------------------------TASK 2----------------------------------
//
// const getSummLivedYears = scientist => scientist.reduce((acc, elem) => acc += (elem['passed'] - elem['year']),0);
//
// console.log(getSummLivedYears(scientist));
//
//
// //-------------------------TASK 3----------------------------------
// const sortByName = scientist => scientist.sort( (elem1,elem2) => elem1['last'] > elem2['last'] ? 1 : -1);
//
// console.log(sortByName(scientist));
// //-------------------------TASK 4----------------------------------
//
// const sortByYear = (scientist) => scientist.sort((elem1, elem2) => elem1['year'] - elem2['year']);
//
// console.log(sortByYear(scientist));
// //-------------------------TASK 5----------------------------------
//
// const sortByLived = (scientist) => scientist.sort((elem1, elem2) => (elem1['passed'] - elem1['year']) > (elem2['passed']-elem2['year'])? 1: -1);
//
// console.log(sortByLived(scientist));
//
// //-------------------------TASK 6----------------------------------
//
// const getRemScientists = (scientist,from,to) => scientist.filter(elem => (elem['year']/100 > (from - 1) && elem['year']/100 < (to)));
//
//
// console.log(getRemScientists(scientist,15,17))
// //-------------------------TASK 7----------------------------------
//
// const getLastBornMan = (scientist) => scientist.sort((elem1,elem2) => elem1['year'] > elem2['year'] ? -1 : 1)[0];
//
// console.log(getLastBornMan(scientist));

//-------------------------TASK 8----------------------------------

//
// const getBornYear = (scientist, name) => scientist.find(elem => elem['last'] === name)['year'];
//
// console.log(getBornYear(scientist, 'Einstein'));

//-------------------------TASK 9----------------------------------


// const getNameBeginFrom = (scientist, begin) => scientist.filter(elem => elem['last'][0] === begin);
//
// console.log(getNameBeginFrom(scientist, 'C'));


//-------------------------TASK 10---------------------------------


// const remNameBeginFrom
// const remNameBeginFrom = (scientist, begin) => scientist.filter(elem => elem['first'][0] != begin);
//
// console.log(remNameBeginFrom(scientist, 'A'));

//-------------------------TASK 2_1---------------------------------

/*
  Создайте функцию isObjectEmpty(obj), которая получает
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).

  Возвращает true если объект пустой, false если не пустой.
*/
//
// const isObjectEmpty = (obj) => Object.keys(obj).length === 0;
//
// // Вызовы функции для проверки
// console.log(
//     isObjectEmpty({})
// ); // true
//
// console.log(
//     isObjectEmpty({a: 1})
// ); // false
//
// console.log(
//     isObjectEmpty({a: 1, b: 2})
// ); // false

//-------------------------TASK 2_2---------------------------------


/*
  Напишите функцию countTotalSalary(salaries),
  получающую объект и считающую общую сумму запрплаты работников.

  Каждое поле объекта передаваемого в функцию, имеет вид "имя":"зарплата"

  Функция возвращает общую сумму зарплаты.
// */
//
// const countTotalSalary = (salaries) => Object.values(salaries).reduce((acc,elem) => acc += elem , 0);
//
// // Вызовы функции для проверки
// console.log(
//     countTotalSalary({})
// ); // 0
//
// console.log(
//     countTotalSalary({
//         mango: 100,
//         poly: 150,
//         alfred: 80
//     })
// ); // 330

//-------------------------TASK 2_3---------------------------------

/*
  Напишите функцию getAllPropValues(arr, prop),
  которая получает массив объектов и имя ключа,
  возвращает массив значений определенного поля prop
  из каждого объекта в массиве
*/
//
// const users = [
//     { name: 'Poly', age: 7, mood: 'happy' },
//     { name: 'Mango', age: 4, mood: 'blissful'},
//     { name: 'Ajax', age: 3, mood: 'tired' }
// ];
//
// // const getAllPropValues = (arr, prop) => (Object.keys(arr[0])).includes(prop)? arr.map(el => el[prop]):[];
//
// const getAllPropValues = (arr, prop) => arr[0].hasOwnProperty(prop)? arr.map(el => el[prop]):[];
//
//
// // Вызовы функции для проверки
// console.log(
//     getAllPropValues(users, 'name')
// ); // ['Poly', 'Mango', 'Ajax']
//
// console.log(
//     getAllPropValues(users, 'mood')
// ); // ['happy', 'blissful', 'tired']
//
// console.log(
//     getAllPropValues(users, 'active')
// ); // []

//-------------------------TASK 2_4---------------------------------

// Написати функцію що видає фінальний результат в гольфі
// function golfScore(par, strokes) приймає 2 аргумента
// par - кількість ударів що дозволено, strokes - реальна кількість ударів
// Потрібно порівняти strokes з такими критеріями
// 1 дасть "Hole-in-one!"
// strokes <= par -2 дасть "Eagle"
// strokes == par -1 дасть "Birdie"
// strokes == par дасть "Par"
// strokes == par +1 дасть "Bogey"
// strokes == par +2 дасть "Double Bogey"
// Все інше "Go Home!"


// let golfScore = (par, strokes) => {
//         switch (true) {
//             case (strokes === 1):
//                 return "Hole-in-one!";
//             case strokes-par <= -2:
//                 return "Eagle";
//             case strokes-par === -1:
//                 return "Birdie";
//             case strokes-par === 0:
//                 return "Par";
//             case strokes-par === 1:
//                 return "Bogey";
//             case strokes-par >= 2:
//                 return "Double Bogey";
//             default:
//                 return "Go Home!";
//         }
// };
// // Перевірка
// console.log(golfScore(4, 7)); // "Go Home!"
// console.log(golfScore(2, 1)); //"Hole-in-one!"
// console.log(golfScore(5, 4)); //"Birdie"


//-------------------------TASK 2_4---------------------------------
/*

Написати об'єкт tank який буде мати такі властивості і методи.
1) coordinate 10 координати Х
2)CoordinateY 10 координати по У
3) life 100 здоровя
4) ammunition 5  кількість патронів
5) engineStatus true статус двигуна
6) moveToX(x) рухається до точки х
6) moveToY(у) рухається до точки у
7) fireTo(x, y) стріляє в точку х, у
8) canFire() перевірка чи є патрони
9) checkHealth() перевірка чи є неповне здоров'я
10) heal(x) додає здоровя
11) checkEngine() перевірка статусу двигуна
12) repairEngine() починка двигуна
13) showCoordinate() показує координати танка
14)  name імя гравця
15) color

*/

