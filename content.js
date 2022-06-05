
var startingMinutes = 30;
let time = startingMinutes * 60;
var audio = new Audio('/audio.mp3');
setInterval(updateCountdown, 1000)
function updateCountdown() {
    const countdown = document.getElementById('countdown');
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    countdown.innerHTML = `${minutes}:${seconds}`;
    time--;
    time = time < 0 ? 0 : time;
    if (time == 0) {
        fn();
        time = startingMinutes * 60;
        return;
    }

    function fn() {
        audio.play();
        alert("Remember to fix your posture!")
    }
    chrome.action.onClicked.addListener(handleActionClick);
}

