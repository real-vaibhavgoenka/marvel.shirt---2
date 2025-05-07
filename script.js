// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Sticky Navbar
  window.addEventListener('scroll', function () {
    const header = document.querySelector('.main-header');
    header.classList.toggle('sticky', window.scrollY > 100);
  });
  
  document.getElementById('bulkForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = this.storeName.value.trim();
    const email = this.email.value.trim();
    const phone = this.phone.value.trim();
    const message = this.message.value.trim();
  
    if (!name || !email || !phone || !message) {
      showToast("Please fill in all fields.");
      return;
    }
  
    showToast("Thanks! We’ve received your request. We'll get back to you soon.");
    this.reset();
  });
  