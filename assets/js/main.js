// Elisabeth Kasanzewa — Portfolio interactions

document.addEventListener('DOMContentLoaded', () => {

  /* Header scroll state */
  const header = document.querySelector('.site-header');
  const onScroll = () => {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 12);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* Mobile nav toggle */
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('is-open');
      const isOpen = nav.classList.contains('is-open');
      toggle.setAttribute('aria-expanded', isOpen);
      toggle.textContent = isOpen ? '✕' : '☰';
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.textContent = '☰';
    }));
  }

  /* Berlin live clock */
  const clockEl = document.getElementById('liveClock');
  if (clockEl) {
    const updateClock = () => {
      const now = new Date();
      const time = new Intl.DateTimeFormat('de-DE', {
        hour: '2-digit', minute: '2-digit', second: '2-digit',
        timeZone: 'Europe/Berlin', hour12: false
      }).format(now);
      clockEl.textContent = time;
    };
    updateClock();
    setInterval(updateClock, 1000);
  }

  /* Scroll reveal */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

});
