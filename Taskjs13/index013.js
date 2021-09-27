// Task 1

let btn = document.querySelector('#btn');
let login = document.querySelector('#login');
let remember = document.querySelector('#checkbox');

function singIn() {
let isChecked = remember.checked ? 'Я тебя запомнил' : 'Я тебя не запомнил';
alert(`Привет, ${login.value} ! ${isChecked}`) 
}; 

btn.addEventListener('click', singIn)
// Task 2

