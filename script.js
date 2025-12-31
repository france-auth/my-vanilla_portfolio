// Update year automatically
document.getElementById("year").textContent = new Date().getFullYear();

// Copy email functionality
const copyBtn = document.getElementById("copyBtn");
const emailText = document.getElementById("email").textContent;

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(emailText);
  copyBtn.textContent = "Copied!";
  setTimeout(() => {
    copyBtn.textContent = "Copy Email";
  }, 1500);
});
