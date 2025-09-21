// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const body = document.body;

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem("theme") || "light";
body.setAttribute("data-theme", currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener("click", () => {
  const currentTheme = body.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  body.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateThemeIcon(newTheme);
  updateNavbarOnScroll(); // Update navbar immediately when theme changes
});

function updateThemeIcon(theme) {
  if (theme === "dark") {
    themeIcon.className = "fas fa-sun";
  } else {
    themeIcon.className = "fas fa-moon";
  }
}

function updateNavbarOnScroll() {
  const navbar = document.querySelector(".navbar");
  const currentTheme = body.getAttribute("data-theme");

  if (window.scrollY > 50) {
    if (currentTheme === "dark") {
      navbar.style.background = "rgba(26, 26, 26, 0.98)";
      navbar.style.boxShadow = "0 2px 30px rgba(0, 0, 0, 0.3)";
    } else {
      navbar.style.background = "rgba(255, 255, 255, 0.98)";
      navbar.style.boxShadow = "0 2px 30px rgba(0, 0, 0, 0.15)";
    }
  } else {
    if (currentTheme === "dark") {
      navbar.style.background = "rgba(26, 26, 26, 0.95)";
      navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.2)";
    } else {
      navbar.style.background = "rgba(255, 255, 255, 0.95)";
      navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
    }
  }
}

// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Navbar background change on scroll
window.addEventListener("scroll", updateNavbarOnScroll);

