document.addEventListener("DOMContentLoaded", function () {

  // ==========================
  // Highlight Active Sidebar
  // ==========================
  const currentPage = window.location.pathname.split("/").pop();

  document.querySelectorAll(".dashboard-item").forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });

  // ==========================
  // Show Student Name
  // ==========================
  const name = localStorage.getItem("studentName");

  if (name) {
    document.getElementById("studentName").innerText = name;
  } else {
    document.getElementById("studentName").innerText = "Student";
  }

});
