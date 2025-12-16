// === Configuration ===
const GPT_URL =
  "https://chatgpt.com/g/g-6876b717ca808191aea5343f89c670e3-funding-pathfinder-gpt";

const startBtns = ["startBtn", "startBtn2", "startBtn3"]
  .map((id) => document.getElementById(id))
  .filter(Boolean);

const openLink = document.getElementById("openLink");
const copyBtn = document.getElementById("copyBtn");
const toast = document.getElementById("toast");
const year = document.getElementById("year");

// Set year
if (year) year.textContent = new Date().getFullYear();

// Wire “Open in new tab” link
if (openLink) openLink.href = GPT_URL;

// Open GPT in new tab
function openGPT() {
  window.open(GPT_URL, "_blank", "noopener,noreferrer");
}

startBtns.forEach((btn) => btn.addEventListener("click", openGPT));

// Copy link
async function copyLink() {
  try {
    await navigator.clipboard.writeText(GPT_URL);
    showToast("Copied GPT link to clipboard ✅");
  } catch (e) {
    // Fallback: prompt
    window.prompt("Copy this link:", GPT_URL);
  }
}

if (copyBtn) copyBtn.addEventListener("click", copyLink);

let toastTimer = null;
function showToast(msg) {
  if (!toast) return;
  toast.textContent = msg;
  toast.style.opacity = "1";
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.textContent = "";
  }, 2500);
}
