document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".slider-track");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const slides = Array.from(track.children);
  let index = 0;
  const slideWidth = slides[0].getBoundingClientRect().width + 10;

  function updateSlider() {
    track.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    updateSlider();
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    updateSlider();
  });

  /* تشغيل تلقائي للسلايدر */
  let autoPlay = setInterval(() => {
    nextBtn.click();
  }, 4000);

  /* إيقاف التشغيل عند المرور بالماوس */
  track.addEventListener("mouseenter", () => clearInterval(autoPlay));
  track.addEventListener("mouseleave", () => {
    autoPlay = setInterval(() => nextBtn.click(), 4000);
  });

  /* سحب باللمس للجوالات */
  let startX = 0;
  let isDragging = false;
  track.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
  });
  track.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    let moveX = e.touches[0].clientX - startX;
    if (moveX < -50) { nextBtn.click(); isDragging = false; }
    else if (moveX > 50) { prevBtn.click(); isDragging = false; }
  });
  track.addEventListener("touchend", () => isDragging = false);

  /* إرسال النموذج بدون إعادة تحميل الصفحة */
  const form = document.querySelector("#contactForm");
  const messageBox = document.querySelector(".form-msg");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // محاكاة الإرسال (يمكن ربطها بـ Google Sheets أو API)
    setTimeout(() => {
      messageBox.textContent = "✅ تم إرسال طلبك بنجاح، سنقوم بالتواصل معك قريبًا.";
      messageBox.style.color = "#0f0";
      form.reset();
    }, 1000);
  });
});
