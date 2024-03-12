
/* For the hiding button */

const button = document.getElementById("playButton");
const hideCon1 = document.getElementById("hide1");
const hideCon2 = document.getElementById("hide2");
const hiddenContent = document.getElementById("hidden-content");
const bgMusic = document.getElementById('bgMusic');

document.getElementById("playButton").addEventListener("click", () => {
  // Set opacity and transform to hide hideCon1 and hideCon2
  hideCon1.style.opacity = "0";
  hideCon2.style.transform = "scale(0)";

  // Use setTimeout to introduce a delay before fading in hiddenContent
  setTimeout(() => {
      // After the delay, set hiddenContent styles and make it visible
      hiddenContent.style.display = "block";
      bgMusic.play();
      button.style.display = "none";

      // Add a class to trigger the fade-in effect using CSS keyframes
      hiddenContent.classList.add("fade-in");

      // Add transitionend event listener to hideCon1
      hiddenContent.addEventListener("transitionend", () => {
          hideCon1.style.display = "none";
      });
  }, 1000); // 2000 milliseconds (2 seconds) delay
});

/*
document.getElementById("playButton").addEventListener("click", () => {
    // Set opacity and transform to hide hideCon1 and hideCon2
    hideCon1.style.opacity = "0";
    hideCon2.style.transform = "scale(0)";

    // Use setTimeout to introduce a delay before fading in hiddenContent
    setTimeout(() => {
        // After the delay, set hiddenContent styles and make it visible
        hiddenContent.style.opacity = "1"; // Initial opacity set to 0 for fade-in effect
        hiddenContent.style.display = "block";
        bgMusic.play();
        button.style.display = "none";

        // Add transitionend event listener to hiddenContent
        hiddenContent.addEventListener("transitionend", () => {
            // After the fade-in effect is complete, hide hideCon1
            hideCon1.style.display = "none";
        });

        // Trigger the fade-in effect by setting opacity to 1
        requestAnimationFrame(() => {
            hiddenContent.style.opacity = "1";
        });
    }, 2000); // 2000 milliseconds (2 seconds) delay
});


document.getElementById("playButton").addEventListener("click", () => {
  // Set opacity and transform to hide hideCon1 and hideCon2
  hideCon1.style.opacity = "0";
  hideCon2.style.transform = "scale(0)";

  // Use setTimeout to introduce a delay before making hiddenContent appear
  setTimeout(() => {
      // After the delay, set hiddenContent styles and make it visible
      hiddenContent.style.display = "block";
      bgMusic.play();
      button.style.display = "none";

      // Add transitionend event listener to hideCon1
      hiddenContent.addEventListener("transitionend", () => {
          hideCon1.style.display = "none";
      });
  }, 2000); // 2000 milliseconds (2 seconds) delay
});
*/

/* slider animation part */

const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0]);
  e.target.matches('.prev') && slider.prepend(items[items.length-1]);
}

document.addEventListener('click',activate,false);