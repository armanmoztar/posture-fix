// document.addEventListener('DOMContentLoaded', function() {
//     var checkPageButton = document.getElementById('clickIt');
//     checkPageButton.addEventListener('click', function() {

//         chrome.tabs.getSelected(null, function(tab) {
//             alert("Reminder to keep your posture straight!")
//         });
//     }, false);
// }, false);

const options = {
    type: "basic",
    iconUrl: "../images/icon48.png",
    title: "Popup.js",
    message: "Hello from popup.js!"
};

chrome.notifications.create(options);