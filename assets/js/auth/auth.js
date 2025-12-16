// auth.js — PAY54 v7.2 auth logic
import {
  getUser,
  setUser,
  setSession,
  isVerified
} from "../core/state.js";

// 👁 Eye toggle
document.querySelectorAll(".eye-toggle").forEach(btn => {
  btn.addEventListener("click", () => {
    const input = document.getElementById(btn.dataset.target);
    if (input) input.type = input.type === "password" ? "text" : "password";
  });
});

/* ======================
   SIGNUP
====================== */
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", e => {
    e.preventDefault();

    const name = signupName.value.trim();
    const email = signupEmail.value.trim();
    const phone = signupPhone.value.trim();
    const pin = signupPin.value.trim();
    const pin2 = signupPinConfirm.value.trim();

    if (!/^\d{4}$/.test(pin)) {
      alert("PIN must be exactly 4 digits");
      return;
    }
    if (pin !== pin2) {
      alert("PINs do not match");
      return;
    }

    setUser({ name, email, phone, pin });
    localStorage.removeItem("pay54_verified");

    window.location.href = "verify.html";
  });
}

/* ======================
   LOGIN
====================== */
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", e => {
    e.preventDefault();

    const id = loginId.value.trim();
    const pin = loginPin.value.trim();
    const user = getUser();

    if (!user) {
      alert("No account found. Please create one.");
      window.location.href = "signup.html";
      return;
    }

    if ((id !== user.email && id !== user.phone) || pin !== user.pin) {
      alert("Invalid credentials");
      return;
    }

    if (!isVerified()) {
      alert("OTP verification required");
      window.location.href = "verify.html";
      return;
    }

    setSession();
    window.location.href = "dashboard.html";
  });
}

