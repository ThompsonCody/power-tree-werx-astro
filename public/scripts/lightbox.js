const triggers = document.querySelectorAll(".lightbox-trigger");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");

const closeBtn = document.querySelector(".lightbox-close");
const prevBtn = document.querySelector(".lightbox-prev");
const nextBtn = document.querySelector(".lightbox-next");

let currentIndex = 0;
const images = Array.from(triggers);

function open(index) {
  currentIndex = index;

  const img = images[currentIndex];
  const src = img.dataset.src;
  const alt = img.dataset.alt;

  lightboxImage.src = src;
  lightboxImage.alt = alt;

  lightbox.classList.add("open");
}

function close() {
  lightbox.classList.remove("open");
}

function next() {
  currentIndex = (currentIndex + 1) % images.length;
  open(currentIndex);
}

function prev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  open(currentIndex);
}

images.forEach((img, i) => {
  img.addEventListener("click", () => open(i));
});

closeBtn.addEventListener("click", close);
nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", prev);

document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("open")) return;

  if (e.key === "Escape") close();
  if (e.key === "ArrowRight") next();
  if (e.key === "ArrowLeft") prev();
});