function clockHandler() {
  const now = new Date();
  const hand_hour = document.querySelector(".hand-hour");
  const hand_minute = document.querySelector(".hand-minute");
  const hand_second = document.querySelector(".hand-second");
  const minute = now.getMinutes();
  const minuteDegree = (minute * 360) / 60;
  const hour = now.getHours();
  const hourDegree = (hour * 360) / 12 + (minute * 30) / 60;
  const second = now.getSeconds();
  const secondDegree = (second * 360) / 60;

  hand_hour.style.transform = `rotate(${hourDegree}deg)`;

  hand_minute.style.transform = `rotate(${minuteDegree}deg)`;

  hand_second.style.transform = `rotate(${secondDegree}deg)`;
}

setInterval(clockHandler, 1000);

clockHandler();
