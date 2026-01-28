// script.js
const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const btn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

btn.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("open");
  btn.setAttribute("aria-expanded", String(isOpen));
});

// Fecha o menu ao clicar em um link (mobile)
menu.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    menu.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
  });
});
