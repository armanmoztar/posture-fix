chrome.alarms.onAlarm.addListener(function (alarm) {
  if (alarm.name === "postureFix") {
    console.log("Alarm Triggered");
    chrome.notifications.create({
      type: "basic",
      iconUrl: "images/icon128.png",
      title: "Posture Fix",
      message: "Remember to check your posture!"
    });
  }
});

chrome.runtime.onInstalled.addListener(function () {
  chrome.alarms.create("postureFix", {
    delayInMinutes: 15,
    periodInMinutes: 15
  });
});
