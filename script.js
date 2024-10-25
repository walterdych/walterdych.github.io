document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade-in");
  
    const fadeInOnScroll = () => {
      fadeElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          element.classList.add("show");
        }
      });
    };
  
    // Initial check for elements already in view
    fadeInOnScroll();
  
    // Add scroll event listener for dynamic fade-in as you scroll
    window.addEventListener("scroll", fadeInOnScroll);
  });
  