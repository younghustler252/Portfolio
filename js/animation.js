
 const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show'); // Re-trigger when it comes back
    }
  });
}, {
  threshold: 0.2,
});

document.querySelectorAll('.autoBlur, .autoDisplay').forEach(el => {
  observer.observe(el);
});


