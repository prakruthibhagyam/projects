// Example: Slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slider-item');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000);  // Changes slide every 5 seconds

