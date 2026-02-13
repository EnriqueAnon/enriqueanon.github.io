const messages = [
  "I love you. More than words can ever say.🤍",
  "You are my safe place, always.🤍",
  "Every day with you is my favorite day.🤍",
  "You make my world softer, calmer, and brighter.🤍",
  "Loving you feels natural.🤍",
  "You are my peace in a noisy world.🤍",
  "I choose you. Always.🤍",
  "With you, I feel at home.🤍",
  "You are my best decision.🤍",
  "I’m grateful for you, every single day.🤍",
  "You mean more to me than you realize.🤍"
];

function loveMore() {
  const text = document.getElementById("hiddenText");
  const random = messages[Math.floor(Math.random() * messages.length)];
  text.textContent = random;
  animateText(text);
}

function okClick() {
  const text = document.getElementById("hiddenText");
  const btn = document.querySelector(".ok-btn");

  text.textContent = "Try Again.";
  animateText(text);

  // Move the button around 😂
  const x = Math.random() * 160 - 80;
  const y = Math.random() * 120 - 60;

  btn.style.transform = `translate(${x}px, ${y}px)`;
}

function animateText(el) {
  el.style.display = "block";
  el.style.opacity = 0;
  el.style.transform = "translateY(6px)";

  setTimeout(() => {
    el.style.transition = "0.4s ease";
    el.style.opacity = 1;
    el.style.transform = "translateY(0)";
  }, 40);
}
