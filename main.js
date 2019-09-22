const colorBtn = document.querySelector('.colorBtn');
const bodyBg = document.querySelector('body');
const colorBtn2 = document.querySelector('.colorBtn');

const colors = ['yellow','green','blue','orange','pink','majenta','cyan','violet'];

colorBtn.addEventListener('click', changeColor);

function changeColor() {
    bodyBg.style.backgroundColor = colors[randomNum()];
    colorBtn2.style.backgroundColor = colors[randomNum()];
}

function randomNum() {
    return Math.floor(Math.random() * colors.length)
}