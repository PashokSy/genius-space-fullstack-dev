function check() {
  let val = document.getElementsByName('radio');
  if (val[0].checked) {
    console.log('female');
  } else {
    console.log('male');
  }
}

let form = document.querySelector('.form');
let nameInput = document.querySelector('.inputName');
let lastNameInput = document.querySelector('.inputLastName');
let age = document.querySelector('#age');
let male = document.getElementsByName('radio');

form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const info = {
    name: nameInput.value,
    lastName: lastNameInput.value,
    age: age.value,
    male: male[0].checked,
  };
  localStorage.setItem('info', JSON.stringify(info));
}
