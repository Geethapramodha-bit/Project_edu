// -------- LOGIN PAGE --------
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    if (email) {
      localStorage.setItem("userEmail", email);
      window.location.href = "role.html";
    }
  });
}

// -------- ROLE SELECTION --------
function selectRole(role) {
  localStorage.setItem("userRole", role);
  window.location.href = "dashboard.html";
}

// -------- DASHBOARD NAVIGATION --------
function navigateTo(action) {
  if (action === "upload") {
    window.location.href = "upload.html";
  } else if (action === "search") {
    alert("Search feature coming soon!");
  } else if (action === "videos") {
    alert("Video section coming soon!");
  }
}
