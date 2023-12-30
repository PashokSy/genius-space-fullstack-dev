// ---1---
// Перепишіть функцію, використовуючи '?' або '||'
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Батьки дозволили?');
//   }
// }
// // console.log(checkAge(19));
// // console.log(checkAge(14));
// const checkAgeExp = function (age) {
//   return age > 18 ? true : confirm('Батьки дозволили?');
// };
// // console.log(checkAgeExp(19));
// // console.log(checkAgeExp(14));
// const checkAgeExp2 = function (age) {
//   return age > 18 || confirm('Батьки дозволили?');
// };
// // console.log(checkAgeExp2(19));
// // console.log(checkAgeExp2(14));

// ---2---
// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.
// const min = function (a, b) {
//   return a > b ? b : a;
// };
// console.log(min(3, 5));
// console.log(min(110, 2));

// ---3---
// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// ask(
//   'Ви згодні?',
//   function () {
//     alert('Ви погодились.');
//   },
//   function () {
//     alert('Ви скасували виконання.');
//   }
// );

// const askArr = (question, yes, no) => (confirm(question) ? yes() : no());
// askArr(
//   'Ви згодні?',
//   (yesHandler = () => alert('Ви погодились.')),
//   (noHandler = () => alert('Ви скасували виконання.'))
// );
