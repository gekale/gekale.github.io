let currentIndex = 0;

// Captions corresponding to each slide (in the same order as the images)
const captions = [
    "Purple Cat",
    "Gekale",
    "Cat on Duty",
    "Goober Cat",
    "Monopoly! Cat"
];

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const slider = document.querySelector('.slider');
    const caption = document.getElementById('caption');
    const totalSlides = slides.length;

    // Update the current index
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1; // Wrap to last slide
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0; // Wrap to first slide
    }

    // Update the slider position
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update the caption text
    caption.textContent = captions[currentIndex];
}
