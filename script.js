function openBook(element, pdfUrl, event) {
  // Create ripple effect
  const ripple = document.createElement("span");
  const rect = element.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;

  ripple.style.width = ripple.style.height = size + "px";
  ripple.style.left = x + "px";
  ripple.style.top = y + "px";
  ripple.classList.add("ripple");

  element.appendChild(ripple);

  // Remove ripple after animation
  setTimeout(() => {
    ripple.remove();
  }, 600);

  // Add click animation
  element.style.transform = "scale(0.98)";

  setTimeout(() => {
    element.style.transform = "";
    // Open PDF in new tab
    window.open(pdfUrl, "_blank");
  }, 150);
}

// Parallax effect for orbs
document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX / window.innerWidth;
  const mouseY = e.clientY / window.innerHeight;

  const orbs = document.querySelectorAll(".orb");
  orbs.forEach((orb, index) => {
    const speed = (index + 1) * 0.3;
    const x = (mouseX - 0.5) * speed * 20;
    const y = (mouseY - 0.5) * speed * 20;
    orb.style.transform = `translate(${x}px, ${y}px)`;
  });
});

// Smooth scroll
document.documentElement.style.scrollBehavior = "smooth";

// Add intersection observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = "running";
    }
  });
}, observerOptions);

document.querySelectorAll(".fade-in-up").forEach((el) => {
  el.style.animationPlayState = "paused";
  observer.observe(el);
});

// Cloudflare challenge script
(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      var d = b.createElement("script");
      d.innerHTML =
        "window.__CF$cv$params={r:'976475d2e584cece',t:'MTc1NjM5MDk0MC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
      b.getElementsByTagName("head")[0].appendChild(d);
    }
  }
  if (document.body) {
    var a = document.createElement("iframe");
    a.height = 1;
    a.width = 1;
    a.style.position = "absolute";
    a.style.top = 0;
    a.style.left = 0;
    a.style.border = "none";
    a.style.visibility = "hidden";
    document.body.appendChild(a);
    if ("loading" !== document.readyState) c();
    else if (window.addEventListener)
      document.addEventListener("DOMContentLoaded", c);
    else {
      var e = document.onreadystatechange || function () {};
      document.onreadystatechange = function (b) {
        e(b);
        "loading" !== document.readyState &&
          ((document.onreadystatechange = e), c());
      };
    }
  }
})();
