// Створити телефонну книгу
// створити початковий клас Abonent, де зберігатимуться ім * я і номер
// створити set який прийматиме телефон і номер
// створити get який виводитиме данні про абонента
// створити три різних юзери
// вивести данні

class Abonent {
  name;
  phoneNumber;

  constructor() {}

  setData(name, phoneNumber) {
    this.name = name;
    this.phoneNumber = phoneNumber;
  }

  getString() {
    return `Abonent ${this.name} number: ${this.phoneNumber}`;
  }
}

const pavlo = new Abonent();
pavlo.setData('Pavlo', '+3811111111');
const vasil = new Abonent();
vasil.setData('Vasil', '+3822222222');
const maria = new Abonent();
maria.setData('Maria', '+3833333333');

console.log(pavlo.getString());
console.log(vasil.getString());
console.log(maria.getString());
