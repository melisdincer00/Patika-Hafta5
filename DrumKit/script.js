// Tüm tuşlara tıklama olaylarını ekle
document.querySelectorAll(".drum").forEach((btn) => {
  btn.addEventListener("click", function () {
    const key = this.innerText;
    playSound(key);
    animateButton(key);
  });
});

// Klavyeden basılan tuşları dinle
document.addEventListener("keydown", function (event) {
  const key = event.key.toUpperCase();
  playSound(key);
  animateButton(key);
});

// Ses oynatma fonksiyonu
function playSound(key) {
  let audio;

  switch (key) {
    case "A":
      audio = new Audio("assets/sounds/kick.wav");      
      break;
    case "S":
      audio = new Audio("assets/sounds/snare.wav");
      break;
    case "D":
      audio = new Audio("assets/sounds/hihat.wav");
      break;
    case "F":
      audio = new Audio("assets/sounds/tom.wav");
      break;
    case "G":
      audio = new Audio("assets/sounds/tink.wav");
      break;
    case "H":
      audio = new Audio("assets/sounds/boom.wav");
      break;
    case "J":
      audio = new Audio("assets/sounds/clap.wav");
      break;
    case "K":
      audio = new Audio("assets/sounds/ride.wav");
      break;
    case "L":
      audio = new Audio("assets/sounds/openhat.wav");
      break;
    default:
      return;
  }

  audio.play();
}

// Tuşa basıldığında animasyon efekti
function animateButton(key) {
  const button = document.querySelector(`.drum[data-key="${key}"]`);
  if (!button) return;
  button.classList.add("pressed");
  setTimeout(() => {
    button.classList.remove("pressed");
  }, 100);
}
