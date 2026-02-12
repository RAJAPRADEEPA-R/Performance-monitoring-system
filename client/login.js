document.addEventListener("DOMContentLoaded", function () {

  // ==========================
  // LOGIN FUNCTION
  // ==========================
  window.login = function () {
    const name = document.getElementById("username").value.trim();
    const password = document.getElementById("loginPassword").value.trim();
    const errorBox = document.getElementById("loginError");

    errorBox.innerText = "";

    if (!name) {
      errorBox.innerText = "Student name is required";
      return;
    }

    if (!password) {
      errorBox.innerText = "Password is required";
      return;
    }

    const savedPassword = localStorage.getItem("userPassword");

    if (savedPassword && password !== savedPassword) {
      errorBox.innerText = "Incorrect password";
      return;
    }

    localStorage.setItem("studentName", name);
    window.location.href = "dashboard.html";
  };


  // ==========================
  // RESET PASSWORD FUNCTION
  // ==========================
  window.resetPassword = function () {
    const newPass = document.getElementById("newPass").value.trim();
    const confirmPass = document.getElementById("confirmPass").value.trim();

    if (!newPass || !confirmPass) {
      alert("All fields are required");
      return;
    }

    if (newPass !== confirmPass) {
      alert("Passwords do not match");
      return;
    }

    localStorage.setItem("userPassword", newPass);
    alert("Password reset successful");
    showLogin();
  };


  // ==========================
  // SHOW FORGOT PASSWORD
  // ==========================
  window.showForgot = function () {
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("forgotBox").classList.remove("hidden");
  };


  // ==========================
  // SHOW LOGIN PAGE
  // ==========================
  window.showLogin = function () {
    document.getElementById("forgotBox").classList.add("hidden");
    document.getElementById("loginPage").classList.remove("hidden");
  };

});
