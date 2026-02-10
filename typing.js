const texts = ["Dema Ben Jabr", "Software Developer"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing-text");

function typeEffect() {
  let currentText = texts[textIndex];

  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex--);
  } else {
    typingElement.textContent = currentText.substring(0, charIndex++);
  }

  let speed = isDeleting ? 120 : 220;

  if (!isDeleting && charIndex === currentText.length + 1) {
    speed = 1200;
    isDeleting = true;
  } 
  else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    speed = 300;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();
