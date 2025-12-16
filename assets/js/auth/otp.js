// otp.js — PAY54 v7.2 demo OTP
import { setVerified } from "../core/state.js";

const form = document.getElementById("otpForm");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();

    const code = [...document.querySelectorAll(".otp-row input")]
      .map(i => i.value)
      .join("");

    if (code === "123456") {
      setVerified();
      alert("OTP verified");
      window.location.href = "index.html";
    } else {
      alert("Invalid OTP — use 123456");
    }
  });
}

