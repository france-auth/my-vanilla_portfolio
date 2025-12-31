/* // Update year automatically
document.getElementById("year").textContent = new Date().getFullYear();

// Copy email functionality
const copyBtn = document.getElementById("copyBtn");
const emailText = document.getElementById("email").textContent;

copyBtn.addEventListener("click", () => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(emailText);
  } else {
    const textarea = document.createElement("textarea");
    textarea.value = emailText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }

  copyBtn.textContent = "Copied!";
  setTimeout(() => {
    copyBtn.textContent = "Copy Email";
  }, 1500);
});
 */

document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");
  const accentPicker = document.getElementById("accentPicker");

  /* ---------- Load saved settings ---------- */
  const savedTheme = localStorage.getItem("theme");
  const savedAccent = localStorage.getItem("accent");

  if (savedTheme) root.setAttribute("data-theme", savedTheme);
  if (savedAccent) {
    root.setAttribute("data-accent", savedAccent);
    accentPicker.value = savedAccent;
  }

  /* ---------- Dark mode toggle ---------- */
  themeToggle.addEventListener("click", () => {
    const isDark = root.getAttribute("data-theme") === "dark";
    root.setAttribute("data-theme", isDark ? "light" : "dark");
    localStorage.setItem("theme", isDark ? "light" : "dark");
    themeToggle.textContent = isDark ? "🌙 Dark Mode" : "☀️ Light Mode";
  });

  /* ---------- Accent picker ---------- */
  accentPicker.addEventListener("change", (e) => {
    root.setAttribute("data-accent", e.target.value);
    localStorage.setItem("accent", e.target.value);
  });

  /* ---------- Year ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();
});
