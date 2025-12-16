// reset-pin.js — PAY54 v7.2
import { getUser, setUser } from "../core/state.js";

const form = document.getElementById("resetPinForm");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();

    const user = getUser();
    if (!user) {
      alert("No account found");
      window.location.href = "signup.html";
      return;
    }

    const pin = newPin.value.trim();
    const pin2 = confirmPin.value.trim();

    if (!/^\d{4}$/.test(pin) || pin !== pin2) {
      alert("PIN must be 4 digits and match");
      return;
    }

    user.pin = pin;
    setUser(user);

    alert("PIN updated successfully");
    window.location.href = "index.html";
  });
}

