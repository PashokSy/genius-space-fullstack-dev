'use strict';
const pseudoConsole = document.querySelector('.console');
const println = function (num, data) {
  pseudoConsole.insertAdjacentHTML('beforeend', `<p> ${num}: ${data} </p>`);
};

//***1***
// Робота зі змінними
// Оголосіть дві змінні: name та city.
// Присвойте значення "Іван" змінній name.
// Скопіюйте значення зі змінної name в city.
// Виведіть значення змінної city, використовуючи функцію console.log (яка повинна показати “Іван”).
//
let name, city;
city = name = 'Іван';
console.log(city);
println(1, city);

//***2***
//Який буде результат виконання скрипта?
// let name = "Olga";
// console.log(`привіт ${1}`); // привіт 1
// console.log(`привіт ${"name"}`); // привіт name
// console.log(`привіт ${name}`); // привіт Olga
//
name = 'Olga';
console.log(`привіт ${1}`); // привіт 1
println(2.1, `привіт ${1}`);
console.log(`привіт ${'name'}`); // привіт name
println(2.2, `привіт ${'name'}`);
console.log(`привіт ${name}`); // привіт Olga
println(2.3, `привіт ${name}`);

//***3***
//Видобути число зі змінних
// let a = "5";
// let b = "13cvb";
// let c = "12.9sxdcfgv";
// вивести в консоль тип
//
let a = '5';
let b = '13cvb';
let c = '12.9sxdcfgv';
const aNum = Number(a);
println(3.1, aNum);
println(3.1, typeof aNum);
let bNum = b.slice(0, 2);
bNum = Number(bNum);
println(3.2, bNum);
println(3.2, typeof bNum);
let cNum = c.slice(0, 4);
cNum = Number(cNum);
println(3.2, cNum);
println(3.2, typeof cNum);

//***4***
//Зробіть, щоб 0.1 + 0.2 = 0.3
//
println(4, (0.1 + 0.2).toFixed(1));

//***5**
//Поверніть найбільше число с набору 20, 10, 50, 40
//
println(5, Math.max(20, 10, 50, 40));

//***6**
//Поверніть випадкове число в діапазоні від 2 до 4
//
println(6, Math.floor(Math.random() * 3) + 2);

//***7**
//дізнатись довжину message
// const message = "Welcome to Bahamas!";
//
const message = 'Welcome to Bahamas!';
println(7, message.length);

//***8**
//вивести в консоль message  великими літерами
//
println(8, message.toUpperCase());

//***9**
// створити пустий об*єкт
// додати туди ім*я, вік і місто
// вивести результат в консоль
// видалити місто
// додати буль з ключем: like flowers
// вивести результат в консоль
//
const object = {};
object.name = 'Pavlo';
object.age = 28;
object.city = 'Kyiv';
console.log(object);
println(9.1, JSON.stringify(object));
delete object.city;
object.likeFlowers = true;
console.log(object);
println(9.2, JSON.stringify(object));

//***10**
// За допомогою циклу  “for…in” вивести в консоль ключі і значення об*єкта
for (let key in object) println(10, key);
