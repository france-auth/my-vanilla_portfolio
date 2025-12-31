/* 

document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");
  const accentPicker = document.getElementById("accentPicker");

  /* ---------- Load saved settings ---------- *//*
  const savedTheme = localStorage.getItem("theme");
  const savedAccent = localStorage.getItem("accent");

  if (savedTheme) root.setAttribute("data-theme", savedTheme);
  if (savedAccent) {
    root.setAttribute("data-accent", savedAccent);
    accentPicker.value = savedAccent;
  }

  /* ---------- Dark mode toggle ---------- *//*
  themeToggle.addEventListener("click", () => {
    const isDark = root.getAttribute("data-theme") === "dark";
    root.setAttribute("data-theme", isDark ? "light" : "dark");
    localStorage.setItem("theme", isDark ? "light" : "dark");
    themeToggle.textContent = isDark ? "🌙 Dark Mode" : "☀️ Light Mode";
  });

  /* ---------- Accent picker ---------- *//*
  accentPicker.addEventListener("change", (e) => {
    root.setAttribute("data-accent", e.target.value);
    localStorage.setItem("accent", e.target.value);
  });

  /* ---------- Year ---------- *//*
  document.getElementById("year").textContent = new Date().getFullYear();
});
 */


document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");
  const accentPicker = document.getElementById("accentPicker");

  /* ---------- Defaults ---------- */
  const defaultTheme = "light";
  const defaultAccent = "blue";

  /* ---------- Load saved or default ---------- */
  const savedTheme = localStorage.getItem("theme") || defaultTheme;
  const savedAccent = localStorage.getItem("accent") || defaultAccent;

  root.setAttribute("data-theme", savedTheme);
  root.setAttribute("data-accent", savedAccent);

  accentPicker.value = savedAccent;

  themeToggle.textContent =
    savedTheme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";

  /* ---------- Dark mode toggle ---------- */
  themeToggle.addEventListener("click", () => {
    const isDark = root.getAttribute("data-theme") === "dark";
    const nextTheme = isDark ? "light" : "dark";

    root.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);

    themeToggle.textContent =
      nextTheme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
  });

  /* ---------- Accent picker ---------- */
  accentPicker.addEventListener("change", (e) => {
    root.setAttribute("data-accent", e.target.value);
    localStorage.setItem("accent", e.target.value);
  });

  /* ---------- Year ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();
});
