'use strict';

const name = document.getElementById('mail');
const pass = document.querySelector('#pass');
const btn = document.querySelector("[type = submit");



btn.addEventListener('click', checkData);

function checkData(){
    let mailPattern = /^([a-z]|[0-9]){5,}\@([a-z]|[0-9]){1,}(.com|.net|.ua)$/i;
    let passPattern = /^$/;
    name.value.test

    console.log(name.value);
    console.log(pass);
}



// mail .com .net .ua
// pass  хоча б одна велика
// pass хоча б одна цифра

// $(document).ready(function() {
//     $('#signupur-login').on('input', function() {
//         if ($(this).val() != '') {
//             var pattern = /^[a-z0-9]+$/i;
//             if (pattern.test($(this).val())) {
//                 $(this).css({
//                     'border': '1px solid #ebebeb'
//                 });
//                 $('#valid').text('');
//             } else {
//                 $(this).css({
//                     'border': '1px solid #ff0000'
//                 });
//                 $('#valid').text('Только латинские символы и цифры');
//             }
//         } else {
//             $(this).css({
//                 'border': '1px solid #ff0000'
//             });
//             $('#valid').text('Поле не должно быть пустым');
//         }
//     });
// });