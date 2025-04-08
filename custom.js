document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.createElement("button");
  menuToggle.id = "menu-toggle";
  menuToggle.innerText = "☰ Menu";

  document.body.appendChild(menuToggle);

  const sidebar = document.querySelector(".sidebar");

  menuToggle.addEventListener("click", function () {
    if (sidebar.classList.contains("show")) {
      sidebar.classList.remove("show");
    } else {
      sidebar.classList.add("show");
    }
  });
});
