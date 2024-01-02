// ----1----
// Напишіть такий JavaScript, щоб після натискання на кнопку button, елемент
// <div id="text"> зникав.
// -----2----
// Напишіть такий код, щоб після натискання на кнопку, вона зникала.
// -----3----
// Створіть дерево, яке показує/приховує дочірні вузли при кліці

// ---1 2---
const text = document.querySelector('#text');
const button = document.querySelector('#button');

button.addEventListener('click', function () {
  text.style.visibility = 'hidden';
  button.style.visibility = 'hidden';
});

// ---3---
const btnTree = document.querySelector('#btn-tree');
const tree = document.querySelector('#tree');
tree.style.visibility = 'hidden';
btnTree.addEventListener('click', function () {
  if (tree.style.visibility === 'hidden') tree.style.visibility = 'visible';
  else tree.style.visibility = 'hidden';
});
