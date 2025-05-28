console.log("Portfolio loaded successfully.");
document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-question");

  // Set initial state for all toggles
  document.querySelectorAll(".faq-toggle").forEach((toggle) => {
    toggle.textContent = "▲";
  });

  // Set border-left immediately when DOM is loaded to avoid horizontal animation
  document.querySelectorAll(".faq-answer").forEach((answer) => {
    answer.style.borderLeft = "0 solid #ca7842";
  });

  faqItems.forEach((item) => {
    item.addEventListener("click", function () {
      const parent = this.parentNode;
      const answer = this.nextElementSibling;
      const toggle = this.querySelector(".faq-toggle");

      // Check if this FAQ item is already open
      const isOpen = parent.classList.contains("active");

      // Close all FAQ items
      document.querySelectorAll(".faq-item").forEach((el) => {
        const elAnswer = el.querySelector(".faq-answer");

        // Set max-height to current value before collapsing for smooth animation
        if (el.classList.contains("active")) {
          elAnswer.style.maxHeight = elAnswer.scrollHeight + "px";
          // Force reflow
          elAnswer.offsetHeight;
          elAnswer.style.maxHeight = "0";
        }

        el.classList.remove("active");
        el.querySelector(".faq-toggle").textContent = "▲";
      });

      // If the clicked item wasn't open, open it
      if (!isOpen) {
        parent.classList.add("active");
        // Set max-height for smooth vertical animation
        requestAnimationFrame(() => {
          answer.style.maxHeight = answer.scrollHeight + "px";
        });

        toggle.textContent = "▲";
      }
    });
  });
});
