const USER_KEY = "pay54_user";
const SESSION = "pay54_session";

document.getElementById("signupForm")?.addEventListener("submit", e => {
  e.preventDefault();
  localStorage.setItem(USER_KEY, JSON.stringify({
    name: name.value,
    email: email.value,
    phone: phone.value,
    pin: pin.value
  }));
  location.href = "verify.html";
});

document.getElementById("loginForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const u = JSON.parse(localStorage.getItem(USER_KEY));
  if (!u || loginPin.value !== u.pin) return alert("Invalid login");
  localStorage.setItem(SESSION, "1");
  location.href = "dashboard.html";
});
