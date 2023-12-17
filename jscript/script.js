/*Menu-icon*/

let menuIcon = document.querySelector('#menuicon');
let nbar = document.querySelector('.navigationbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    nbar.classList.toggle('active');
};




/*add event listeners to elements with the class name "nactive" and toggle the "active" class on click. */

var btnCon = document.getElementById("header");
var btns = Array.from(btnCon.getElementsByClassName("nactive"));
var sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {
  // Get the current scroll position
  var scrollY = window.scrollY;

  // Loop through sections and update the active element
  sections.forEach(function (sec, index) {
    var offset = sec.offsetTop - 150;
    var height = sec.offsetHeight;
    var id = sec.getAttribute("id");

    if (scrollY >= offset && scrollY < offset + height) {
      // Remove active class from current active element
      var curr = document.querySelector(".active");
      if (curr) {
        curr.classList.remove("active");
        curr.classList.add("nactive");
      }

      // Add active class to corresponding button
      var btn = btns[index];
      btn.classList.remove("nactive");
      btn.classList.add("active");
    } else {
      // Remove active class from buttons corresponding to sections not in view
      var btn = btns[index];
      btn.classList.remove("active");
      btn.classList.add("nactive");
    }
  });
});

// Add click event listeners to buttons
btns.forEach(function (btn, index) {
  btn.addEventListener("click", function () {
    var curr = document.querySelector(".active");
    if (curr) {
      curr.classList.remove("active");
      curr.classList.add("nactive");
    }
    this.classList.remove("nactive");
    this.classList.add("active");

    // Scroll to corresponding section
    sections[index].scrollIntoView({ behavior: "smooth" });
  });
});



ScrollReveal().reveal('.main1image', { origin: 'top' });



