// Atualiza o ano no footer (se existir)
const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

// Menu mobile (só roda se existir)
const btn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

if (btn && menu) {
  btn.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(isOpen));
  });

  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    });
  });
}
