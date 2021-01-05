const updateFirstScore = document.querySelector("#playerOneScore");
const updateSecondScore = document.querySelector("#playerTwoScore");

const firstButton = document.querySelector("#FirstPlayerPoint");
const secondButton = document.querySelector("#SecondPlayerPoint");

const reset = document.querySelector("#reset");
const maxLimity = document.querySelector("#setScoreLimit");

// select dropdown limit - once reaches that number - do the coloring
let isGameOver = false;
let maxLimit = 3; // initially

// updating maxLimit
maxLimity.addEventListener("change", function () {
  maxLimit = parseInt(this.value);
});

// clicked +1 Player One
firstButton.addEventListener("click", function () {
  if (isGameOver == false) {
    // check for the limit
    if (updateFirstScore.innerText != maxLimit) {
      updateFirstScore.innerText = parseFloat(updateFirstScore.innerText) + 1;
      if (updateFirstScore.innerText == maxLimit) {
        updateFirstScore.style.color = "green"; // won
        updateSecondScore.style.color = "red";
        isGameOver = true;
      }
    }
  }
});

secondButton.addEventListener("click", function () {
  if (isGameOver == false) {
    // check for the limit
    if (updateSecondScore.innerText != maxLimit) {
      updateSecondScore.innerText = parseFloat(updateSecondScore.innerText) + 1;
      if (updateSecondScore.innerText == maxLimit) {
        updateFirstScore.style.color = "red";
        updateSecondScore.style.color = "green"; // won
        isGameOver = true;
      }
    }
  }
});

reset.addEventListener("click", function () {
  isGameOver = false;
  updateFirstScore.innerText = 0;
  updateSecondScore.innerText = 0;

  updateFirstScore.style.color = "black";
  updateSecondScore.style.color = "black";
});
