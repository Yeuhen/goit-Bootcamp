/*
let firstArray = [1, 2, 3];
let secondArray = new Array(5, 6, 7, 8);

console.log(firstArray);

let summer = ['Червень', 'Липень', 'Серпень',];
console.log(summer);

let emptyArray = [];*/
/*

let firstArray = [1, 2, 3, 4, 8, 5, 10, 7, 9];
console.log(firstArray[6]);
console.log(firstArray);

//елемент, це саме значення в масиві, а index, це його порядковий номер.

let arr = [1,2,3,4,[1,2,5,9,12,15,[23,24,124,2,[34.3,5,98,['Error']]]]];
console.log(arr[4][6][4][3][0]);*/

/*

let arr = [[1,2,3],[5,',','qwerty'],[2.5,5.6,'/']];

console.log(arr[1][1]);*/
/*

let firstArray = [1,2,3];

firstArray[1] = 100; //2 wil change to 100
firstArray[3] = 6;
firstArray[6] = 25;
console.log(firstArray);*/

//push, pop, shift, unshift
//push додається у кінці
// pop -
// shift -
// unshift -


/*
let firstArray = [1,2,3];
firstArray.push(10);
firstArray.push(12);
let arr = [5,6,7];
firstArray.push(arr);
console.log(firstArray);
*/

/*
let firstArray = [1,2,3];
let secondArray = [];
// let del = firstArray.pop(); //видаляє лише один елемент
secondArray.push(firstArray.pop());
// console.log(del);
console.log(firstArray);
console.log(secondArray);

*/
/*

// shift викидає елемент зпочатку
let firstArray = [1,2,3,4];
console.log(firstArray.shift());
console.log(firstArray);
*/

//unshift додає елемент зпочатку
/*

let firstArray = [1,2,3,4];
console.log(firstArray.unshift(27,7,8 ));
console.log(firstArray);
*/

/*
let firstArray = [1, 2, 3, 4];
let secondArr = [5, 6, 7];
let thirdArr = ['a', 'b', 'c'];
let first = firstArray.pop();
let second = secondArr.shift();
let third = thirdArr.pop();
let fourArr = [];
fourArr.push(first, third, second);
*/


//______________________________________________________________________length довжина масива

/*
let firsttArray = [5, 8, 13, 14];
console.log(firsttArray.length);
console.log(firsttArray[firsttArray.length - 1]);
*/

//_____________________________________________________________________indexOf

/*
let firstArray = ['abc', 'c', 'b', 'd', 'f', 'h', 'j', 'q'];
console.log(firstArray.indexOf('v'));
*/

//____________________________________________________________________includes
/*

let firstArray = ['abc', 'c', 'b', 'd', 'f', 'h', 'j', 'q'];
console.log(firstArray.includes('d'));
*/

//___________________________________________________________________reverse
/*

let firstArray = [10, 8, 7, 5];
let reverse = firstArray.reverse();
console.log(firstArray);

*/

//_____________________________________________________________________concat кілька масивів об'єднати в один
//завжди створює новий масив!!

/*
let firstArray = [10, 8, 7, 5];
let secondArray = [12, 13, 16, 19, 87];
let thirdArray = ['add me', 'join me'];
let result = firstArray.concat(secondArray, thirdArray);
console.log(result);
*/


//_________________________________________________________________ slice and splice
// slice робить копію = ctrl+C

/*
let arr = [5,10,12,15,25];
let newArr = arr.slice(2,3);
console.log(newArr);
*/

/*
//splite = ctrl+X -редагує існуючий
let arr = [1,5,9,8,7,10];
//delete
/!*let x = arr.splice(1,3);
console.log(arr);
console.log(x);*!/
//paste
arr.splice(1,3,25,46,98); //з якого, скільки вирізати, що вставити на це місце
console.log(arr);
console.log(arrDel);*/


/*
  Есть массив имен пользователей.
  В первом console.log вывести длину массива.

  В последующих console.log дополнить конструкцию
  так, чтобы в консоль вывелись указаные в комментариях
  элементы массива.
*/

/*
const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

console.log(users.length); // 4

console.log(users[1]); // Poly
console.log(users[3]); // Chelsey
console.log(users[0]); // Mango
console.log(users[2]); // Ajax

*/

//---------------------------
/* Есть массив имен пользователей */
/*

const users = ["Mango", "Poly", "Ajax", "Chelsey"];

/!* Используя методы массива, последовательно выполнить следующие операции *!/

// Удалить из начала массива нулевой элемент
let user
console.log(users.shift()); // ["Poly", "Ajax", "Chelsey"]
console.log(users);

// Удалить из конца массив последний элемент
console.log(users.pop()); // ["Poly", "Ajax"]
console.log(users);
// Добавить в начало массива любое имя

console.log(users.unshift('Nick')); // ["добавленое имя", "Poly", "Ajax"]
console.log(users);

// Добавить в конец массива два любых имени за одну операцию
console.log(users.push('Name_1', 'Name_2')); //  ["добавленое ранее имя", "Poly", "Ajax", "имя 1", "имя 2"]
console.log(users);
*/

//-------------------------------------
/*let animals = ["cat","dog","rabbit","bird","fish"];
//вивести в консоль випадкову тваринку з масиву
let i = Math.floor(Math.random() * animals.length);
let anm = animals[i];
console.log(`Cheat: ${anm}`);

let chose = prompt(`Введіть назву тварини зв списку ${animals}`);
if (chose === anm) {
    alert('You win');
} else {
    alert(`You lose, the "${anm}" was chose.`);
}*/
//----------------------------------------------

let loginArr = ['bob', 'mango', 'admin', 'batman', 'superuser'];

// 1) Запропонувати користувачу ввести логін
// 2) Якщо логін є в масиві повідомити юзера що такий логін існує
// 3) Якщо такого логіна немає привітати користувача з реєстрацією і додати його логін в масив loginArr
// 4) Після додавання логіна показати в консолі новий масив в якому буде і логін нашого користувача


let login = prompt('Enter you login for registration: ') ;
loginArr.includes(login) ? alert('Такий логін вже існує') : (alert('Thanks for registration'), loginArr.push(login));
console.log(loginArr);

//--------------------------------------------------------------


let word = prompt('Enter checking word');
((word.split('')).reverse()).join('') === word ? alert('The word is palindrom') : alert('The word isn\'t palindrom');



/*
let backward = forward.reverse();
console.log(backward.join(''));
console.log(forward.join('') === backward.join(''));
forward.join('') === backward.join('') ? alert('The word is palindrom') : alert('The word isn\'t palindrom');
*/
// console.log(forward);