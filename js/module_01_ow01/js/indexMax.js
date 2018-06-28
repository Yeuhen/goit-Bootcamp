let str = 'London is the capital of Greate Britain';
alert(str);
let arr1 = str.split(' ');
arr2 = [];
let maxTemp = 0;
console.log(arr1);


for(let element of arr1) {
    element.length >= maxTemp ? maxTemp = element.length : null;
}

for(let word of arr1) {
    word.length === maxTemp ? arr2.push(word) : null;
}

alert(`Слова з найбільшою кільк-ю букв: ${arr2}`);
alert(`Максимальна довжина слова: ${maxTemp}`);