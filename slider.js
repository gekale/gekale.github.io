let currentIndex = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const slider = document.querySelector('.slider');
    const totalSlides = slides.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1; // Wrap to last slide
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0; // Wrap to first slide
    }

    slider.style.transform = translateX(-${currentIndex * 100}%);
}
