//  -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.
//
// const fruits = [
//   { id: 0, name: 'Apple' },
//   { id: 1, name: 'Tomat' },
//   { id: 2, name: 'Cherry' },
//   { id: 3, name: 'Orange' },
// ];
// console.log(fruits.map((fruit) => fruit.name));

//  -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.
//
// for (let n = 2; n <= 10; n += 2) console.log(n);

//  -- 3 --
//Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
//     console.lpg( `цифра ${i}!` );
//   }
//
// let i = 0;
// while (i < 5) {
//   console.log(`цифра ${i}!`);
//   i++;
// }
// or
// let i = 0;
// do {
//   console.log(`цифра ${i}!`);
//   i++;
// } while (i < 5);

//  -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.
//
// while (true) {
//   const inputNum = Number(prompt('Введіть число більше за 100'));
//   if (!inputNum) continue;
//   if (inputNum < 100) continue;

//   alert(`Дякую, ваше число - ${inputNum}`);
//   break;
// }

//  -- 5 --
// Вирахуйте середній вік
//
// const girls = [
//   { age: 23, name: 'Оля' },
//   { age: 29, name: 'Аня' },
//   { age: 10, name: 'Юля' },
//   { age: 20, name: 'Катя' },
// ];
// const avgAge =
//   girls.map((girl) => girl.age).reduce((sum, item) => sum + item) /
//   girls.length;
// console.log(avgAge);
