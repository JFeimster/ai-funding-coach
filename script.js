// === Configuration ===
const GPT_URL =
  "https://chatgpt.com/g/g-6876b717ca808191aea5343f89c670e3-funding-pathfinder-gpt";

// === Elements ===
const openLink = document.getElementById("openLink");
const copyBtn = document.getElementById("copyBtn");
const toast = document.getElementById("toast");
const year = document.getElementById("year");

// Auto-bind every Start button (any element with id that starts with "startBtn")
const startButtons = Array.from(document.querySelectorAll('[id^="startBtn"]'));

// Set year
if (year) year.textContent = new Date().getFullYear();

// Wire “Open in new tab” link
if (openLink) openLink.href = GPT_URL;

// Open GPT in new tab
function openGPT() {
  window.open(GPT_URL, "_blank", "noopener,noreferrer");
}

// Bind Start buttons
startButtons.forEach((btn) => {
  btn.addEventListener("click", openGPT);
});

// Copy link
async function copyLink() {
  try {
    await navigator.clipboard.writeText(GPT_URL);
    showToast("Copied link ✅");
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
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.textContent = "";
  }, 2500);
}

// ===========================
// Scroll reveal (fade-in on view)
// ===========================
(function initScrollReveal() {
  const revealEls = document.querySelectorAll(".reveal");
  if (!revealEls.length) return;

  // If IntersectionObserver isn't supported, just show everything.
  if (!("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target); // reveal once, then stop observing
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
  );

  revealEls.forEach((el) => io.observe(el));
})();
