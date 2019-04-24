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
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 +
          0.5}s`;
      }
    });
    // burger animation
    burger.classList.toggle("toggle");
  });
};

const displayText = () => {
  const items = document.querySelectorAll(".image");

  items.forEach(item => {
    const { heading, description } = images[item.getAttribute("id")];

    const textDiv = document.createElement("div");
    const headingEl = document.createElement("h4");
    const descriptionEl = document.createElement("span");
    const textContainerDiv = document.createElement("div");

    headingEl.innerHTML = heading;
    descriptionEl.innerHTML = description;

    textContainerDiv.appendChild(headingEl);
    textContainerDiv.appendChild(descriptionEl);
    textContainerDiv.className = "display-text-container";

    textDiv.appendChild(textContainerDiv);
    textDiv.className = "display-text";

    item.appendChild(textDiv);
  });
};

navSlide();
displayText();
