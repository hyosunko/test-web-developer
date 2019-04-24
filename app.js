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

const displayText = () =>{
  const items = document.querySelectorAll(".image")
  items.forEach((item, index)=>{
    const x = item.innerHTML;
    item.addEventListener("mouseover", ()=>{
      const {heading, description} = images[item.getAttribute('id')]
      console.log(heading, description)
      item.innerHTML = `${heading} \n ${description}` 
    })
    item.addEventListener("mouseout", ()=>{
      const {heading, description} = images[item.getAttribute('id')]
      console.log(item)
      item.innerHTML = x
    })
  })
}
// const displayText = () =>{
//   const items = document.querySelectorAll(".image");

//   items.addEventListener("click", () =>{

//       console.log(items)
//       // document.getElementById(images[item]).setAttribute("style", "display:block;"))
//   });
  
//   // items.addEventListener("mouseout", ()=>{
//   //   document.getElementById(images[item]).setAttribute("style", "display:none")
//   // });
// }

// function func()
// {   
//    document.getElementById("text").setAttribute("style", "display:block;")
// }

// function func1()
// {  
//     document.getElementById("text").setAttribute("style", "display:none;")
// }


// const app = () => {
//   navSlide();
//   displayText();
//   test();
// };

navSlide();
displayText();
