'use strict';


//-----------------------------task 1-------------------------
/*
  Напишите скрипт который реализует следующий функционал.

  Есть кнопка с классом button, текст которой отображает
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/

// const button = document.querySelector('.button');
//
// button.addEventListener('click', function () {
//     button.textContent ++
// });

//-----------------------------task 2-------------------------

/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку
  получите числа стоящие в инпутах и запишите их сумму в абзац.
*/

// const calc = document.querySelector('.calc');
// const btn = document.querySelector('button');
// const result = document.querySelector('.result');
// const firstBtn = document.querySelector('#firstBtn');
// const secondBtn = document.querySelector('#secondBtn');
//
// function summ() {
//     console.log(firstBtn);
//     result.textContent = (+firstBtn.value) + (+secondBtn.value)
// }
// btn.addEventListener('click', summ);
//

//-----------------------------task 3-------------------------

/*
  Дан спан и кнопки +1, -1, которые будут увеличивать
  и уменьшать на 1 значение спана. Сделайте так, чтобы
  это значение не могло стать меньше нуля.
*/

// const subBtn = document.querySelector('.js-sub');
// const addBtn = document.querySelector('.js-add');
// const value = document.querySelector('.js-value');
//
// function add() {
//     value.textContent ++;
// }
//
// function sub() {
//     value.textContent >0 ? value.textContent -- : alert('You can\'t set value less than zero!');
// }
//
// subBtn.addEventListener('click',sub);
// addBtn.addEventListener('click', add);

//-----------------------------task 4-------------------------


/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа,
  после чего нажимает кнопку "Send" и происходит отправка формы.

  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в абзац с классом .result
*/



const options = document.querySelector('.options');
const btn = document.querySelector('.btn');

function showChecked() {
    for (el of options) {
        let radioArr = options.checked;
        console.log(radioArr);
    }

}




btn.addEventListener('click', showChecked);

console.log(options);

//
//prevent defoult
// <script>
// function check() {
//     document.getElementById("red").checked = true;
// }
// function uncheck() {
//     document.getElementById("red").checked = false;
// }