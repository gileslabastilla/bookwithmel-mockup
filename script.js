document.addEventListener('DOMContentLoaded', () => {
  // 1. HERO VIDEO CAROUSEL LOGIC
  const slides = document.querySelectorAll('.video-slide');
  const indicators = document.querySelectorAll('.indicator');
  const titles = document.querySelectorAll('.hero-title');
  let currentSlide = 0;
  const slideIntervalTime = 8000; // 5 seconds
  let slideInterval;

  function showSlide(index) {
    // Deactivate all slides and indicators
    slides.forEach((slide) => slide.classList.remove('active'));
    titles.forEach((slide) => slide.classList.remove('active'));
    indicators.forEach((indicator) => indicator.classList.remove('active'));

    // Activate the new slide and indicator
    slides[index].classList.add('active');
    titles[index].classList.add('active');
    indicators[index].classList.add('active');

    // Restart video for smooth transition
    const video = slides[index].querySelector('video');
    if (video) {
      video.currentTime = 0;
      video.play();
    }

    currentSlide = index;
  }

  function nextSlide() {
    const newIndex = (currentSlide + 1) % slides.length;
    showSlide(newIndex);
  }

  function startSlideShow() {
    // Set an interval to automatically switch slides
    slideInterval = setInterval(nextSlide, slideIntervalTime);
  }

  // Add click events to indicators
  indicators.forEach((indicator) => {
    indicator.addEventListener('click', () => {
      const slideIndex = parseInt(indicator.getAttribute('data-slide'));
      showSlide(slideIndex);

      // Reset the auto-play timer when user interacts
      clearInterval(slideInterval);
      startSlideShow();
    });
  });

  // Initialize the carousel
  showSlide(0);
  startSlideShow();
});
