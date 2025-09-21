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
                <h2>بیمارستان آپادانا</h2>
                <div class="project-gallery">
                    <img src="Projects/Apadana Hospital/26.png" alt="بیمارستان آپادانا" style="width: 100%; margin-bottom: 1rem; border-radius: 8px;">
                    <div class="gallery-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;">
                        <img src="Projects/Apadana Hospital/28.png" alt="طراحی بیمارستان" style="width: 100%; border-radius: 8px;">
                        <img src="Projects/Apadana Hospital/29.png" alt="دکوراسیون داخلی بیمارستان" style="width: 100%; border-radius: 8px;">
                        <img src="Projects/Apadana Hospital/30.png" alt="چیدمان بیمارستان" style="width: 100%; border-radius: 8px;">
                        <img src="Projects/Apadana Hospital/31.png" alt="نمای خارجی بیمارستان" style="width: 100%; border-radius: 8px;">
                        <img src="Projects/Apadana Hospital/32.png" alt="نمای بیمارستان" style="width: 100%; border-radius: 8px;">
                        <img src="Projects/Apadana Hospital/33.png" alt="پلان بیمارستان" style="width: 100%; border-radius: 8px;">
                    </div>
                </div>
                <div class="project-details" style="margin-top: 2rem;">
                    <h3>نمای کلی پروژه</h3>
                    <p>مرکز درمانی مدرنی که با تمرکز بر راحتی بیمار و کارایی عملیاتی طراحی شده است. این بیمارستان دارای یکپارچه‌سازی تجهیزات پزشکی مدرن، اصول طراحی پایدار و محیطی شفابخش است که بهبودی بیماران را تسریع می‌کند.</p>
                    <h4>ویژگی‌های کلیدی:</h4>
                    <ul style="margin-right: 2rem; margin-top: 1rem;">
                        <li>یکپارچه‌سازی تجهیزات پزشکی مدرن</li>
                        <li>طراحی پایدار و دوستدار محیط زیست</li>
                        <li>چیدمان متمرکز بر بیمار</li>
                        <li>بهینه‌سازی جریان کار پرسنل</li>
                        <li>سیستم‌های پیشرفته تهویه مطبوع</li>
                        <li>رعایت استانداردهای دسترسی</li>
                    </ul>
                    <h4>جزئیات پروژه:</h4>
                    <p><strong>موقعیت:</strong> تهران، ایران<br>
                    <strong>سال:</strong> ۱۴۰۲<br>
                    <strong>مساحت:</strong> ۱۵،۰۰۰ متر مربع<br>
                    <strong>نوع:</strong> مرکز درمانی</p>
                </div>
            `;
      break;
    case "residential":
      content = `
                <h2>مجتمع مسکونی</h2>
                <div class="project-gallery">
                    <img src="Projects/Residential Complex/34.png" alt="مجتمع مسکونی" style="width: 100%; margin-bottom: 1rem; border-radius: 8px;">
                    <div class="gallery-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
                        <img src="Projects/Residential Complex/36.png" alt="طراحی مسکونی" style="width: 100%; border-radius: 8px;">
                        <img src="Projects/Residential Complex/37.png" alt="چیدمان مسکونی" style="width: 100%; border-radius: 8px;">
                        <img src="Projects/Residential Complex/38.png" alt="نمای خارجی مسکونی" style="width: 100%; border-radius: 8px;">
                        <img src="Projects/Residential Complex/39.png" alt="پلان مسکونی" style="width: 100%; border-radius: 8px;">
                    </div>
                </div>
                <div class="project-details" style="margin-top: 2rem;">
                    <h3>نمای کلی پروژه</h3>
                    <p>توسعه مسکونی معاصری که زندگی مدرن را با اصول طراحی پایدار ترکیب می‌کند. این مجتمع دارای آپارتمان‌های وسیع، فضاهای سبز و امکانات اجتماعی است که برای بهبود کیفیت زندگی ساکنان طراحی شده است.</p>
                    <h4>ویژگی‌های کلیدی:</h4>
                    <ul style="margin-right: 2rem; margin-top: 1rem;">
                        <li>مواد ساختمانی پایدار</li>
                        <li>طراحی انرژی‌کارآمد</li>
                        <li>فضاهای سبز اجتماعی</li>
                        <li>امکانات مدرن</li>
                        <li>راه‌حل‌های پارکینگ و انبار</li>
                        <li>سیستم‌های امنیتی</li>
                    </ul>
                    <h4>جزئیات پروژه:</h4>
                    <p><strong>موقعیت:</strong> تهران، ایران<br>
                    <strong>سال:</strong> ۱۴۰۱<br>
                    <strong>واحدها:</strong> ۱۲۰ آپارتمان<br>
                    <strong>نوع:</strong> مجتمع مسکونی</p>
                </div>
            `;
      break;
    case "dormitory":
      content = `
                <h2>خوابگاه دختران</h2>
                <div class="project-gallery">
                    <img src="Projects/Girls Dormitory/14.png" alt="خوابگاه دختران" style="width: 100%; margin-bottom: 1rem; border-radius: 8px;">
                    <div class="gallery-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;">
                        <img src="Projects/Girls Dormitory/16.png" alt="طراحی خوابگاه" style="width: 100%; border-radius: 8px;">
                        <img src="Projects/Girls Dormitory/17.png" alt="دکوراسیون داخلی خوابگاه" style="width: 100%; border-radius: 8px;">
                        <img src="Projects/Girls Dormitory/18.png" alt="چیدمان خوابگاه" style="width: 100%; border-radius: 8px;">
                        <img src="Projects/Girls Dormitory/19.png" alt="نمای خارجی خوابگاه" style="width: 100%; border-radius: 8px;">
                        <img src="Projects/Girls Dormitory/20.png" alt="نمای خوابگاه" style="width: 100%; border-radius: 8px;">
                        <img src="Projects/Girls Dormitory/21.png" alt="پلان خوابگاه" style="width: 100%; border-radius: 8px;">
                    </div>
                </div>
                <div class="project-details" style="margin-top: 2rem;">
                    <h3>نمای کلی پروژه</h3>
                    <p>تسهیلات مسکونی آموزشی که به طور خاص برای دانشجویان دختر طراحی شده است. این خوابگاه محیطی امن، راحت و مناسب برای یادگیری و ایجاد اجتماع فراهم می‌کند و دارای امکانات مدرن و فضاهای مطالعه است.</p>
                    <h4>ویژگی‌های کلیدی:</h4>
                    <ul style="margin-right: 2rem; margin-top: 1rem;">
                        <li>طراحی متمرکز بر دانشجو</li>
                        <li>فضاهای مطالعه و مشترک</li>
                        <li>سیستم‌های امنیتی و ایمنی</li>
                        <li>امکانات خوابگاه مدرن</li>
                        <li>فضاهای ایجاد اجتماع</li>
                        <li>ویژگی‌های دسترسی</li>
                    </ul>
                    <h4>جزئیات پروژه:</h4>
                    <p><strong>موقعیت:</strong> تهران، ایران<br>
                    <strong>سال:</strong> ۱۴۰۰<br>
                    <strong>ظرفیت:</strong> ۲۰۰ دانشجو<br>
                    <strong>نوع:</strong> مسکونی آموزشی</p>
                </div>
            `;
      break;
    case "cafe":
      content = `
                <h2>کافه مدرن</h2>
                <div class="project-gallery">
                    <img src="Projects/Cafe/40.png" alt="کافه مدرن" style="width: 100%; margin-bottom: 1rem; border-radius: 8px;">
                    <div class="gallery-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
                        <img src="Projects/Cafe/42.png" alt="طراحی کافه" style="width: 100%; border-radius: 8px;">
                        <img src="Projects/Cafe/43.png" alt="دکوراسیون داخلی کافه" style="width: 100%; border-radius: 8px;">
                        <img src="Projects/Cafe/44.png" alt="چیدمان کافه" style="width: 100%; border-radius: 8px;">
                        <img src="Projects/Cafe/45.png" alt="نمای خارجی کافه" style="width: 100%; border-radius: 8px;">
                        <img src="Projects/Cafe/46.png" alt="نمای کافه" style="width: 100%; border-radius: 8px;">
                        <img src="Projects/Cafe/47.png" alt="پلان کافه" style="width: 100%; border-radius: 8px;">
                    </div>
                </div>
                <div class="project-details" style="margin-top: 2rem;">
                    <h3>نمای کلی پروژه</h3>
                    <p>طراحی کافه معاصری که فضای گرم و دعوت‌کننده‌ای برای مشتریان ایجاد می‌کند. این فضا برای حداکثر راحتی و کارایی طراحی شده و در عین حال جذابیت بصری که فرهنگ کافه مدرن را منعکس می‌کند، حفظ می‌کند.</p>
                    <h4>ویژگی‌های کلیدی:</h4>
                    <ul style="margin-right: 2rem; margin-top: 1rem;">
                        <li>فضای گرم و دعوت‌کننده</li>
                        <li>استفاده کارآمد از فضا</li>
                        <li>دکوراسیون داخلی مدرن</li>
                        <li>تمرکز بر راحتی مشتری</li>
                        <li>ترتیب‌های صندلی انعطاف‌پذیر</li>
                        <li>بهینه‌سازی جریان کار آشپزخانه</li>
                    </ul>
                    <h4>جزئیات پروژه:</h4>
                    <p><strong>موقعیت:</strong> تهران، ایران<br>
                    <strong>سال:</strong> ۱۳۹۹<br>
                    <strong>مساحت:</strong> ۱۵۰ متر مربع<br>
                    <strong>نوع:</strong> کافه تجاری</p>
                </div>
            `;
      break;
    case "facade":
      content = `
                <h2>مدل‌سازی نما</h2>
                <div class="project-gallery">
                    <img src="Projects/Facade Modeling/6.png" alt="مدل‌سازی نما" style="width: 100%; margin-bottom: 1rem; border-radius: 8px;">
                    <div class="gallery-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
                        <img src="Projects/Facade Modeling/8.png" alt="طراحی نما" style="width: 100%; border-radius: 8px;">
                        <img src="Projects/Facade Modeling/9.png" alt="مدل نما" style="width: 100%; border-radius: 8px;">
                        <img src="Projects/Facade Modeling/10.png" alt="جزئیات نما" style="width: 100%; border-radius: 8px;">
                        <img src="Projects/Facade Modeling/11.png" alt="رندر نما" style="width: 100%; border-radius: 8px;">
                        <img src="Projects/Facade Modeling/12.png" alt="نمای نما" style="width: 100%; border-radius: 8px;">
                        <img src="Projects/Facade Modeling/13.png" alt="پلان نما" style="width: 100%; border-radius: 8px;">
                    </div>
                </div>
                <div class="project-details" style="margin-top: 2rem;">
                    <h3>نمای کلی پروژه</h3>
                    <p>طراحی نما ساختمان نوآورانه که عناصر معماری مدرن را با نیازهای عملکردی ترکیب می‌کند. پروژه مدل‌سازی نما تکنیک‌های پیشرفته مدل‌سازی سه‌بعدی و اصول طراحی معاصر را نشان می‌دهد.</p>
                    <h4>ویژگی‌های کلیدی:</h4>
                    <ul style="margin-right: 2rem; margin-top: 1rem;">
                        <li>عناصر معماری مدرن</li>
                        <li>مدل‌سازی و تصویرسازی سه‌بعدی</li>
                        <li>انتخاب و یکپارچه‌سازی مواد</li>
                        <li>ملاحظات کارایی انرژی</li>
                        <li>یکپارچه‌سازی ساختاری</li>
                        <li>پاسخگویی محیطی</li>
                    </ul>
                    <h4>جزئیات پروژه:</h4>
                    <p><strong>موقعیت:</strong> تهران، ایران<br>
                    <strong>سال:</strong> ۱۳۹۸<br>
                    <strong>مساحت:</strong> ۲،۵۰۰ متر مربع<br>
                    <strong>نوع:</strong> طراحی نما</p>
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
              "فایل رزومه یافت نشد. لطفاً مطمئن شوید که 'AnitaJavadiportfolio.pdf' در همان پوشه فایل‌های وب‌سایت قرار دارد."
            );
          }
        })
        .catch((error) => {
          console.log("خطا در دانلود رزومه:", error);
        });
    });
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
    console.warn("خطا در بارگذاری تصویر:", this.src);
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

// Service Worker registration for PWA capabilities (optional)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => console.log("SW registered"))
      .catch((registrationError) => console.log("SW registration failed"));
  });
}
