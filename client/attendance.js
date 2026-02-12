document.addEventListener("DOMContentLoaded", function () {

  // ===============================
  // Show Student Name
  // ===============================
  const name = localStorage.getItem("studentName");

  if (name) {
    document.getElementById("studentName").innerText = name;
  } else {
    document.getElementById("studentName").innerText = "Student";
  }

  // ===============================
  // Attendance Warning Logic
  // ===============================
  const controlSystems = 72;

  if (controlSystems < 75) {
    document.getElementById("warningBox").classList.remove("hidden");
  }

  // ===============================
  // Highlight Active Sidebar
  // ===============================
  const currentPage = window.location.pathname.split("/").pop();
  const menuLinks = document.querySelectorAll(".sidebar-item");

  menuLinks.forEach(link => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });

});