// Active navigation link highlighting
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Project filtering functionality
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    // Add active class to clicked button
    button.classList.add("active");

    const filterValue = button.getAttribute("data-filter");

    projectCards.forEach((card) => {
      if (
        filterValue === "all" ||
        card.getAttribute("data-category") === filterValue
      ) {
        card.style.display = "block";
        card.style.animation = "fadeIn 0.5s ease-in";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Project modal functionality
function openProjectModal(projectType) {
  const modal = document.getElementById("projectModal");
  const modalContent = document.getElementById("modalContent");

  let content = "";

  switch (projectType) {
    case "apadana":
      content = `
                <h2>Apadana Hospital</h2>
                <div class="project-gallery">
                    <img src="Projects/Apadana Hospital/26.png" alt="Apadana Hospital" style="width: 100%; margin-bottom: 1rem; border-radius: 8px;">
                    <div class="gallery-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;">
                        <img src="Projects/Apadana Hospital/28.png" alt="Hospital Design" style="width: 100%; border-radius: 8px;">
                        <img src="Projects/Apadana Hospital/29.png" alt="Hospital Interior" style="width: 100%; border-radius: 8px;">
                        <img src="Projects/Apadana Hospital/30.png" alt="Hospital Layout" style="width: 100%; border-radius: 8px;">
                        <img src="Projects/Apadana Hospital/31.png" alt="Hospital Exterior" style="width: 100%; border-radius: 8px;">
                        <img src="Projects/Apadana Hospital/32.png" alt="Hospital Facade" style="width: 100%; border-radius: 8px;">
                        <img src="Projects/Apadana Hospital/33.png" alt="Hospital Plan" style="width: 100%; border-radius: 8px;">
                    </div>
                </div>
                <div class="project-details" style="margin-top: 2rem;">
                    <h3>Project Overview</h3>
                    <p>A modern healthcare facility designed with patient comfort and operational efficiency in mind. The hospital features state-of-the-art medical equipment integration, sustainable design principles, and a healing environment that promotes patient recovery.</p>
                    <h4>Key Features:</h4>
                    <ul style="margin-left: 2rem; margin-top: 1rem;">
                        <li>Modern medical equipment integration</li>
                        <li>Sustainable and eco-friendly design</li>
                        <li>Patient-centered layout</li>
                        <li>Efficient staff workflow optimization</li>
                        <li>Advanced HVAC systems</li>
                        <li>Accessibility compliance</li>
                    </ul>
                    <h4>Project Details:</h4>
                    <p><strong>Location:</strong> Tehran, Iran<br>
                    <strong>Year:</strong> 2023<br>
                    <strong>Area:</strong> 15,000 sqm<br>
                    <strong>Type:</strong> Healthcare Facility</p>
                </div>
            `;
      break;
    case "residential":
      content = `
                <h2>Residential Complex</h2>
                <div class="project-gallery">
                    <img src="Projects/Residential Complex/34.png" alt="Residential Complex" style="width: 100%; margin-bottom: 1rem; border-radius: 8px;">
                    <div class="gallery-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
                        <img src="Projects/Residential Complex/36.png" alt="Residential Design" style="width: 100%; border-radius: 8px;">
                        <img src="Projects/Residential Complex/37.png" alt="Residential Layout" style="width: 100%; border-radius: 8px;">
                        <img src="Projects/Residential Complex/38.png" alt="Residential Exterior" style="width: 100%; border-radius: 8px;">
                        <img src="Projects/Residential Complex/39.png" alt="Residential Plan" style="width: 100%; border-radius: 8px;">
                    </div>
                </div>
                <div class="project-details" style="margin-top: 2rem;">
                    <h3>Project Overview</h3>
                    <p>A contemporary residential development that combines modern living with sustainable design principles. The complex features spacious apartments, green spaces, and community amenities designed to enhance residents' quality of life.</p>
                    <h4>Key Features:</h4>
                    <ul style="margin-left: 2rem; margin-top: 1rem;">
                        <li>Sustainable building materials</li>
                        <li>Energy-efficient design</li>
                        <li>Community green spaces</li>
                        <li>Modern amenities</li>
                        <li>Parking and storage solutions</li>
                        <li>Security systems</li>
                    </ul>
                    <h4>Project Details:</h4>
                    <p><strong>Location:</strong> Tehran, Iran<br>
                    <strong>Year:</strong> 2022<br>
                    <strong>Units:</strong> 120 Apartments<br>
                    <strong>Type:</strong> Residential Complex</p>
                </div>
            `;
      break;
    case "dormitory":
      content = `
                <h2>Girls Dormitory</h2>
                <div class="project-gallery">
                    <img src="Projects/Girls Dormitory/14.png" alt="Girls Dormitory" style="width: 100%; margin-bottom: 1rem; border-radius: 8px;">
                    <div class="gallery-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;">
                        <img src="Projects/Girls Dormitory/16.png" alt="Dormitory Design" style="width: 100%; border-radius: 8px;">
                        <img src="Projects/Girls Dormitory/17.png" alt="Dormitory Interior" style="width: 100%; border-radius: 8px;">
                        <img src="Projects/Girls Dormitory/18.png" alt="Dormitory Layout" style="width: 100%; border-radius: 8px;">
                        <img src="Projects/Girls Dormitory/19.png" alt="Dormitory Exterior" style="width: 100%; border-radius: 8px;">
                        <img src="Projects/Girls Dormitory/20.png" alt="Dormitory Facade" style="width: 100%; border-radius: 8px;">
                        <img src="Projects/Girls Dormitory/21.png" alt="Dormitory Plan" style="width: 100%; border-radius: 8px;">
                    </div>
                </div>
                <div class="project-details" style="margin-top: 2rem;">
                    <h3>Project Overview</h3>
                    <p>An educational residential facility designed specifically for female students. The dormitory provides a safe, comfortable, and conducive environment for learning and community building, with modern amenities and study spaces.</p>
                    <h4>Key Features:</h4>
                    <ul style="margin-left: 2rem; margin-top: 1rem;">
                        <li>Student-centered design</li>
                        <li>Study and common areas</li>
                        <li>Security and safety systems</li>
                        <li>Modern dormitory facilities</li>
                        <li>Community building spaces</li>
                        <li>Accessibility features</li>
                    </ul>
                    <h4>Project Details:</h4>
                    <p><strong>Location:</strong> Tehran, Iran<br>
                    <strong>Year:</strong> 2021<br>
                    <strong>Capacity:</strong> 200 Students<br>
                    <strong>Type:</strong> Educational Residential</p>
                </div>
            `;
      break;
    case "cafe":
      content = `
                <h2>Modern Cafe</h2>
                <div class="project-gallery">
                    <img src="Projects/Cafe/40.png" alt="Modern Cafe" style="width: 100%; margin-bottom: 1rem; border-radius: 8px;">
                    <div class="gallery-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
                        <img src="Projects/Cafe/42.png" alt="Cafe Design" style="width: 100%; border-radius: 8px;">
                        <img src="Projects/Cafe/43.png" alt="Cafe Interior" style="width: 100%; border-radius: 8px;">
                        <img src="Projects/Cafe/44.png" alt="Cafe Layout" style="width: 100%; border-radius: 8px;">
                        <img src="Projects/Cafe/45.png" alt="Cafe Exterior" style="width: 100%; border-radius: 8px;">
                        <img src="Projects/Cafe/46.png" alt="Cafe Facade" style="width: 100%; border-radius: 8px;">
                        <img src="Projects/Cafe/47.png" alt="Cafe Plan" style="width: 100%; border-radius: 8px;">
                    </div>
                </div>
                <div class="project-details" style="margin-top: 2rem;">
                    <h3>Project Overview</h3>
                    <p>A contemporary café design that creates a warm and inviting atmosphere for customers. The space is designed to maximize comfort and efficiency while maintaining an aesthetic appeal that reflects modern café culture.</p>
                    <h4>Key Features:</h4>
                    <ul style="margin-left: 2rem; margin-top: 1rem;">
                        <li>Warm and inviting atmosphere</li>
                        <li>Efficient space utilization</li>
                        <li>Modern interior design</li>
                        <li>Customer comfort focus</li>
                        <li>Flexible seating arrangements</li>
                        <li>Kitchen workflow optimization</li>
                    </ul>
                    <h4>Project Details:</h4>
                    <p><strong>Location:</strong> Tehran, Iran<br>
                    <strong>Year:</strong> 2020<br>
                    <strong>Area:</strong> 150 sqm<br>
                    <strong>Type:</strong> Commercial Café</p>
                </div>
            `;
      break;
    case "facade":
      content = `
                <h2>Facade Modeling</h2>
                <div class="project-gallery">
                    <img src="Projects/Facade Modeling/6.png" alt="Facade Modeling" style="width: 100%; margin-bottom: 1rem; border-radius: 8px;">
                    <div class="gallery-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
                        <img src="Projects/Facade Modeling/8.png" alt="Facade Design" style="width: 100%; border-radius: 8px;">
                        <img src="Projects/Facade Modeling/9.png" alt="Facade Model" style="width: 100%; border-radius: 8px;">
                        <img src="Projects/Facade Modeling/10.png" alt="Facade Detail" style="width: 100%; border-radius: 8px;">
                        <img src="Projects/Facade Modeling/11.png" alt="Facade Render" style="width: 100%; border-radius: 8px;">
                        <img src="Projects/Facade Modeling/12.png" alt="Facade View" style="width: 100%; border-radius: 8px;">
                        <img src="Projects/Facade Modeling/13.png" alt="Facade Plan" style="width: 100%; border-radius: 8px;">
                    </div>
                </div>
                <div class="project-details" style="margin-top: 2rem;">
                    <h3>Project Overview</h3>
                    <p>Innovative building facade design that combines modern architectural elements with functional requirements. The facade modeling project demonstrates advanced 3D modeling techniques and contemporary design principles.</p>
                    <h4>Key Features:</h4>
                    <ul style="margin-left: 2rem; margin-top: 1rem;">
                        <li>Modern architectural elements</li>
                        <li>3D modeling and visualization</li>
                        <li>Material selection and integration</li>
                        <li>Energy efficiency considerations</li>
                        <li>Structural integration</li>
                        <li>Environmental responsiveness</li>
                    </ul>
                    <h4>Project Details:</h4>
                    <p><strong>Location:</strong> Tehran, Iran<br>
                    <strong>Year:</strong> 2019<br>
                    <strong>Area:</strong> 2,500 sqm<br>
                    <strong>Type:</strong> Facade Design</p>
                </div>
            `;
      break;
  }

  modalContent.innerHTML = content;
  modal.style.display = "block";
  document.body.style.overflow = "hidden"; // Prevent background scrolling
}

function closeProjectModal() {
  const modal = document.getElementById("projectModal");
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // Restore scrolling
}

// Close modal when clicking outside of it
window.addEventListener("click", (event) => {
  const modal = document.getElementById("projectModal");
  if (event.target === modal) {
    closeProjectModal();
  }
});

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  const animateElements = document.querySelectorAll(
    ".skill-category, .project-card, .stat, .contact-info"
  );
  animateElements.forEach((el) => {
    el.classList.add("fade-in");
    observer.observe(el);
  });
});

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = "";

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// Initialize typing animation when page loads
window.addEventListener("load", () => {
  const heroTitle = document.querySelector(".hero-title");
  if (heroTitle) {
    const originalText = heroTitle.textContent;
    typeWriter(heroTitle, originalText, 150);
  }
});

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector(".hero");
  if (hero) {
    const rate = scrolled * -0.5;
    hero.style.transform = `translateY(${rate}px)`;
  }
});

