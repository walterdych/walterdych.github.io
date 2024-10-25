document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".fade-in");

  const fadeInOnScroll = () => {
    fadeElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        element.classList.add("show");
      } else {
        element.classList.remove("show");
      }
    });
  };

  // Initial check to show elements already in view
  fadeInOnScroll();

  // Add scroll event listener
  window.addEventListener("scroll", fadeInOnScroll);
});
