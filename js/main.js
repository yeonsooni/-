/* ============================================================
   보광중앙교회 - main.js
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Header shrink on scroll ---------- */
  const header = document.getElementById('header');
  const onScroll = () => {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu toggle ---------- */
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      nav.classList.toggle('open');
    });
    // close menu when a real link (not a dropdown parent) is tapped
    nav.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        toggle.classList.remove('active');
        nav.classList.remove('open');
      });
    });
  }

  /* ---------- Hero slider ---------- */
  const slides = document.querySelectorAll('.hero-slide');
  const dotsWrap = document.getElementById('heroDots');
  if (slides.length && dotsWrap) {
    let current = 0;
    let timer = null;

    // build dots
    slides.forEach((_, i) => {
      const b = document.createElement('button');
      b.setAttribute('aria-label', `슬라이드 ${i + 1}`);
      if (i === 0) b.classList.add('active');
      b.addEventListener('click', () => go(i, true));
      dotsWrap.appendChild(b);
    });
    const dots = dotsWrap.querySelectorAll('button');

    function go(idx, manual) {
      slides[current].classList.remove('active');
      dots[current].classList.remove('active');
      current = (idx + slides.length) % slides.length;
      slides[current].classList.add('active');
      dots[current].classList.add('active');
      if (manual) restart();
    }
    function next() { go(current + 1); }
    function restart() {
      clearInterval(timer);
      timer = setInterval(next, 6000);
    }
    restart();
  }

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll(
    '.section-head, .welcome-grid, .worship-card, .sermon-card, .panel, .ministry-card, .quick-item, .cta .container'
  );
  if ('IntersectionObserver' in window) {
    revealEls.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(28px)';
      el.style.transition = 'opacity .7s ease, transform .7s ease';
    });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.style.opacity = '1';
            e.target.style.transform = 'translateY(0)';
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => io.observe(el));
  }
})();
