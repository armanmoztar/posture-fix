var userSubmit = false;
var timeout;
if (!userSubmit) {
    timeout = setTimeout(function () {
        alert("Timer Done");
    }, 3000);
}
function alertSubmit() {
    userSubmit = true;
    clearTimeout(timeout);
}
<button onclick="alertSubmit()">Try it</button>