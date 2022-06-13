"use strict";
//Условия
let massage = "Hi, Ira";
let number = 4;
if (number > 1) {
    console.log(massage);
} else {
    console.log('Not right');
}
let message = "Hi";
let messageEnd = (2 > 5) ? ", Ira" : ", bro";
message += messageEnd;
console.log(message);

if (1 === "1") {
    console.log('истина');
}
let answear = 50;
switch (answear) {
    case 49:
        console.log('Wrong');
        break;
    case 100:
        console.log("Hello");
        break;
    case 50:
        console.log("Верно");
        break;
}
