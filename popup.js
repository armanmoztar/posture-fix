document.addEventListener("DOMContentLoaded", function () {
  let isTimerRunning = true;
  const pauseButton = document.getElementById("pauseButton");
  const statusText = document.getElementById("statusText");

  chrome.runtime.sendMessage({ action: "pauseTimer" }, function (response) {
    isTimerRunning = response.timerRunning;
    updateButtonText();
    updateStatusText();
    console.log(isTimerRunning ? "Reminders are active" : "Reminders are paused");
  });

  pauseButton.addEventListener("click", function () {
    isTimerRunning = !isTimerRunning;
    updateButtonText();
    updateStatusText();
    chrome.runtime.sendMessage({ action: "pauseTimer", timerRunning: isTimerRunning }, function (response) {
      if (response && response.timerRunning) {
        isTimerRunning = response.timerRunning;
        updateButtonText();
        updateStatusText();
        console.log(isTimerRunning ? "Reminders are active" : "Reminders are paused");
      }
    });
  });

  function updateButtonText() {
    pauseButton.textContent = isTimerRunning ? "Pause Reminders" : "Resume Reminders";
  }

  function updateStatusText() {
    statusText.textContent = isTimerRunning ? "Reminders are active" : "Reminders are paused";
  }
});
