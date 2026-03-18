const dropdown = document.querySelector('.dropdown');
    const dropdownToggle = dropdown.querySelector('.dropdown-toggle');

    dropdownToggle.addEventListener('click', function (e) {
      e.preventDefault();
      dropdown.classList.toggle('open');
    });

    document.addEventListener('click', function (e) {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
      }
    });

    // ── Category Select ──
    document.querySelector('.category-select').addEventListener('click', function () {
      alert('Category dropdown — connect your own menu here!');
    });

    // ── Language / Ship To ──
    document.querySelector('.lang-select').addEventListener('click', function () {
      alert('Language & currency selector — connect your own logic here!');
    });

    document.querySelector('.ship-select').addEventListener('click', function () {
      alert('Ship to selector — connect your own logic here!');
    });

    // ── Search ──
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

    searchInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') searchBtn.click();
    });

    // ── Footer Language Selector ──
    const langSelector = document.getElementById('langSelector');
    const langDropdown = document.getElementById('langDropdown');

    langSelector.addEventListener('click', function (e) {
      e.stopPropagation();
      langSelector.classList.toggle('open');
    });

    document.addEventListener('click', function (e) {
      if (!langSelector.contains(e.target)) {
        langSelector.classList.remove('open');
      }
    });

    langDropdown.querySelectorAll('a').forEach(function (item) {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        const flag = item.querySelector('img').src;
        const label = item.textContent.trim();
        langSelector.querySelector('img').src = flag;
        langSelector.querySelector('span').textContent = label;
        langSelector.classList.remove('open');
      });
    });