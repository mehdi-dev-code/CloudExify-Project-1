// =========================================================
// FOOTER YEAR
// =========================================================
document.getElementById('year').textContent = new Date().getFullYear();

// =========================================================
// MOBILE NAV TOGGLE
// =========================================================
const hamburger = document.getElementById('hamburger');
const hamburgerIcon = document.getElementById('hamburgerIcon');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('active');
  hamburger.setAttribute('aria-expanded', String(isOpen));
  hamburgerIcon.textContent = isOpen ? '×' : '≡';
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburgerIcon.textContent = '≡';
  });
});

// =========================================================
// BOOT SEQUENCE (runs once on load)
// =========================================================
const bootLines = [
  '[ok] loading kernel modules...',
  '[ok] mounting ~/mehdi...',
  '[ok] starting session: full-stack-developer',
  'connecting to portfolio.mehdi... done'
];

function runBootSequence() {
  const el = document.getElementById('bootLog');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    el.innerHTML = bootLines.map(l => `<div class="boot-line boot-ok" style="opacity:1">${l}</div>`).join('');
    return;
  }

  bootLines.forEach((line, i) => {
    const div = document.createElement('div');
    div.className = 'boot-line boot-ok';
    div.textContent = line;
    div.style.animationDelay = `${i * 180}ms`;
    el.appendChild(div);
  });
}
runBootSequence();

// =========================================================
// HERO TYPEWRITER (loops through role lines)
// =========================================================
const phrases = [
  'Full Stack MERN Developer',
  'AI-Integrated Web Builder',
  'Turning Ideas into Deployed Apps'
];
let pIndex = 0;
let charIndex = 0;
let deleting = false;
const typedEl = document.getElementById('typedText');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function typeLoop() {
  const current = phrases[pIndex];

  if (!deleting) {
    typedEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1500);
      return;
    }
    setTimeout(typeLoop, 65);
  } else {
    typedEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      deleting = false;
      pIndex = (pIndex + 1) % phrases.length;
      setTimeout(typeLoop, 300);
      return;
    }
    setTimeout(typeLoop, 30);
  }
}

if (prefersReducedMotion) {
  typedEl.textContent = phrases[0];
} else {
  typeLoop();
}

// =========================================================
// SCROLL-TRIGGERED SKILL BARS (animate once, when visible)
// =========================================================
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target.querySelector('.bar-fill');
      const percent = entry.target.dataset.percent;
      fill.style.width = percent + '%';
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll('.skill').forEach(el => skillObserver.observe(el));

// =========================================================
// PROJECT TECH-TAG FILTER
// =========================================================
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const emptyState = document.getElementById('emptyState');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    let visibleCount = 0;

    projectCards.forEach(card => {
      const tags = card.dataset.tags.split(',');
      const show = filter === 'all' || tags.includes(filter);
      card.style.display = show ? '' : 'none';
      if (show) visibleCount++;
    });

    emptyState.hidden = visibleCount !== 0;
  });
});

// =========================================================
// CONTACT FORM VALIDATION (no backend yet — Month 2)
// =========================================================
const contactForm = document.getElementById('contactForm');
const formError = document.getElementById('formError');
const formSuccess = document.getElementById('formSuccess');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  formError.hidden = true;
  formSuccess.hidden = true;

  if (name === '' || message === '') {
    formError.textContent = '> error: --name and --message cannot be empty.';
    formError.hidden = false;
    return;
  }

  if (!emailPattern.test(email)) {
    formError.textContent = '> error: --email is not a valid address.';
    formError.hidden = false;
    return;
  }

  // No backend yet (Month 2 adds this) — simulate a successful submission
  formSuccess.hidden = false;
  contactForm.reset();
});
