const messages = [
  "I love you. More than words can ever say.",
  "You are my safe place, always.",
  "Every day with you is my favorite day.",
  "You make my world softer, calmer, and brighter.",
  "Loving you feels natural.",
  "You are my peace in a noisy world.",
  "I choose you. Always.",
  "With you, I feel at home.",
  "You are my best decision.",
  "I’m grateful for you, every single day.",
  "You mean more to me than you realize."
];

function showLove() {
  const text = document.getElementById("hiddenText");
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  text.textContent = randomMessage;
  text.style.display = "block";

  text.style.opacity = 0;
  text.style.transform = "translateY(5px)";

  setTimeout(() => {
    text.style.transition = "0.4s ease";
    text.style.opacity = 1;
    text.style.transform = "translateY(0)";
  }, 50);
}
