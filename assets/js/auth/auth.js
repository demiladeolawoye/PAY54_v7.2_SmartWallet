(function () {

const USER_KEY = "pay54_user";
const SESSION_KEY = "pay54_session_active";
const VERIFIED_KEY = "pay54_verified";

function getUser() {
  try { return JSON.parse(localStorage.getItem(USER_KEY)); }
  catch { return null; }
}

function setSession() {
  localStorage.setItem(SESSION_KEY, "1");
}

const form = document.getElementById("loginForm");
if (!form) return;

form.addEventListener("submit", e => {
  e.preventDefault();

  const id = loginId.value.trim();
  const pin = loginPin.value.trim();
  const user = getUser();

  if (!user) {
    alert("No account found. Create one.");
    location.href = "signup.html";
    return;
  }

  if ((id !== user.email && id !== user.phone) || pin !== user.pin) {
    alert("Incorrect login details");
    return;
  }

  if (localStorage.getItem(VERIFIED_KEY) !== "1") {
    alert("Complete OTP verification");
    location.href = "verify.html";
    return;
  }

  setSession();
  location.href = "dashboard.html";
});

})();
