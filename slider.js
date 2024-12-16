let currentIndex = 0;

function changeSlide(direction) {
    const slides = document.querySelector('.slider');
    const totalSlides = document.querySelectorAll('.slide').length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1; // Go to the last slide
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0; // Go back to the first slide
    }

    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}
