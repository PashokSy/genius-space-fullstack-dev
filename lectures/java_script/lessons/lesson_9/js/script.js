// const btn1 = document.querySelector('#btn1');
// const btn2 = document.querySelector('#btn2');
// const btn3 = document.querySelector('#btn3');
// const btn4 = document.querySelector('#btn4');
// const btn5 = document.querySelector('#btn5');
// btn1.addEventListener('click', function () {
//   console.log('click');
// });
// btn2.addEventListener('contextmenu', () => console.log('contextmenu'));
// btn3.addEventListener('mouseout', () => console.log('mouseout'));
// btn4.addEventListener('mousedown', () => console.log('mousedown'));
// btn5.addEventListener('mousemove', () => console.log('mousemove'));
// btn1.addEventListener('keydown', () => console.log('keydown'));
// #########################

// const btnAdd = document.querySelector('#btn-add');
// const btnRemove = document.querySelector('#btn-remove');
// const btnClick = document.querySelector('#btn-click');

// const handlerClick = () => console.log('Hello');

// btnAdd.addEventListener('click', () =>
//   btnClick.addEventListener('click', handlerClick)
// );
// btnRemove.addEventListener('click', () =>
//   btnClick.removeEventListener('click', handlerClick)
// );
// #########################

const form = document.querySelector('.form');
const loginInput = form.querySelector('input[type="text"]');
const passwordInput = form.querySelector('input[type="password"]');

const handleSubmit = function (e) {
  e.preventDefault();
  const login = loginInput.value;
  const password = passwordInput.value;
  console.log({ login, password });
};

form.addEventListener('submit', handleSubmit);
