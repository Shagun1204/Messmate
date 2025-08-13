// Animate header on page load using GSAP
window.addEventListener('DOMContentLoaded', () => {
  gsap.to('#mainHeader', { y: 0, opacity: 1, duration: 1, ease: 'power3.out' });

  // Animate features list items
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray('.features-list li').forEach((el, i) => {
    gsap.fromTo(
      el,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        delay: i * 0.15,
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
        }
      }
    );
  });

  // Animate live feed items
  gsap.utils.toArray('.rating-item, .chat-sample').forEach((el, i) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: i * 0.2,
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
        }
      }
    );
  });
});

// Hamburger toggle
const hamburger = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  const expanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', !expanded);
  navMenu.classList.toggle('open');

  if (navMenu.classList.contains('open')) {
    navMenu.style.display = 'flex';
    navMenu.style.flexDirection = 'column';
    navMenu.style.position = 'absolute';
    navMenu.style.top = '56px';
    navMenu.style.right = '1rem';
    navMenu.style.backgroundColor = '#007BFF';
    navMenu.style.padding = '1rem 2rem';
    navMenu.style.borderRadius = '8px';
    navMenu.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    navMenu.querySelectorAll('a').forEach(link => {
      link.style.color = 'white';
      link.style.margin = '0.5rem 0';
      link.style.fontWeight = '600';
    });
  } else {
    navMenu.style.display = 'none';
  }
});

// Keyboard accessibility for hamburger
hamburger.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    hamburger.click();
  }
});

// Mess name input updates left side
const messNameInput = document.getElementById('messName');
const displayMessName = document.getElementById('displayMessName');
messNameInput.addEventListener('input', () => {
  const val = messNameInput.value.trim();
  displayMessName.textContent = val || 'Hostel A Mess';
});

// Upload image preview
const uploadInput = document.getElementById('uploadInput');
const previewImage = document.getElementById('previewImage');

uploadInput.addEventListener('change', () => {
  const file = uploadInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      previewImage.src = e.target.result;
      previewImage.style.display = 'block';
    };
    reader.readAsDataURL(file);
  } else {
    previewImage.src = '';
    previewImage.style.display = 'none';
  }
});
