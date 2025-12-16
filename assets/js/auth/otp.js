document.getElementById("otpForm").addEventListener("submit", e => {
  e.preventDefault();
  if (otp.value === "123456") {
    alert("Verified");
    location.href = "index.html";
  } else alert("Wrong OTP");
});
