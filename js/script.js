'use strict';

/** Ouverture menu */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElemArr = [overlay, navOpenBtn, navCloseBtn];

for (let i = 0; i < navElemArr.length; i++) {
    navElemArr[i].addEventListener("click", function () {
        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
    });
}

/** Classe active pour le header quand on scrolle plus de 200px du haut */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function (){
    window.scrollY >= 200 ? header.classList.add("active")
    : header.classList.remove("active");
});



/** Script pour le panier */

let iconCart = document.querySelector("[icon-cart]");
let body = document.querySelector("[data-menu]")


iconCart.addEventListener('click', () => {
    body.classList.toggle("active");
} );

/** Script pour le menu login */

let iconUser = document.querySelector("[icon-user]");
let logMenu = document.querySelector("[login-menu]");

iconUser.addEventListener('click', () => {
    logMenu.classList.toggle("active");
});
