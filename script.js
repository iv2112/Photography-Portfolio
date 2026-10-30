let counter = 0;
const slides = document.querySelectorAll('.pic-a, .pic-b, .pic-c, .pic-d, .pic-e');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;
let slideInterval;

function updateSlider() {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });

  dots.forEach((dot, index) => {
    if (index == counter) {
      dot.classList.add('active');
    }
    else {
      dot.classList.remove('active');
    }
  });
}

function startTimer() {
  slideInterval = setInterval(() => {
    counter++;
    if (counter >= totalSlides) {
      counter = 0;
    }
    updateSlider();
  }, 4000);
}

function resetTimer() {
  clearInterval(slideInterval);
  startTimer();
}

startTimer();

function currentSlide(index) {
  counter = index;
  updateSlider();
  resetTimer();
}

function nextSlide() {
  counter++;
  if (counter >= totalSlides) {
    counter = 0;
  }

  updateSlider();
  resetTimer();
}

function prevSlide() {
  counter--;
  if (counter < 0) {
    counter = totalSlides - 1;
  }
  updateSlider();
  resetTimer();
}