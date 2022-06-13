"use strict";

let userOnly = prompt("How are you");
console.log(userOnly);

//условия
if (4 == 4) {//if 1 always true
    console.log('Ok');
} else {
    console.log('Error');
}
const num = 101;
if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Error');
} else {
    console.log('Ok');
}

//Тернарный аргумент
(num === 50) ? console.log('Ok') : console.log('Error');//три оператора === , ?, :.....

//строгое сравнение используется switch
const num = 51; 
switch (num) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 50:
        console.log('Норм');
        break;
    default: 
    console.log('Не в этот раз');
        break;
}