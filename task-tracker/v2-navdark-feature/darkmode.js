const THEME_KEY = "task-tracker-theme";

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const toggle = document.getElementById("theme-toggle");
  if (toggle) toggle.textContent = theme === "dark" ? "Sun" : "Moon";

}

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY) || "light";

  applyTheme(saved);

  const toggle = document.getElementById("theme-toggle");

}
