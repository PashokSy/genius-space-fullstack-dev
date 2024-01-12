// -----1----
// Напишіть функцію printNumbers(from, to) яка виводить число кожну секунду,
// починаючи від from і закінчуючи to.
// Зробіть два варіанти рішення.
// Використовуючи setInterval.
// Використовуючи вкладений setTimeout
//
// const printNumbers = function (from, to) {
//   let printInterval = setInterval(() => {
//     console.log(from);
//     if (from >= to) clearInterval(printInterval);
//     else from++;
// }, 1000);
// };
// printNumbers(3, 10);
//
// const printNumbers = function (from, to) {
//   const printTimeout = () => {
//     console.log(from);
//     if (from < to) setTimeout(printTimeout, 1000);
//     from++;
//   };
//   setTimeout(printTimeout, 1000);
// };
// printNumbers(3, 10);
// ==============================================================================
// -----2----
// Вбудована функція setTimeout використовує колбек-функції. Створіть
// альтернативу яка базується на промісах.
// Функція delay(ms) повинна повертати проміс, який перейде в стан resolved через
// ms мілісекунд, так щоб ми могли додати до нього .then:
// function delay(ms) {
// // ваш код
// }
//
const delay = function (ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
delay(3000).then(() => alert('виконалось через 3 секунди'));
