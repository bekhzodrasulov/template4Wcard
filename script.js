const elements = document.querySelectorAll(".animate");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, index * 150); // задержка между появлениями
      }
    });
  },
  {
    threshold: 0.1,
  }
);

elements.forEach((el) => observer.observe(el));
