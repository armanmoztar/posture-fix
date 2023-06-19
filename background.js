let timerRunning = true;

chrome.alarms.onAlarm.addListener(function (alarm) {
  if (alarm.name === "postureFix" && timerRunning) {
    console.log("Alarm Triggered");
    chrome.notifications.create({
      type: "basic",
      iconUrl: "images/icon128.png",
      title: "Posture Fix",
      message: "Remember to check your posture!"
    });
  }
});

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message && message.action === "pauseTimer") {
    timerRunning = false;
    sendResponse({ timerRunning: timerRunning });
  }
});