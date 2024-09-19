let currentSlide = 0;
const slides = document.querySelectorAll('.box-body');
const totalSlides = slides.length;

function showSlide() {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide();
}

setInterval(nextSlide, 3000); // เปลี่ยนภาพทุก 3 วินาที
showSlide();
