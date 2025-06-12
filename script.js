// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Add scroll animation for elements
const observerOptions = {
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});

// Add mobile menu functionality
const createMobileMenu = () => {
  const nav = document.querySelector("nav");
  const mobileMenuButton = document.createElement("button");
  mobileMenuButton.classList.add("mobile-menu-button");
  mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';

  nav.appendChild(mobileMenuButton);

  mobileMenuButton.addEventListener("click", () => {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("show");
  });
};

// Initialize mobile menu if screen width is small
if (window.innerWidth <= 768) {
  createMobileMenu();
}

// Add window resize listener
window.addEventListener("resize", () => {
  if (window.innerWidth <= 768) {
    if (!document.querySelector(".mobile-menu-button")) {
      createMobileMenu();
    }
  }
});

// Add scroll to top button
const createScrollTopButton = () => {
  const button = document.createElement("div");
  button.className = "scroll-top";
  button.innerHTML = '<i class="fas fa-arrow-up"></i>';
  document.body.appendChild(button);

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      button.classList.add("visible");
    } else {
      button.classList.remove("visible");
    }
  });

  button.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
};

// Initialize scroll to top button
createScrollTopButton();

// Add typing animation to hero text
const typingText = document.querySelector(".typing-text");
if (typingText) {
  const text = typingText.textContent;
  typingText.textContent = "";
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      typingText.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }

  typeWriter();
}
