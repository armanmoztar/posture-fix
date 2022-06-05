var startingMinutes = 30;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');

setInterval(updateCountdown, 1000)

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;


    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
    time = time < 0 ? 0 : time;
    if (time == 0) {
        fn();
        time = startingMinutes * 60;
        return;
    }
    

    function fn() {
        console.log("timer reset");
        alert("Remember to fix your posture!")
    }
}

// // Reset timer
// const resetAction = document.getElementById("reset-timer");

// // Function to reset Countdown
// const resetTimer = () => {
//     stopTimer();
//     countDownTime = defaultValue;
//     renderTime();
// };

// resetAction.onclick = resetTimer;

// setTimeout(function () { alert("Remember to fix your posture!"); }, time)}
