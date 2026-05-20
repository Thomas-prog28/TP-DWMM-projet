const slides = Array.from(document.querySelectorAll('.slider__slide'));
const dotsContainer = document.querySelector('.slider__dots');
let currentIndex = 0;
const delay = 4000;

// Mélange aléatoire des slides
slides.sort(() => Math.random() - 0.5);

// Réinjecte les slides mélangés dans le DOM
const track = document.querySelector('.slider__track');
slides.forEach(slide => track.appendChild(slide));

// Création automatique des dots
slides.forEach((_, i) => {
  const dot = document.createElement('button');
  dot.className = 'slider__dot';
  dot.dataset.slide = i;
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.slider__dot');

// Active la première slide
slides[0].classList.add('slider__slide--active');
dots[0].classList.add('slider__dot--active');

function goToSlide(index) {
  slides[currentIndex].classList.remove('slider__slide--active');
  dots[currentIndex].classList.remove('slider__dot--active');

  currentIndex = index;

  slides[currentIndex].classList.add('slider__slide--active');
  dots[currentIndex].classList.add('slider__dot--active');
}

function nextSlide() {
  const nextIndex = (currentIndex + 1) % slides.length;
  goToSlide(nextIndex);
}

let timer = setInterval(nextSlide, delay);

// clic sur les dots
dots.forEach(dot => {
  dot.addEventListener('click', () => {
    clearInterval(timer);
    goToSlide(Number(dot.dataset.slide));
    timer = setInterval(nextSlide, delay);
  });
});
