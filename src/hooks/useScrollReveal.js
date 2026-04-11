import { useEffect, useRef } from 'react';

let lastScrollY = 0;
let scrollDirection = 'down';

function updateScrollDirection() {
  const currentY = window.scrollY;
  scrollDirection = currentY > lastScrollY ? 'down' : 'up';
  lastScrollY = currentY;
}

window.addEventListener('scroll', updateScrollDirection, { passive: true });

export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const children = el.querySelectorAll('.reveal-item');

        if (entry.isIntersecting) {
          el.setAttribute('data-direction', scrollDirection);
          el.classList.add('revealed');
          children.forEach((child, i) => {
            setTimeout(() => child.classList.add('revealed'), 150 * (i + 1));
          });
        } else {
          el.classList.remove('revealed');
          el.removeAttribute('data-direction');
          children.forEach((child) => child.classList.remove('revealed'));
        }
      },
      { threshold: options.threshold ?? 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options.threshold]);

  return ref;
}
