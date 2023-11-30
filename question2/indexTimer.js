function startTimer() {
  let duration = document.getElementById("duration").value;
  let timerDisplay = document.getElementById("timerDisplay");

  const timer = setInterval(function () {
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = duration % 60;
    const milliseconds = duration * 1000;
    timerDisplay.textContent =
      hours +
      " ساعت " +
      minutes +
      " دقیقه " +
      seconds +
      " ثانیه " +
      milliseconds +
      " میلی ثانیه مانده";
    if (duration <= 0) {
      clearInterval(timer);
      timerDisplay.textContent = "زمان تمام شد";
    } else {
      duration--;
    }
  }, 1000);
}
