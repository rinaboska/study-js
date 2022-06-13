"use strict";
const answers = [];
//заполняем массив 
//answers[0] = prompt('Как ваши дела?', '');
//answers[1] = prompt('Ваш возраст?', '');
//answers[2] = prompt('Ваше имя?', '');

//document.write(answers);
console.log(typeof(answers));

//Интерполяция
const category = 'toys';
console.log(`https://someurl.com/${category}/5`);
//
//const user = "ivan";
//alert(`Privet, ${user}`);

//Операторы
const isCheck = true,
      isClose = true;
      
//Если оба подопечные правдивые,то сработает правильно
//Оператор и  &&
console.log(isCheck && isClose);
console.log(2*4 !==8);//false

console.log(Math.ceil(.7));
let greeting = "Welcome to my blog," + " " +namet;
console.log(greeting);
console.log('2' + 5);

//
var myvar = "my value"; 
(function() { 
    var myvar = "local value";
    console.log(myvar);     
})
();
// Определение функции
foo();
function foo() {
  console.log("mar");
}
//--------------Так не правильно!!!!
baz(); // TypeError: baz is not a function
var baz = function() {
  console.log("bar2");
};
//-----------------------------
let Sales = "Toyota"; 
function CarTypes(name) { 
    if (name == "Honda") { return name; } 
    else { return "Извините, мы не продаём " + name + "."; } 
}
var car = { 
    myCar: "Saturn", 
    getCar: CarTypes("Honda"), 
    special: Sales }; 
    console.log(car.myCar); // Saturn console.log(car.getCar); // Honda console.log(car.special); 
console.log(1 + 2 == 2 && 10 * 10 > 50);
