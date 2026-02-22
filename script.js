let count = 0;
const munchSound = new Audio('https://assets.mixkit.co/active_storage/sfx/1110/1110-preview.mp3');

function eatCarrot() {
  const rabbit = document.getElementById('rabbit');
  const counter = document.getElementById('counter');
  const carrot = document.getElementById('carrot');

  if (rabbit.classList.contains('hop')) return;

  // Play sound
  munchSound.play();

  // Animation
  rabbit.classList.add('hop');
  carrot.style.transform = 'scale(0)';

  // Update Score
  count++;
  counter.innerText = "Carrots Eaten: " + count;

  // Reset
  setTimeout(() => {
    rabbit.classList.remove('hop');
    carrot.style.transform = 'scale(1)';
  }, 300);
}
