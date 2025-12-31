// Update year automatically
document.getElementById("year").textContent = new Date().getFullYear();

// Copy email functionality
const copyBtn = document.getElementById("copyBtn");
const emailText = document.getElementById("email").textContent;
/* 
copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(emailText);
  copyBtn.textContent = "Copied!";
  setTimeout(() => {
    copyBtn.textContent = "Copy Email";
  }, 1500);
});
 */

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
