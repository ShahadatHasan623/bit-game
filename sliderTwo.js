const track = document.querySelector('.banner_two_track');
const slides = Array.from(document.querySelectorAll('.banner_two_img'));
const indicatorsContainer = document.querySelector('.banner_two_indicators');

let currentIndex = 0;
let slidesPerView = 1;

// Calculate slidesPerView for responsive display
function calculateSlidesPerView() {
  if (window.innerWidth <= 576) return 1;   
  if (window.innerWidth <= 768) return 1;  
  if (window.innerWidth <= 1024) return 2;  
  return 3;                                 
}

// Create indicators dynamically
function createIndicators() {
  indicatorsContainer.innerHTML = '';
  slidesPerView = calculateSlidesPerView();
  const totalPages = Math.max(1, slides.length - slidesPerView + 1);

  for (let i = 0; i < totalPages; i++) {
    const dot = document.createElement('span');
    dot.classList.add('banner_two_dot');
    if (i === 0) dot.classList.add('active');
    dot.dataset.index = i;
    indicatorsContainer.appendChild(dot);

    dot.addEventListener('click', e => {
      moveSlider(parseInt(e.target.dataset.index));
    });
  }
}

// Move slider function
function moveSlider(index) {
  slidesPerView = calculateSlidesPerView();

  // মোবাইলের জন্য gap বাদ
  let slideWidth;
  if (window.innerWidth <= 768) {
    slideWidth = slides[0].offsetWidth; // no gap for mobile
  } else {
    slideWidth = slides[0].offsetWidth + 20; // desktop/tablet gap
  }

  const totalSlides = slides.length;
  const maxIndex = totalSlides - slidesPerView;
  const activeIndex = Math.min(index, maxIndex);
  const moveAmount = slideWidth * activeIndex;

  track.style.transform = `translateX(-${moveAmount}px)`;

  // Update indicators
  document.querySelectorAll('.banner_two_dot').forEach(dot => dot.classList.remove('active'));
  document.querySelector(`.banner_two_dot[data-index="${activeIndex}"]`)?.classList.add('active');

  currentIndex = activeIndex;
}

// Auto Slide
setInterval(() => {
  const totalSlides = slides.length;
  const maxIndex = totalSlides - calculateSlidesPerView();
  let newIndex = currentIndex + 1;
  if (newIndex > maxIndex) newIndex = 0;
  moveSlider(newIndex);
}, 4000);

// Resize handle
window.addEventListener('resize', () => {
  createIndicators();
  moveSlider(0);
});

// Initial setup
createIndicators();
moveSlider(0);
