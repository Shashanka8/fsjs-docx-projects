const counterTime = document.querySelector("h1");
const content = document.querySelector(".content");
const setCountBtn = document.querySelector("button");
const input = document.querySelector("#countdown");

let countdownTime;
let isCoundownSet = false;
const ringTone = new Audio("./assets/ringtone.mp3");
let interval;

const setCountdown = () => {
  let time = input.value;

  if (time.trim() == "") {
    return alert("Please, select a valid time to set Countdown!");
  }

  if (isCoundownSet) {
    countdownTime = -1;
    ringTone.pause();
    counterTime.innerText = "0";
    input.value = "";
    content.classList.remove("disable");
    setCountBtn.innerText = "Set Countdown";
    return (isCoundownSet = false);
  }

  interval = setInterval(() => {
    if (!isCoundownSet) {
      clearInterval(interval);
      return;
    }

    if (countdownTime == 0) {
      ringTone.play();
      ringTone.loop = true;
      clearInterval(interval);
      return;
    }

    countdownTime--;
    counterTime.innerText = countdownTime;
  }, 1000);

  isCoundownSet = true;
  countdownTime = time;
  content.classList.add("disable");
  setCountBtn.innerText = "Clear Countdown";
};

setCountBtn.addEventListener("click", setCountdown);
