particlesJS("particles-js", {
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        value_area: 800
      }
    },

    color: {
      value: "#00ffcc"
    },

    shape: {
      type: "circle"
    },

    opacity: {
      value: 0.7,
      random: true
    },

    size: {
      value: 3,
      random: true
    },

    line_linked: {
      enable: true,
      distance: 150,
      color: "#00ffcc",
      opacity: 0.3,
      width: 1
    },

    move: {
      enable: true,
      speed: 1,
      random: true,
      out_mode: "out"
    }
  },

  interactivity: {
    detect_on: "canvas",

    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },

      onclick: {
        enable: true,
        mode: "push"
      },

      resize: true
    },

    modes: {
      grab: {
        distance: 200,
        line_linked: {
          opacity: 0.8
        }
      },

      push: {
        particles_nb: 4
      }
    }
  },

  retina_detect: true
});


/* Typing Animation */

const words = [
  "Python Developer",
  "Web Developer",
  "AI & DS Student",
  "Machine Learning Enthusiast",
  "Future Software Engineer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.querySelector(".typing");

function typeEffect() {

  const currentWord = words[wordIndex];

  if (!deleting) {

    typingElement.textContent =
      currentWord.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentWord.length) {

      deleting = true;

      setTimeout(typeEffect, 1500);

      return;
    }

  } else {

    typingElement.textContent =
      currentWord.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {

      deleting = false;

      wordIndex++;

      if (wordIndex >= words.length) {
        wordIndex = 0;
      }
    }
  }

  setTimeout(typeEffect, deleting ? 60 : 120);
}

typeEffect();