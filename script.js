console.log("Portfolio loaded successfully.");

document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-question");

  // Set initial state for all toggles
  document.querySelectorAll(".faq-toggle").forEach((toggle) => {
    toggle.textContent = "▲";
  });

  faqItems.forEach((item) => {
    item.addEventListener("click", function () {
      const parent = this.parentNode;
      const answer = this.nextElementSibling;
      const toggle = this.querySelector(".faq-toggle");

      const isOpen = parent.classList.contains("active");

      // Close all FAQ items
      document.querySelectorAll(".faq-item").forEach((el) => {
        const elAnswer = el.querySelector(".faq-answer");
        if (el.classList.contains("active")) {
          elAnswer.style.maxHeight = elAnswer.scrollHeight + "px";
          elAnswer.offsetHeight; // trigger reflow
          elAnswer.style.maxHeight = "0";
        }
        el.classList.remove("active");
        el.querySelector(".faq-toggle").textContent = "▲";
      });

      if (!isOpen) {
        parent.classList.add("active");
        requestAnimationFrame(() => {
          answer.style.maxHeight = answer.scrollHeight + "px";
        });
        toggle.textContent = "▲";
      }
    });
  });

  // Resize listener to update open answer height
  window.addEventListener("resize", () => {
    const activeItem = document.querySelector(".faq-item.active .faq-answer");
    if (activeItem) {
      activeItem.style.maxHeight = activeItem.scrollHeight + "px";
    }
  });
});
