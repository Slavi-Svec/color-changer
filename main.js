const button = document.querySelector('.button');
const bodyBg = document.querySelector('body');


const colors = ['yellow', 'green', 'blue', 'orange', 'pink', 'majenta', 'cyan', 'violet'];

button.addEventListener('click', changeColor);

function changeColor() {
    bodyBg.style.backgroundColor = colors[randomNum()];
    button.style.backgroundColor = colors[randomNum()];
}

function randomNum() {
    return Math.floor(Math.random() * colors.length)
}