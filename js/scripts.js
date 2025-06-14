function handleSubmit(event) {
  event.preventDefault();
  alert("Thanks for your message! This form does not actually send email.");
}

document.addEventListener("DOMContentLoaded", function () {
  const fadeEls = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  fadeEls.forEach(el => observer.observe(el));
});
