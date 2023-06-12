chrome.alarms.create({ delayInMinutes: 15, periodInMinutes: 15 });

chrome.alarms.onAlarm.addListener(function (alarm) {
  if (alarm.name === "postureFix") {
    chrome.notifications.create({
      type: "basic",
      iconUrl: "images/icon128.png",
      title: "Posture Fix",
      message: "Remember to check your posture!",
    });
  }
});