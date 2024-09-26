'use strict';



/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElemArr = [navOpenBtn, navCloseBtn];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
  });
}

/**
 * toggle navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
  });
}





/**
 * header active when window scrolled down
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 50 ? header.classList.add("active")
    : header.classList.remove("active");
});



// Obtener elementos del DOM
const modal = document.getElementById('myModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementsByClassName('close')[0];

// Abrir el modal cuando se haga clic en el botón
openModalBtn.addEventListener("click", () => {
  console.log("Abriendo modal 2");
  modal.style.display = 'block';
})
openModalBtn.onclick = function() {
  console.log("Abriendo modal");
  
  modal.style.display = 'block';
}

// Cerrar el modal cuando se haga clic en el botón de cerrar
closeModalBtn.onclick = function() {
  modal.style.display = 'none';
}

// Cerrar el modal si se hace clic fuera de él
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}