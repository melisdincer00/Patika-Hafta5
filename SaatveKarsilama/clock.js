// Kullanıcıdan ad al
let userName = prompt("Adınız nedir?");
document.getElementById("myName").innerText = userName;

// Saati göster
function showTime() {
  const myClock = document.getElementById("myClock");
  const now = new Date();

  let h = now.getHours().toString().padStart(2, "0");
  let m = now.getMinutes().toString().padStart(2, "0");
  let s = now.getSeconds().toString().padStart(2, "0");

  const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
  let day = days[now.getDay()];

  myClock.innerHTML = `${h}:${m}:${s} ${day}`;
}

setInterval(showTime, 1000);
showTime();