// Skills animation on scroll
const skillsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const skillItems = entry.target.querySelectorAll(".skill-item");
        skillItems.forEach((item, index) => {
          setTimeout(() => {
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
          }, index * 100);
        });
      }
    });
  },
  { threshold: 0.3 }
);

document.addEventListener("DOMContentLoaded", () => {
  const skillCategories = document.querySelectorAll(".skill-category");
  skillCategories.forEach((category) => {
    const skillItems = category.querySelectorAll(".skill-item");
    skillItems.forEach((item) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(20px)";
      item.style.transition = "all 0.5s ease";
    });
    skillsObserver.observe(category);
  });
});

// Mobile menu animation
function toggleHamburger() {
  const bars = document.querySelectorAll(".bar");
  bars.forEach((bar, index) => {
    if (hamburger.classList.contains("active")) {
      if (index === 0)
        bar.style.transform = "rotate(-45deg) translate(-5px, 6px)";
      if (index === 1) bar.style.opacity = "0";
      if (index === 2)
        bar.style.transform = "rotate(45deg) translate(-5px, -6px)";
    } else {
      bar.style.transform = "none";
      bar.style.opacity = "1";
    }
  });
}

hamburger.addEventListener("click", toggleHamburger);

// Performance optimization: Lazy loading for images
const images = document.querySelectorAll('img[loading="lazy"]');
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.src || img.dataset.src;
      imageObserver.unobserve(img);
    }
  });
});

images.forEach((img) => imageObserver.observe(img));

// Error handling for images
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("error", function () {
    this.style.display = "none";
    console.warn("Image failed to load:", this.src);
  });
});

// Keyboard navigation support
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeProjectModal();
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
});

// Portfolio download handling
document.addEventListener("DOMContentLoaded", () => {
  const downloadBtn = document.querySelector(
    'a[href*="AnitaJavadiportfolio.pdf"]'
  );

  if (downloadBtn) {
    downloadBtn.addEventListener("click", (e) => {
      // Check if file exists
      fetch("AnitaJavadiportfolio.pdf", { method: "HEAD" })
        .then((response) => {
          if (!response.ok) {
            e.preventDefault();
            alert(
              "Portfolio file not found. Please make sure 'AnitaJavadiportfolio.pdf' is in the same folder as the website files."
            );
          }
        })
        .catch((error) => {
          console.log("Portfolio download error:", error);
        });
    });
  }
});

// Service Worker registration for PWA capabilities (optional)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => console.log("SW registered"))
      .catch((registrationError) => console.log("SW registration failed"));
  });
}
