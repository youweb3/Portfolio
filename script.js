// ================== Modal ==================
document.addEventListener("DOMContentLoaded", () => {
const modal = document.getElementById("read");
const readMoreBtn = document.querySelector(".read-more-btn");
const closeBtn = document.querySelector(".modal-content .close");

if (modal && readMoreBtn && closeBtn) {
// open modal

readMoreBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

//close modal

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// // close modal on outside click

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
}
});


// ================== Hamburger Menu ==================
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  //when click outside the menu -> menu should be close
  document.addEventListener("click", (e) => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      navLinks.classList.remove("active");
    }
  })
});