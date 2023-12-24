// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.
console.log(1 > 0);
console.log(0 > 0);
console.log(-3 > 0);

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true
console.log('test' === 'test');
console.log('test' === 'qwerty');
console.log('test' === true);

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.
const test = (i) => {
  return i > 10 ? i - 5 : i + 5;
};
console.log(test(1));
console.log(test(10));
console.log(test(13));

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу
// prettier-ignore
// var month = [
//   'January', 'February', 'March', 'April', 'May', 'June', 'July',
//   'August', 'September', 'October', 'November', 'December',
// ];
// const getFullMonth = (monthNum) => {
//   if (monthNum > 12 || monthNum < 1) return 'Incorrect number 😣';
//   return month[monthNum - 1];
// };
// const inputMonth = prompt('Enter month number (1-12)');
// alert(getFullMonth(inputMonth));

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел
const inputNum = prompt('Enter positive number');
if (!inputNum) {
  alert('Input can not be empty. Please enter positive number!');
} else {
  let sum = 0;
  for (let j = 0; j < inputNum.length; j++) sum += Number(inputNum[j]);
  if (Number.isNaN(sum)) alert('Invalid input. Please enter positive number!');
  else alert(sum);
}
