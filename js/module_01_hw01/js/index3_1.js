
let fromConvert = prompt('Вкажіть валюту для конвертації(USD,EUR,UAH):').toUpperCase();
let toConvert = prompt('Вкажіть валюту, яку бажаєте отримати(USD,EUR,UAH):').toUpperCase();
let summConvert = prompt('Яку сумму Ви бажаєте конвертувати?');

function currencyVariables() {
    let usdToUah = 26.2389;
    let eurToUsd = 1.1648;
    let eurToUah = 30.5631;
    let usdToEur = 1/eurToUsd;
    let uahToUsd = 1/usdToUah;
    let uahToEur = 1/eurToUah;

    function currencyExchange(fromConvert,toConvert,summConvert) {
        switch (fromConvert + toConvert) {
            case 'USDUAH':
                return `${(parseInt(summConvert)*usdToUah).toFixed(2)},${toConvert}`;
            case 'EURUSD':
                return `${(parseInt(summConvert)*eurToUsd).toFixed(2)},${toConvert}`;
            case 'EURUAH':
                return `${(parseInt(summConvert)*eurToUah).toFixed(2)},${toConvert}`;
            case 'USDEUR':
                return `${(parseInt(summConvert)*usdToEur).toFixed(2)},${toConvert}`;
            case 'UAHUSD':
                return `${(parseInt(summConvert)*uahToUsd).toFixed(2)},${toConvert}`;
            case 'UAHEUR':
                return `${(parseInt(summConvert)*uahToEur).toFixed(2)},${toConvert}`;
            default:
                return 0;
        }
    }
    return currencyExchange;
}

let converter = currencyVariables();

if (parseFloat(summConvert)>0 && (parseInt(summConvert)-parseFloat(summConvert)===0 && converter(fromConvert, toConvert, summConvert) != false)) {
    alert(`Після конвертації ви отримаєте ${converter(fromConvert, toConvert, summConvert)}`);
} else if(converter(fromConvert, toConvert, summConvert) != false) {
    alert(`Вкажіть будь ласка, цілу, додатню сумму: ${summConvert}`);
} else {
    alert (`Конвертація цих валют поки не можлива: з ${fromConvert} в ${toConvert}`);
}



// Написати функцію яка питає користувача яку валюту він має і в яку хоче перевести
// вказує суму і на основі курса виводиться готова сума.
// UAH, EUR, USD
// 1)Запит яку валюту має
// 2)Запит в яку валюту хоче перевести
// 3)Запит яка сума для конвертації
// 4) В замиканні зберегти 6 курсів валют
// 5) 6 перевірок в залежності від валют виводити кінцпеву суму
// 6) Перетворити введену валюту до єдиного формату
// 7) Перевірка на ціле і додатнє число.
//8 ) alert вивести суму яку він отримає.