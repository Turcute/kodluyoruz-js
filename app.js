// Kullanıcı adını alma ve ekrana yazdırma
let userName = prompt("Lütfen adınızı giriniz:");
if (userName.trim() === "") {
  userName = "Misafir"; // Eğer boş bırakılırsa "Misafir" olarak ayarlanır
}
document.getElementById("myName").textContent = userName;

function showTime() {
  const now = new Date();
  const day = now.toLocaleDateString("tr-TR", { weekday: "long" });
  const timeString = now.toLocaleTimeString("tr-TR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  document.getElementById("myClock").textContent = `${day}, ${timeString}`;
  setTimeout(showTime, 1000);
}

showTime();
