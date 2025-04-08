document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".quarto-sidebar-collapse-item");
  
  if (!sidebar) {
    console.log("Sidebar non trovata!");
    return;
  }

  // Crea il bottone di apertura
  const menuToggle = document.createElement("button");
  menuToggle.id = "menu-toggle";
  menuToggle.innerText = "☰ Menu";
  document.body.appendChild(menuToggle);

  // Crea il bottone di chiusura da inserire nella sidebar
  const closeBtn = document.createElement("button");
  closeBtn.id = "sidebar-close";
  closeBtn.innerText = "✕ Chiudi";
  sidebar.insertBefore(closeBtn, sidebar.firstChild);

  // Stato iniziale: sidebar nascosta
  sidebar.style.transition = "left 0.3s ease";
  sidebar.style.position = "fixed";
  sidebar.style.left = "-260px";

  // Mostra la sidebar
  menuToggle.addEventListener("click", function () {
    sidebar.classList.add("show");
    sidebar.style.left = "0px";
    menuToggle.style.display = "none"; // Nascondi il bottone menu
  });

  // Chiude la sidebar
  closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("show");
    sidebar.style.left = "-250px";
    menuToggle.style.display = "block"; // Rendi visibile di nuovo il bottone menu
  });
});
