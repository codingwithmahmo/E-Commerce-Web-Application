// ── Language Selector Dropdown ──
const langSelector = document.getElementById('langSelector');
const langDropdown = document.getElementById('langDropdown');

langSelector.addEventListener('click', function (e) {
  langSelector.classList.toggle('open');
});

// Close when clicking outside
document.addEventListener('click', function (e) {
  if (!langSelector.contains(e.target)) {
    langSelector.classList.remove('open');
  }
});

// Update selected language on click
langDropdown.querySelectorAll('a').forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    const flag = item.querySelector('img').src;
    const label = item.textContent.trim();

    // Update the selector display
    langSelector.querySelector('img').src = flag;
    langSelector.querySelector('span').textContent = label;

    langSelector.classList.remove('open');
  });
});