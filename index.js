let homeScore = document.getElementById("score-home");

let scoreHome = 0;

function homeOne() {
  scoreHome = scoreHome + 1;
  homeScore.textContent = scoreHome;
}

function homeTwo() {
  scoreHome = scoreHome + 2;
  homeScore.textContent = scoreHome;
}
function homeThree() {
  scoreHome = scoreHome + 3;
  homeScore.textContent = scoreHome;
}

let guestScore = document.getElementById("score-guest");
let scoreGuest = 0;

function guestOne() {
  scoreGuest = scoreGuest + 1;
  guestScore.textContent = scoreGuest;
}

function guestTwo() {
  scoreGuest = scoreGuest + 2;
  guestScore.textContent = scoreGuest;
}

function guestThree() {
  scoreGuest = scoreGuest + 3;
  guestScore.textContent = scoreGuest;
}

function resetBtn() {
  homeScore.textContent = 0;
  scoreHome = 0;
  guestScore.textContent = 0;
  scoreGuest = 0;
}
