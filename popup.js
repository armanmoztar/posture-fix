// check timer state and update popup.html
document.addEventListener("DOMContentLoaded", function () {
  chrome.runtime.sendMessage({ action: "pauseTimer" }, function (response) {
    if (response && response.timerRunning) {
      console.log("Timer is running");
    } else {
      console.log("Timer is paused");
    }
  });

  // Add event listener for the pause button
  document.getElementById("pauseButton").addEventListener("click", function () {
    chrome.runtime.sendMessage({ action: "pauseTimer" }, function (response) {
      if (response && response.timerRunning) {
        console.log("Timer is running");
      } else {
        console.log("Timer is paused");
        document.getElementById("statusText").textContent = "Reminders have been paused";
      }
    });
  });
});
