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
    const suffix = el.dataset.suffix ?? '+';
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

// Form submit (contact page) — actually delivers to Formspree, which forwards to the college inbox
function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('button');
  const original = btn.textContent;

  btn.disabled = true;
  btn.textContent = 'Sending…';

  fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  })
    .then(response => {
      if (response.ok) {
        btn.textContent = 'Message Sent ✓';
        btn.style.background = 'var(--green2)';
        form.reset();
      } else {
        btn.textContent = 'Failed — try again';
        btn.style.background = '#b23b3b';
      }
    })
    .catch(() => {
      btn.textContent = 'Failed — check connection';
      btn.style.background = '#b23b3b';
    })
    .finally(() => {
      setTimeout(() => {
        btn.disabled = false;
        btn.textContent = original;
        btn.style.background = '';
      }, 3500);
    });
}
