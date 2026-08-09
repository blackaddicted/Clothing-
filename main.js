/* ==========================================================================
   MAISON NOIR — Shared UI Behavior
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  /* footer year */
  document.querySelectorAll("[data-year]").forEach(el => (el.textContent = new Date().getFullYear()));

  /* mobile nav toggle */
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav-links");
  const navScrim = document.querySelector(".nav-scrim");
  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      nav.classList.toggle("is-open");
      navToggle.classList.toggle("is-open");
      document.body.classList.toggle("nav-open");
    });
    if (navScrim) navScrim.addEventListener("click", () => {
      nav.classList.remove("is-open");
      navToggle.classList.remove("is-open");
      document.body.classList.remove("nav-open");
    });
  }

  /* header shrink + shadow on scroll */
  const header = document.querySelector(".site-header");
  if (header) {
    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* scroll-reveal */
  const revealEls = document.querySelectorAll("[data-reveal]");
  if (revealEls.length && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add("is-visible"));
  }

  /* newsletter form (front-end only) */
  document.querySelectorAll("[data-newsletter-form]").forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const btn = form.querySelector("button");
      const original = btn.textContent;
      btn.textContent = "Subscribed";
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = original;
        btn.disabled = false;
        form.reset();
      }, 2400);
    });
  });
});
