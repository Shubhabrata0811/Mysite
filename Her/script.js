
/* For the hiding button */

const button = document.getElementById("playButton");
const hideCon1 = document.getElementById("hide1");
const hideCon2 = document.getElementById("hide2");
const hiddenContent = document.getElementById("hidden-content");
const bgMusic = document.getElementById('bgMusic');

document.getElementById("playButton").addEventListener("click", () => {
    hideCon1.style.opacity = "0";
    hideCon2.style.transform = "scale(0)";
    hiddenContent.style.display = "block";
    bgMusic.play();
    button.style.display = "none";

    hiddenContent.addEventListener("transitionend", () => {
      hideCon1.style.display = "none";
    });
});


/* slider animation part */

const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0])
  e.target.matches('.prev') && slider.prepend(items[items.length-1]);
}

document.addEventListener('click',activate,false);