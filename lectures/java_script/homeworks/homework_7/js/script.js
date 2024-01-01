// Створіть функцію-конструктор Calculator, який створює об’єкти з трьома
// методами:
// read() запитує два значення за допомогою prompt і запам’ятовує їх у
// властивостях об’єкта.
// sum() повертає суму цих властивостей.
// mul() повертає результат множення даних властивостей.

class CalculatorCl {
  variables;

  constructor() {
    this.variables = [];
  }

  read() {
    const inputString = prompt('Введіть числа через кому');
    const inputArr = inputString.split(',');
    const numberArr = inputArr.map((entry) => Number(entry));

    for (let value of numberArr) {
      if (Number.isNaN(value)) continue;
      else this.variables.push(value);
    }
  }

  sum() {
    return this.variables
      .reduce((accumulator, curValue) => accumulator + curValue)
      .toFixed(2);
  }

  mul() {
    return this.variables
      .reduce((accumulator, curValue) => accumulator * curValue)
      .toFixed(2);
  }
}

const calculator = function () {
  return new CalculatorCl();
};

const init = function () {
  const calc = calculator();
  calc.read();
  alert(
    `For numbers: ${
      calc.variables
    } \nSum result: ${calc.sum()} \nMul result: ${calc.mul()}`
  );
};
// init();
