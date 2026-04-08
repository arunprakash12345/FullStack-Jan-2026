const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");

const hoursInput = document.getElementById("hr");
const minsInput = document.getElementById("min");
const secondsInput = document.getElementById("sec");
let timeLeft = 0;
let timerToken = null;

const convertToSeconds = (hrs, mins, sec) => {
  return sec + mins * 60 + hrs * 60 * 60;
};

const convertFromSeconds = (totalSeconds) => {
  const hrs = Math.floor(totalSeconds / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;
  return { hrs, mins, secs };
};

const isValid = (hrs, mins, secs) => {
  const total = convertToSeconds(hrs, mins, secs);

  if (total <= 0) {
    window.alert("Enter a Valid Time");
    return false;
  }
  if (total > 86400) {
    window.alert("Max 24 hours is allowed");
    return false;
  }
  return true;
};

const format = (val) => {
  return String(val).padStart(2, "0");
};
const updateUI = (hrs, mins, secs) => {
  hoursInput.value = format(hrs);
  minsInput.value = format(mins);
  secondsInput.value = format(secs);
};

const startTimer = () => {
  timerToken = setInterval(() => {
    timeLeft--;
    if (timeLeft <= 0) {
      clearInterval(timerToken);
    }
    const { hrs, mins, secs } = convertFromSeconds(timeLeft);
    updateUI(hrs, mins, secs);
  }, 1000);
};

startBtn.addEventListener("click", () => {
  // start the timer in reverse order until it reaches today
  const hrs = parseInt(hoursInput.value) || 0;
  const mins = parseInt(minsInput.value) || 0;
  const secs = parseInt(secondsInput.value) || 0;

  if (!isValid(hrs, mins, secs)) {
    return;
  }
  timeLeft = convertToSeconds(hrs, mins, secs);
  updateUI(hrs, mins, secs);
  startTimer();
});

pauseBtn.addEventListener("click", () => {
  clearInterval(timerToken);
});

resetBtn.addEventListener("click", () => {
  timeLeft = 0;
  clearInterval(timerToken);
  hoursInput.value = "00";
  minsInput.value = "00";
  secondsInput.value = "00";
});
