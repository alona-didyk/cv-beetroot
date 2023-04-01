const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".header__nav ul");

hamburger.addEventListener("click", function() {
    this.classList.toggle("open");
    nav.classList.toggle("open");
})
// const menu = document.getElementById('menu');
// const burger = document.getElementById('burger');

// burger.onclick = () => {
//     menu.classList.toggle('active');
// }