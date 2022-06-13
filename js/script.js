/*  let переменная
    const    устойчивая */
"use strict";
/*  Home work-----------------------------
const storeName = 'sinsay';
const storeDescription = {
    budget: 10000,
    employees: ['ira', 'vasya', 'kolya'],
    products: {
        cloth: 20,
        price: 500
    },
    open: true
}
*/


//------------------Operations/ 
//let x;
//x = 5 + 8;
//console.log(`result: ${x}`);

//Возведение в степень
//let x;
//х = 5 ** 3;
//console.log(`result: ${x}`);//

//Обєкт
let userInfo = {
    
    "likes javascript": true,
};
console.log(userInfo);
console.log(userInfo.name);
console.log(userInfo["likes javascript"]);



//Вычисляем имя 
let firstPart = "likes";
let userInfo = {
    name: "Ira",
    age: 30,
    color: "blue",
    [firstPart + " javascript"]: true,
    [firstPart]: true,
    
};
console.log(userInfo["likes javascript"]);
// или
console.log(userInfo[firstPart]);

//Пример 2
let key ="name";
console.log(userInfo[key]);
let vue = "color";
console.log(userInfo[vue]);

//Вложенность
let userInfo ={
    name: "Ira",
    age: 30,
    work: "IT",
    adress: {
        city: "Kyiv",
        street: "Zoloti Vorota",
    }
};
console.log(userInfo);
console.log(userInfo.adress);
console.log(userInfo.adress.city);

//Получение свойства из переменой

function makeUserInfo(name, age){
    return{
        name: name,
        age: age,
        ////others
    };
}
let user = makeUserInfo("Ira", 30);
console.log(user);

//Добавление свойств
let userInfo = {
    name: "Ira",
}
console.log(userInfo);

userInfo.age = 30;
console.log(userInfo);

userInfo['likes javascript'] = true;
console.log(userInfo);

userInfo.adress ={
    city: "Kyiv",
    street: "Zoloti Vorota",
}
console.log(userInfo);
//Удаление  свойства

let userInfo = {
    name: "Ira",
    age: 30,
    "likes javascript": true
}
console.log(userInfo);

delete userInfo.age;
console.log(userInfo);

delete userInfo["likes javascript"];
console.log(userInfo);


//Изменения свойства
let userInfo = {
    name: "Ira",
    age: 30,
}
console.log(userInfo);
userInfo.age = 18;
console.log(userInfo);

//Копирование обьектов
let userInfo = {
    name: "Ira",
    age: 30,
}
console.log(userInfo);

let user = userInfo;
console.log(user);

user.age = 18;
console.log(userInfo.age);

//Дублирование обьектов
//Синтаксис
Object.assign(куда(обьект), что(свойство №1), что(свойство №2), ...);
//example

let userInfo = {
    name: "Ira",
    age: 30,
}
let user = Object.assign({}, userInfo);

user.age = 18;

console.log(userInfo);
console.log(user);

/////////
let userInfo = {
    name: "Ira",
    age: 30,
}
Object.assign(userInfo, {["likes javascrpt"]: true, city: "Kyiv"});
console.log(userInfo);

//1 Проверка с помощью if
let userInfo = {
    name: "Ira",
    //age: 30,
}
//console.log(userInfo);
if(userInfo.age){//true or false
    console.log(userInfo.age);
};
//Вариант 2 Проверка
let userInfo = {
    name: "Ira",
    age: 30,
    //address: {
      //  city: "Kyiv",
      //  street: "Zoloti Vorota",
    //}
}
//console.log(userInfo.address.city);  дальше опциональная цепочка, проверка наличий даного свойства
console.log(userInfo?.address?.city);

//оператор In   .....Проверка свойства внутри обьекта
let userInfo = {
    name: "Ira",
    age: 30,
    address: {
        city: "Kyiv",
        street: "Zoloti Vorota",
    }
}
if("name" in userInfo) {
    console.log(userInfo.name);
}
//Оператор In используется когда свойство существует 
//но содержит значение underfined;
let userInfo = {
   name: undefined,
   //...следующие свойства 
}
/*if (userInfo.name) {  //false
    console.log(userInfo.name);
}
*/ 
if ("name" in userInfo) {
    console.log(userInfo.name);
}


//Цикл for in.....используется для перебора всех свойств обьекта 
for (let key in object) {
    //тело цикла выполняет для каждого свойства обьекта
}
//....Пример
let userInfo = {
    name: "Ira",
    age: 30,
    address: {
        city: "Kyiv",
        street: "Zoloti Vorota",
    }
}

for (let key in userInfo) {
    //ключи  - имена свойств
    console.log(key);   //name, age ,address...
    //Значения ключей
    console.log(userInfo[key]);  //Ira, 30, Object....
}
//Конкретные свойства
for (let key in userInfo.address) {
    console.log(key); // city, street...
    //значения ключей
    console.log(userInfo.address[key]);
}

