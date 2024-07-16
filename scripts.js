// scripts.js
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.');
});

const sliderContent = document.querySelector('.slider-content');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function updateSlider() {
    const slideWidth = document.querySelector('.project').clientWidth;
    sliderContent.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

nextButton.addEventListener('click', () => {
    const totalSlides = document.querySelectorAll('.project').length;
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
        updateSlider();
    }
});

window.addEventListener('resize', updateSlider);
