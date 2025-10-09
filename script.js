    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });


      // Simple slideshow logic
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let index = 0, interval;

    function showSlide(i) {
      slides.forEach((slide, idx) => {
        slide.style.opacity = (idx === i) ? '1' : '0';
        dots[idx].style.opacity = (idx === i) ? '0.8' : '0.25';
      });
      index = i;
    }
    function nextSlide() {
      showSlide((index + 1) % slides.length);
    }
    // Automatic slideshow
    interval = setInterval(nextSlide, 4000);
    // Dot navigation
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        showSlide(i);
        clearInterval(interval);
        interval = setInterval(nextSlide, 4000);
      });
    });

    // Initial display
    showSlide(0);
