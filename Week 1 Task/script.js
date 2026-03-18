// ── Help Dropdown Toggle ──
const dropdown = document.querySelector('.dropdown');
const dropdownToggle = dropdown.querySelector('.dropdown-toggle');

dropdownToggle.addEventListener('click', function (e) {
  e.preventDefault();
  dropdown.classList.toggle('open');
});

// Close dropdown when clicking outside
document.addEventListener('click', function (e) {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove('open');
  }
});


// ── Category Select (placeholder interaction) ──
const categorySelect = document.querySelector('.category-select');

categorySelect.addEventListener('click', function () {
  alert('Category dropdown — connect your own menu here!');
});


// ── Language / Ship To (placeholder interaction) ──
document.querySelector('.lang-select').addEventListener('click', function () {
  alert('Language & currency selector — connect your own logic here!');
});

document.querySelector('.ship-select').addEventListener('click', function () {
  alert('Ship to selector — connect your own logic here!');
});


// ── Search Button ──
const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-bar input');

searchBtn.addEventListener('click', function () {
  const query = searchInput.value.trim();
  if (query) {
    alert(`Searching for: "${query}"`);
  } else {
    searchInput.focus();
  }
});

// Also trigger on Enter key
searchInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    searchBtn.click();
  }
});