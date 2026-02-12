// Run when page loads
document.addEventListener("DOMContentLoaded", function () {

  // ==========================
  // 1️⃣ Show Student Name
  // ==========================
  const name = localStorage.getItem("studentName");

  if (name) {
    document.getElementById("studentName").innerText = name;
  }


  // ==========================
  // 2️⃣ Highlight Active Sidebar
  // ==========================
  const currentPage = window.location.pathname.split("/").pop();
  const menuLinks = document.querySelectorAll(".sidebar-item");

  menuLinks.forEach(link => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });

});
