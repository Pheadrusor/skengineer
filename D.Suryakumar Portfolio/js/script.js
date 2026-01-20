/* ===============================
   PAGE BASED NAVIGATION
   =============================== */

function goToPage(id) {
  const pages = document.querySelectorAll(".page");

  pages.forEach(page => {
    page.classList.remove("active");
  });

  const target = document.getElementById(id);
  if (target) {
    target.classList.add("active");
  }
}

/* Optional: keyboard navigation */
document.addEventListener("keydown", (e) => {
  const pages = Array.from(document.querySelectorAll(".page"));
  const currentIndex = pages.findIndex(p => p.classList.contains("active"));

  if (e.key === "ArrowDown" && currentIndex < pages.length - 1) {
    pages[currentIndex].classList.remove("active");
    pages[currentIndex + 1].classList.add("active");
  }

  if (e.key === "ArrowUp" && currentIndex > 0) {
    pages[currentIndex].classList.remove("active");
    pages[currentIndex - 1].classList.add("active");
  }
});
