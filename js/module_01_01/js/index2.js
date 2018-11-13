let sharm = 15;
let hurgada = 25;
let taba = 6;
let goodbye = 'Нам дуже прикро, приходьте ще!';
let apologize = 'Вибачте, але такої кількості вільних місць немає в жодній групі';
let error = 'Помилкове значення!';
// let groupName;
let propose = `Наявна кількість місць є у групі ${groupName}, чи бажаєте приєднатися доцієї групи?`;

let reservePlaces = prompt('Вкажіть необхідну кількість місць для резерву');

if ( !isNaN(reservePlaces) && Number.isInteger(+reservePlaces) && +reservePlaces > 0 ) {
    switch (true) {
        case (reservePlaces <= taba):
            let groupName = 'taba';
            if (confirm(propose)) {
                alert('Приємної подорожі з групою "taba"!');
            } else {
                alert(goodbye);
            }
            break;
        case (reservePlaces <= sharm):
            groupName = 'sharm';
            if (confirm(propose)) {
                alert('Приємної подорожі з групою "sharm"!');
            } else {
                alert(goodbye);
            }
            break;
        case(reservePlaces <= hurgada):
            groupName = 'hurgada';
            if (confirm(propose)) {
                alert('Приємної подорожі з групою "hurgada"!');
            } else {
                alert(goodbye);
            }
            break;
        default:
            alert(apologize);
            break;
    }
} else{
    alert(error);
}



/*
  ⚠️ ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ

  Создайте скрипт турагенства, продающего поездки в 3-х группах: sharm, hurgada и taba.
  Кол-во мест в группах ограничено (создайте переменные для хранения мест в группах):
    * sharm - 15
    * hurgada - 25
    * taba - 6.
  Когда пользователь посещает страницу, ему необходимо предложить ввести число необходимых мест,
  результат сохранить в переменную.
  Необходимо проверить являются ли введенные данные целым положительным числом.

    - В случае неверного ввода от пользователя, скрипт показывает alert с текстом
      "Ошибка ввода" и больше ничего не делает.
    - В случае верного ввода, последовательно проверить кол-во мест в группах,
      и кол-во необходимых мест введенных пользователем.
  Если была найдена группа в которой количество мест больше либо равно необходимому,
  вывести сообщение через confirm, что есть место в группе такой-то, согласен ли
  пользоваетель быть в этой группе?
    * Если ответ да, показать alert с текстом 'Приятного путешествия в группе <имя группы>'
    * Если ответ нет, показать alert с текстом 'Нам очень жаль, приходите еще!'

  Если мест нигде нет, показать alert с сообщением 'Извините, столько мест нет ни в одной группе!'
*/

/*

let sharm = 15;
let hurgada = 25;
let taba = 6;
let goodbye = 'Нам дуже прикро, приходьте ще!';
let apologize = 'Вибачте, але такої кількості вільних місць немає в жодній групі';
let error = 'Помилкове значення!';

let reservePlaces = prompt('Вкажіть необхідну кількість місць для резерву');

if ( !isNaN(reservePlaces) && Number.isInteger(+reservePlaces) && +reservePlaces > 0 ) {
    switch (true) {
        case (reservePlaces <= taba):
            if (window.confirm('Наявна кількість місць є у групі "taba", чи бажаєте приєднатися доцієї групи?')) {
                alert('Приємної подорожі з групою "taba"!');
            } else {
                alert(goodbye);
            }
            break;
        case (reservePlaces <= sharm):
            if (window.confirm('Наявна кількість місць є у групі "sharm", чи бажаєте приєднатися доцієї групи?')) {
                alert('Приємної подорожі з групою "sharm"!');
            } else {
                alert(goodbye);
            }
            break;
        case(reservePlaces <= hurgada):
            if (window.confirm('Наявна кількість місць є у групі "hurgada", чи бажаєте приєднатися доцієї групи?')) {
                alert('Приємної подорожі з групою "hurgada"!');
            } else {
                alert(goodbye);
            }
            break;
        default:
            alert(apologize);
            break;
    }
} else{
    alert(error);
}*/