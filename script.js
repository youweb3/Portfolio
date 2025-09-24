// select Element
const modal = document.getElementById("read");
const readMoreBtn = document.querySelector(".read-more-btn");
const closeBtn = document.querySelector(".modal-content .close");

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