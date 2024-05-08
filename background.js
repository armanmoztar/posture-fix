let timerRunning = true;

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['popup.js']
  });
});

chrome.alarms.onAlarm.addListener(function (alarm) {
  if (alarm.name === "postureFix") {
    chrome.storage.sync.get("timerRunning", function (data) {
      timerRunning = data.timerRunning !== undefined ? data.timerRunning : true;
      if (timerRunning) {
        console.log("Alarm Triggered");
        chrome.notifications.create({
          type: "basic",
          iconUrl: "images/icon128.png",
          title: "Posture Fix",
          message: "Remember to check your posture!"
        });
      }
    });
  }
});

chrome.runtime.onInstalled.addListener(function () {
  chrome.alarms.create("postureFix", {
    delayInMinutes: 30,
    periodInMinutes: 30
  });
});

chrome.storage.onChanged.addListener(function(changes, namespace) {
  for (let key in changes) {
    if (key === "timerRunning") {
      timerRunning = changes[key].newValue;
    }
  }
});