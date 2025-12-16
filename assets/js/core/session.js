// session.js — PAY54 v7.2 route guard
import { isSessionActive, clearSession } from "./state.js";

const path = location.pathname;

if (path.endsWith("dashboard.html") && !isSessionActive()) {
  location.href = "index.html";
}

const logout = document.getElementById("btnLogout");
if (logout) {
  logout.onclick = () => {
    clearSession();
    location.href = "index.html";
  };
}

