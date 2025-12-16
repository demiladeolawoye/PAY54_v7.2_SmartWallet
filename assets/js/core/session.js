(function () {
  const active = localStorage.getItem("pay54_session_active") === "1";
  if (!active) location.href = "index.html";

  const logout = document.getElementById("logoutBtn");
  if (logout) {
    logout.onclick = () => {
      localStorage.removeItem("pay54_session_active");
      location.href = "index.html";
    };
  }
})();
