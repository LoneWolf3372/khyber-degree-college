// Mobile menu
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => {
      document.getElementById('navLinks').classList.remove('open');
    });
  });

  // Navbar shrink on scroll
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.style.height = window.scrollY > 50 ? '56px' : '68px';
    });
  }

  // Animated counters
  function animateCount(el) {
    const target = +el.dataset.target;
    const suffix = target >= 95 ? '%' : '+';
    let current = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current + suffix;
      if (current >= target) clearInterval(timer);
    }, 24);
  }

  const statsEl = document.querySelector('.stats');
  if (statsEl) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('[data-target]').forEach(animateCount);
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.4 });
    observer.observe(statsEl);
  }
});

// Form submit (contact page)
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  const original = btn.textContent;
  btn.textContent = 'Message Sent ✓';
  btn.style.background = 'var(--green2)';
  setTimeout(() => {
    btn.textContent = original;
    btn.style.background = '';
    e.target.reset();
  }, 3000);
}
