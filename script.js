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
    const categorySelect = document.querySelector('.category-select');
    const categoryItems = categorySelect.querySelectorAll('.category-dropdown-menu a');
    const selectedCategorySpan = document.getElementById('selected-category');

    categorySelect.addEventListener('click', function (e) {
      e.stopPropagation();
      this.classList.toggle('open');
    });

    categoryItems.forEach(function (item) {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        const categoryName = this.getAttribute('data-category');
        selectedCategorySpan.textContent = categoryName;
        categorySelect.classList.remove('open');
      });
    });

    document.addEventListener('click', function (e) {
      if (!categorySelect.contains(e.target)) {
        categorySelect.classList.remove('open');
      }
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

    /* ═══════════════════════════════════════════════════════════════════════ */
    /* MAIN PAGE CONTENT SCRIPTS - Interactive elements and functionality */
    /* ═══════════════════════════════════════════════════════════════════════ */

    // ── REQUEST FORM SUBMISSION ──
    // This handles the inquiry form submission on the request banner
    const requestForm = document.getElementById('requestForm');
    if (requestForm) {
      requestForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const input = this.querySelector('input');
        const searchTerm = input.value.trim();

        if (searchTerm) {
          // Display success message
          alert('Inquiry sent: "' + searchTerm + '"\n\nOur team will review your request and send you relevant suppliers soon!');
          input.value = ''; // Clear input field after submission
        } else {
          // Focus input if empty
          input.focus();
        }
      });
    }

    // ── ADD TO CART FUNCTIONALITY ──
    // This handles all "Add to cart" button clicks across product cards
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(function (button) {
      button.addEventListener('click', function (e) {
        e.preventDefault();

        // Get product name from the product card
        const productCard = this.closest('.product-card');
        const productName = productCard.querySelector('.product-name').textContent;
        const price = productCard.querySelector('.current-price').textContent;

        // Show confirmation and update button temporarily
        const originalText = this.textContent;
        this.textContent = '✓ Added to cart';
        this.style.background = '#4caf50';

        // Reset button after 2 seconds
        setTimeout(() => {
          this.textContent = originalText;
          this.style.background = '';
        }, 2000);

        // Log for debugging (in real app, send to backend)
        console.log('Added to cart:', {
          name: productName,
          price: price,
          timestamp: new Date()
        });
      });
    });

    // ── CATEGORY CARD CLICK HANDLER ──
    // This handles navigation when clicking on category cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(function (card) {
      card.addEventListener('click', function () {
        const categoryName = this.querySelector('h3').textContent;
        alert('Opening ' + categoryName + ' category\n\nNavigating to category page...');
        // In real app: window.location.href = '/category/' + categoryName.toLowerCase();
      });
    });

    // ── HERO BUTTON SCROLL ──
    // This scrolls to the products section when clicking "Learn more"
    const heroBtn = document.querySelector('.hero-btn');
    if (heroBtn) {
      heroBtn.addEventListener('click', function () {
        const productsSection = document.querySelector('.products-section');
        if (productsSection) {
          productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }

    // ── SERVICE CARD INTERACTIONS ──
    // This adds hover effect and click handlers to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(function (card) {
      card.addEventListener('click', function () {
        const serviceName = this.querySelector('h3').textContent;
        alert('Learn more about:\n\n' + serviceName + '\n\nConnecting you to more information...');
      });
    });

    // ── PRODUCT IMAGE LAZY LOAD SIMULATION ──
    // This shows a loading animation for product images
    const productImages = document.querySelectorAll('.product-image img');
    productImages.forEach(function (img) {
      img.addEventListener('load', function () {
        this.style.opacity = '1';
        this.style.transition = 'opacity 0.3s ease';
      });

      // Set initial opacity
      if (img.complete) {
        img.style.opacity = '1';
      } else {
        img.style.opacity = '0.5';
      }
    });

    // ── VIEW ALL LINKS ──
    // This handles "View all" section links
    const viewAllLinks = document.querySelectorAll('.view-all-link');
    viewAllLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const sectionTitle = this.closest('.section-header').querySelector('h2').textContent;
        alert('Viewing all products in: ' + sectionTitle + '\n\nLoading complete product list...');
      });
    });

    // ── PRODUCT CARD QUICK VIEW ──
    // This allows quick preview when hovering product card (optional enhancement)
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(function (card) {
      card.addEventListener('mouseenter', function () {
        // Optional: Add animation or effects on hover
        console.log('Hovering product:', this.querySelector('.product-name').textContent);
      });
    });

document.addEventListener('DOMContentLoaded', () => {
  const categoryItems = document.querySelectorAll('.category-item');
 
  categoryItems.forEach(item => {
    item.addEventListener('click', () => {
      // Remove active from all
      categoryItems.forEach(i => i.classList.remove('active'));
      // Set active on clicked
      item.classList.add('active');
    });
  });
});


const now = new Date();
const target = new Date(
  now.getTime() +
  (4 * 24 * 60 * 60 * 1000) +
  (13 * 60 * 60 * 1000) +
  (34 * 60 * 1000) +
  (56 * 1000)
);
 
function pad(n) {
  return String(n).padStart(2, '0');
}
 
function updateCountdown() {
  const diff = target - new Date();
 
  if (diff <= 0) {
    document.getElementById('days').textContent    = '00';
    document.getElementById('hours').textContent   = '00';
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    return;
  }
 
  const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours   = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
 
  document.getElementById('days').textContent    = pad(days);
  document.getElementById('hours').textContent   = pad(hours);
  document.getElementById('minutes').textContent = pad(minutes);
  document.getElementById('seconds').textContent = pad(seconds);
}
 
updateCountdown();
setInterval(updateCountdown, 1000);