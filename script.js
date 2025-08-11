// Preloader
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  preloader.style.opacity = 0;
  setTimeout(() => preloader.remove(), 500);
});

// Gallery Slider
const images = [
  "images/work1.webp",
  "images/work2.webp",
  "images/work3.webp",
  "images/work4.webp",
  "images/work5.webp",
  "images/work6.webp",
  "images/work7.webp"
];

const track = document.querySelector(".slider-track");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

function renderImages() {
  track.innerHTML = "";
  images.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "عمل من أعمال لمسة نجار";
    img.loading = "lazy";
    track.appendChild(img);
  });
}

function moveSlider() {
  const slideWidth = track.children[0]?.clientWidth + 16 || 316;
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < images.length - 3) {
    currentIndex++;
    moveSlider();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    moveSlider();
  }
});

renderImages();

// Form
const form = document.getElementById("contact-form");
form.addEventListener("submit", e => {
  e.preventDefault();
  alert("تم إرسال طلبك بنجاح، سنتواصل معك قريبًا.");
  form.reset();
});
