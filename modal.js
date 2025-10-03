const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector("#imageModal .about-close");

document.querySelectorAll(".btn-view").forEach(btn => {
  btn.addEventListener("click", function(e) {
    e.preventDefault();
    const card = this.closest(".card");
    const imgSrc = card.querySelector("img").src;
    modalImg.src = imgSrc;
    modal.style.display = "block";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  modalImg.src = "";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    modalImg.src = "";
  }
});
