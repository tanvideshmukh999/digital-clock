const hour = document.querySelector(".hour");
const minute = document.querySelector(".min");
const second = document.querySelector(".sec");
const zone = document.querySelector("h3");
let hours = Number(new Date().getHours());
function updateTime() {
    let d = new Date();
    let h = d.getHours(); // 0 - 23
    let m = d.getMinutes(); // 0 - 59
    let s = d.getSeconds();
  
    if (h >= "12") {
      h = h - 12;
      zone.innerText = "PM";
    } else {
      zone.innerText = "AM";
    }
    h = String(h).padStart("2", "0");
    m = String(m).padStart("2", "0");
    s = String(s).padStart("2", "0");
    hour.textContent = `${h}`;
    minute.textContent = `${m}`;
    second.textContent = `${s}`;
  }
  
  setInterval(updateTime, 1000);