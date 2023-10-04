const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
let timer;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.transform = 'translateY(0)';
            slide.style.opacity = '1';
        } else {
            slide.style.transform = 'translateY(20px)';
            slide.style.opacity = '0';
        }
    });
}

function updateDots(index) {
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
    updateDots(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
    updateDots(currentIndex);
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        showSlide(currentIndex);
        updateDots(currentIndex);
        clearTimeout(timer);
        timer = setInterval(nextSlide, 5000);
    });
});

timer = setInterval(nextSlide, 5000);
showSlide(currentIndex);
updateDots(currentIndex);
