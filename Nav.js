document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("navbar");
  
    window.addEventListener("scroll", function() {
      if (window.scrollY > 700) {
        navbar.classList.add("nav_black");
      } else {
        navbar.classList.remove("nav_black");
      }
    });
  });
