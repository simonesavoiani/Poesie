document.addEventListener("DOMContentLoaded", function () {
  console.log("✅ JS caricato correttamente!");

  // Aspetta un attimo per assicurarsi che la sidebar sia nel DOM
  setTimeout(function () {
    const sidebar = document.querySelector(".quarto-sidebar-collapse-item");

    if (!sidebar) {
      console.log("❌ Sidebar non trovata!");
      return;
    }

    console.log("✅ Sidebar trovata!");

    // Bottone toggle menu
    const menuToggle = document.createElement("button");
    menuToggle.id = "menu-toggle";
    menuToggle.innerText = "☰ Menu";
    document.body.appendChild(menuToggle);

    // Stile iniziale della sidebar
    sidebar.style.transition = "left 0.3s ease";
    sidebar.style.position = "fixed";
    sidebar.style.left = "-260px";

    // Toggle visibilità
    menuToggle.addEventListener("click", function () {
      sidebar.style.left = (sidebar.style.left === "0px") ? "-260px" : "0px";
    });

  }, 300); // attesa di 300 millisecondi
});
