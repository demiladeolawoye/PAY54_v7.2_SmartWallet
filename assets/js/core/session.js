if (!localStorage.getItem("pay54_session")) {
  location.href = "index.html";
}
document.getElementById("logout")?.addEventListener("click", () => {
  localStorage.clear();
  location.href = "index.html";
});