//Методы обьекта...........
let userInfo = {
    name: "Ira",
    age: 30,
    address: {
        city: "Kyiv",
        street: "Zoloti Vorota",
    },//внутри значения функция, которая собирает в строку определенные значения обьекта
    showInfo() {
        console.log(`${userInfo.name}, ${userInfo.age}  `);
    }

}
userInfo.showInfo();

//Использование this...им можно заменить текущий обьект...
let userInfo = {
    name: "Ira",
    age: 30,
    address: {
        city: "Kyiv",
        street: "Zoloti Vorota",
    },
    showInfo() {
        //console.log(`${userInfo.name}, ${userInfo.age}  `);  вместо этой записи ниже
        console.log(`${this.name}`);//, ${this.age}, лет. Адрес: г. ${this.address}`);
    }
}
userInfo.showInfo();

//........Если создать новую переменную, обнулить и туда перенести все значения, то с this все работает!!
let user = userInfo;
userInfo = null;
user.showInfo();
///..........Получается привязка к конкретному обьекту, а не к переменной

////дз
let userInfo = {
    name: "Вася",
    age: 30,
    address: {
        city: "Kyiv"
    }
    //"58": 'Значение свойств'
}//выводим конкретно город
for (const key in userInfo.address) {
    console.log(userInfo.address[key]);
}
//Выводим все свойства
for (const key in userInfo) {
    const value = userInfo[key];
    console.log(value);
}
//console.log(userInfo[58]);
let userInfo = {
    name: "Ira",
    age: 30
}
//console.log(userInfo.name);
userInfo.name = "Лена";
console.log(userInfo.name);
delete userInfo.name;
console.log(userInfo.name);


//Операторы
let x;
//взятие остатка от деления %
x = 11 % 3;
console.log(`Результат взятие остатка от деления: ${x} `);
//Проверка: 11=3*3(неполное частное от деления)+2(остаток)

//Возвеление в степень **
x = 5 ** 3;
console.log(`Результат взятие остатка от деления: ${x} `);

//--------------------------------------------------
//Применение оператора сложения к строкам
let resultOne = "Tubus" + "po" + "life" ;
console.log(resultOne);

//если даже с цифрой то тоже будет строка
let resultTwo = "Tubus" + 58;
console.log(resultTwo);
console.log(typeof(resultTwo));

//Казусы
let resultThree = 2 + "2";
console.log(resultThree);//// = 22!
//
//Работа других операторов
let forOne = "25" - 5;
console.log(forOne);
console.log(typeof(forOne));
//
let = forTwo = 10 * "80";
console.log(forTwo);

//недопустимая операция
let forThree = 3 * "Fritaken";
console.log(forThree);// Nan
console.log(typeof(forThree));

//унарный оператор сложения
let users = "25";
let admins = "10";
console.log(users + admins); // 2510

console.log(+users + +admins); //35
//или длиннее запись
console.log(Number(users) + Number(admins));

//Расположение операторов  Примеры
//Постфиксная форма - 
let usersCounter = 0;
let newUsers = usersCounter++;
console.log(newUsers);// 0 , ПОТОМУ ЧТО ВЫДАЕТ НАЧАЛЬНОЕ ЗНАЧЕНИЕ

//Префиксная
let usersCounter = 0;
let newUsers = ++usersCounter;
console.log(newUsers);

//Еще пример
let usersCounter = 0;
++usersCounter;
let newUsers = 2 * usersCounter;
console.log(newUsers);
///2
console.log(2*4 = 8);

//оПЕРАТОРЫ сравнения, результатом true or false
console.log(4 == 3);// false
console.log(2 > 1); //true

// Оператор ИЛИ ||
//Если в выражении есть true он вернет его, но если оба будут false,выдаст false
console.log(true || true); //true
console.log(false || true); //true
console.log(true || false);//true
console.log(false || false);//false

//Примеры:
//Первый true 1
console.log(1 || 0);//1  
//Первый true это true
console.log(true || 'Ira');//true
//Первый true это 58
console.log(null || 58);//58
//Первый true это Ira
console.log(null || 'Ira' || 0); // ira
//true нет совсем, вернет последнее значение - 0
console.log(undefined || '' || null || 0);//0
console.log(Boolean(10 > 9));

//Оператор ?
console.log(true ? 1 : 2);
// → 1   выбирает первое значение
console.log(false ? 1 : 2);
// → 2  выбирает второе значение

console.log(typeof("5" - 1));
// → 4
console.log(typeof("5" + 1));
console.log(null == 0);
age = Number(age);
if (isNaN(age)) {
  voteable = "Input is not a number";
} else {
  voteable = (age < 18) ? "Too young" : "Old enough";
}
const example = prompt("How are you", "");
console.log(example);


//Условия
let message = "Hi Ira";
if (2 > 5) {
    console.log(message);
}
