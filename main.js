const colorBtn = document.querySelector('.colorBtn');
const bodyBg = document.querySelector('body');
const colorBtn2 = document.querySelector('.colorBtn');

const colors = ['yellow','green','blue','orange','pink','majenta','cyan','violet'];

colorBtn.addEventListener('click',changeColor);

function changeColor() {
    let random = Math.floor(Math.random() * colors.length)
    let randomTwo = Math.floor(Math.random() * colors.length)
    bodyBg.style.backgroundColor = colors[random];
    colorBtn2.style.backgroundColor = colors[randomTwo];
}
