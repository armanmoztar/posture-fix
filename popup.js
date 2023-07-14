document.addEventListener("DOMContentLoaded", function () {
  let isTimerRunning = true;
  const pauseButton = document.getElementById("pauseButton");
  const statusText = document.getElementById("statusText");

  // Retrieve the timer state from storage
  chrome.storage.sync.get("timerRunning", function (data) {
    isTimerRunning = data.timerRunning !== undefined ? data.timerRunning : isTimerRunning;
    updateButtonText();
    updateStatusText();
    console.log(isTimerRunning ? "Reminders are active" : "Reminders are paused");
  });

  pauseButton.addEventListener("click", function () {
    isTimerRunning = !isTimerRunning;
    updateButtonText();
    updateStatusText();
    chrome.storage.sync.set({ timerRunning: isTimerRunning });
    console.log(isTimerRunning ? "Reminders are active" : "Reminders are paused");
  });

  function updateButtonText() {
    pauseButton.textContent = isTimerRunning ? "Pause Reminders" : "Resume Reminders";
  }

  function updateStatusText() {
    statusText.textContent = `Status: ${isTimerRunning ? "Active" : "Inactive"}`;
    statusText.classList.toggle("inactive", !isTimerRunning);
  }
});
