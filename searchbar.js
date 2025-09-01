// JavaScript
const searchIcon = document.getElementById('searchIcon');
const searchPopup = document.getElementById('searchPopup');
const searchClose = document.getElementById('searchClose');

searchIcon.addEventListener('click', () => {
  searchPopup.style.display = 'flex'; // show popup
  document.getElementById('searchInput').focus(); // focus on input
});

searchClose.addEventListener('click', () => {
  searchPopup.style.display = 'none'; // hide popup
});

// Optional: Click outside to close
document.addEventListener('click', (e) => {
  if (!searchPopup.contains(e.target) && !searchIcon.contains(e.target)) {
    searchPopup.style.display = 'none';
  }
});
