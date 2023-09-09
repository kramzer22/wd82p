const startGameButton = document.getElementById("start-game");
const startGameMessage = document.getElementById("popup-display");
const startGameContainer = document.getElementById("popup-container");

const moveRock = document.getElementById("move-rock");
const movePaper = document.getElementById("move-paper");
const moveScissors = document.getElementById("move-scissors");

const playerTurn = document.getElementById("player-turn");
const computerTurn = document.getElementById("computer-turn");

const playerScore = document.getElementById("player-score");
const tieScore = document.getElementById("tie-score");
const computerScore = document.getElementById("computer-score");

const moveList = ["ROCK", "PAPER", "SCISSORS"];

let playerScoreValue = 0;
let tieScoreValue = 0;
let computerScoreValue = 0;

moveRock.addEventListener("click", function () {
  mainGame(0);
});
movePaper.addEventListener("click", function () {
  mainGame(1);
});
moveScissors.addEventListener("click", function () {
  mainGame(2);
});

const startGame = () => {
  playerScoreValue = 0;
  tieScoreValue = 0;
  computerScoreValue = 0;

  playerScore.textContent = "0";
  tieScore.textContent = "0";
  computerScore.textContent = "0";

  playerTurn.textContent = "#";
  computerTurn.textContent = "#";

  startGameContainer.style.opacity = "0";
  setTimeout(() => setPopupToHidden(), 400);
  console.log("game start");
};

function setPopupToHidden() {
  startGameContainer.style.display = "none";
}

function setPopupToBlock() {
  startGameContainer.style.opacity = "1";
}

startGameButton.addEventListener("click", startGame);

const getComputerMove = () => {
  let computerMove = Math.round(Math.random() * (moveList.length - 1));
  console.log("Computer move: " + moveList[computerMove]);

  return computerMove;
};

const mainGame = (playerMove) => {
  console.log("Player move: " + moveList[playerMove]);

  let computerMove = getComputerMove();

  result = challengePlayerMove(playerMove, computerMove);

  displayResult(result, playerMove, computerMove);

  if (playerScoreValue === 10) {
    endGame(true);
  } else if (computerScoreValue === 10) {
    endGame(false);
  }
};

const challengePlayerMove = (playerMove, computerMove) => {
  if (playerMove === computerMove) {
    console.log("Draw");

    return 0;
  } else if (
    (playerMove === 0 && computerMove === 1) ||
    (playerMove === 1 && computerMove === 2) ||
    (playerMove === 2 && computerMove === 0)
  ) {
    console.log("Lose");

    return 2;
  } else {
    console.log("Win");

    return 1;
  }
};

const displayResult = (result, playerMove, computerMove) => {
  if (result === 0) {
    tieScoreValue += 1;
    tieScore.textContent = tieScoreValue;
  } else if (result === 1) {
    playerScoreValue += 1;
    playerScore.textContent = playerScoreValue;
  } else {
    computerScoreValue += 1;
    computerScore.textContent = computerScoreValue;
  }

  playerTurn.textContent = moveList[playerMove];
  computerTurn.textContent = moveList[computerMove];
};

const endGame = (result) => {
  if (result === true) {
    startGameMessage.textContent = "YOU WIN!";
  } else {
    startGameMessage.textContent = "YOU LOSE!";
  }

  startGameButton.textContent = "PLAY AGAIN";

  startGameContainer.style.display = "block";
  setTimeout(() => setPopupToBlock(), 400);

  console.log("game start");
};
