// Simple scroll reveal using IntersectionObserver
export default function initScrollReveal() {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

  const selector = [
    '.section > .container',
    '.videoText',
    '.howRow',
    '.featureGrid',
    '.showcaseRow',
    '.featureIntro .introRow',
    '.aboutRow',
    '.contactGrid'
  ].join(', ');

  const els = Array.from(document.querySelectorAll(selector));
  if (!els.length) return;

  els.forEach((el) => el.classList.add('reveal'));

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // add/remove class so reveal happens each time element enters/leaves viewport
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      } else {
        entry.target.classList.remove('in-view');
      }
    });
  }, { threshold: 0.12 });

  els.forEach((el) => io.observe(el));
}
