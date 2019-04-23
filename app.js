var images = {
  man: {
    heading: "Man Image",
    description: "Image of a man.",
    path: "img/man.jpg"
  },
  wizard: {
    heading: "Wizard Image",
    description: "Image of a wizard.",
    path: "img/wizard.jpg"
  },
  beast: {
    heading: "Beast Image",
    description: "Image of a beast.",
    path: "img/beast.jpg"
  }
};

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    // Toggle nav
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 4 +
          0.5}s`;
      }
    });
    // burger animation
    burger.classList.toggle("toggle");
  });
  // Animate Links
};

navSlide();

// const app = () => {
//   navSlide();
// };
