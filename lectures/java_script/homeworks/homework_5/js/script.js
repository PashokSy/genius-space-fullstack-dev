// --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальність, середній
// бал і кількість пропущених занять
console.log('--1--');
console.log('1)');
const student = {
  name: 'Pavlo',
  specialty: 'Software engineer',
  avgScore: 95,
  missClasses: 0,
};
console.log(student);

// 2) написати метод який буде виводити цю інформацію
console.log('2)');
student.showInfo = function () {
  console.log(
    `Student ${this.name} is ${this.specialty} with average score of ${this.avgScore} and miss ${this.missClasses} classes`
  );
};
student.showInfo();

// 3) написати три варіанти студентів
console.log('3)');
const studentAnna = Object.create(student);
studentAnna.name = 'Anna';
studentAnna.specialty = 'Construction Engineer';
studentAnna.avgScore = 98;
studentAnna.missClasses = 1;

const studentTaras = Object.create(student);
studentTaras.name = 'Taras';
studentTaras.specialty = 'Software engineer';
studentTaras.avgScore = 87;
studentTaras.missClasses = 10;

const studentMaria = Object.create(student);
studentMaria.name = 'Maria';
studentMaria.specialty = 'Construction Engineer';
studentMaria.avgScore = 93;
studentMaria.missClasses = 0;

studentAnna.showInfo();
studentTaras.showInfo();
studentMaria.showInfo();

// 4) прикріпити значення за допомогою call apply bind
console.log('4)');
const studentVasil = {
  name: 'Vasil',
  specialty: 'Software developer',
  avgScore: 100,
  missClasses: 2,
};
student.showInfo.call(studentVasil);
student.showInfo.apply(studentVasil);
student.showInfo.bind(studentVasil)();

// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке
const btnHTML = document.querySelector('.btn-html');
const textHTML = document.querySelector('.text-html');
const btnCSS = document.querySelector('.btn-css');
const textCSS = document.querySelector('.text-css');

const hideAll = function () {
  textCSS.classList.add('is-hidden');
  textHTML.classList.add('is-hidden');
};

const showInfo = function () {
  console.log('--2--');
  console.log(this.innerHTML);

  hideAll();
  this.classList.remove('is-hidden');
};

btnHTML.addEventListener('click', showInfo.bind(textHTML));
btnCSS.addEventListener('click', showInfo.bind(textCSS));

// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) jrange 89. 3,4
console.log('--3--');

const shop = function (productName, costPerKg, quantity) {
  const cost = (Math.round(costPerKg * quantity * 100) / 100).toFixed(2);
  return { productName, cost };
};

const banana = {
  productName: 'Banana',
  pricePerKg: 30,
  quantity: 4.5,
};

const cherry = {
  productName: 'Cherry',
  pricePerKg: 58,
  quantity: 1.3,
};

const orange = {
  productName: 'Orange',
  pricePerKg: 89,
  quantity: 3.5,
};

console.log(shop(banana.productName, banana.pricePerKg, banana.quantity));
console.log(shop(cherry.productName, cherry.pricePerKg, cherry.quantity));
console.log(shop(orange.productName, orange.pricePerKg, orange.quantity));
