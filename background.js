chrome.alarms.create({ delayInMinutes: 1, periodInMinutes: 1 });

chrome.alarms.onAlarm.addListener(function (alarm) {
  if (alarm.name === "postureReminder") {
    chrome.notifications.create({
      type: "basic",
      iconUrl: "images/icon128.png",
      title: "Posture Fix",
      message: "Remember to check your posture!",
    });
  }
});