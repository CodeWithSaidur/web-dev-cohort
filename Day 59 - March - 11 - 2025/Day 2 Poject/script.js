let startButton = document.getElementById("startButton");
let countdownDisplay = document.getElementById("countdownDisplay");
let timeInput = document.getElementById("timeInput");

function startTimer() {
  let n = parseInt(timeInput.value);
  if (isNaN(n) || n <= 0) {
    countdownDisplay.innerText = "Enter a Valid Number";
  } else {
    let time = setInterval(() => {
      n--;
      if (n <= 0) {
        clearInterval(time);
      }
      countdownDisplay.innerText = `remain Time ${n}`;
    }, 1 * 1000);
  }
}
startButton.addEventListener("click", startTimer);

startButton.addEventListener("click", () => {
  startButton.innerText = "Stop Countdown";
  clearInterval(time);
});
