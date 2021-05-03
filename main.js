"use strict";

const hiddens = document.querySelectorAll('.hidden-items');
const up = document.querySelector(".scroll-home");
let clicked = [false,true];
let c = 0;

document.querySelector(".menu").onclick = function () {
  let clk = clicked[++c % 2];
  this.classList.toggle("menu-open");
  document.querySelector(".hidden-menu").classList.toggle("show-menu");
  clk
    ? hiddens.forEach(e => (e.style.display = "flex"))
    : setTimeout(() => {hiddens.forEach((e) => (e.style.display = "none"))}, 600);
};

onscroll = () => {
  scrollY > 1000
    ? (up.style.visibility = "visible")
    : (up.style.visibility = "hidden");
};

up.onclick = () => scrollTo(0, 0);
