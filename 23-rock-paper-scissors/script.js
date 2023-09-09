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

const moveList = ["images/rock.svg", "images/paper.svg", "images/scissors.svg"];

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

  startGameContainer.style.opacity = "0";
  setTimeout(() => setPopupToHidden(), 400);
  console.clear();
  console.log("game start");
};

function setPopupToHidden() {
  startGameContainer.style.display = "none";
}

function setPopupOpacity() {
  startGameContainer.style.opacity = "1";
}

startGameButton.addEventListener("click", startGame);

const getComputerMove = () => {
  let computerMove;
  let tempComputerMove = Math.random() * moveList.length;
  console.log(tempComputerMove);
  if (tempComputerMove < 1) {
    computerMove = 0;
  } else if (tempComputerMove < 2) {
    computerMove = 1;
  } else {
    computerMove = 2;
  }
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

  playerTurn.setAttribute("src", moveList[playerMove]);
  computerTurn.setAttribute("src", moveList[computerMove]);
  if (playerMove === 2) {
    playerTurn.style.transform = "rotate(-180deg) scaleY(-1)";
    // console.log("triggered");
  } else {
    playerTurn.style.transform = "rotate(90deg)";
  }

  if (computerMove === 2) {
    // console.log("triggered");
    computerTurn.style.transform = "rotate(0deg)";
  } else {
    computerTurn.style.transform = "rotate(-90deg) scaleX(-1)";
  }
};

const endGame = (result) => {
  if (result === true) {
    startGameMessage.textContent = "YOU WIN!";
    console.log("game end: you win!");
  } else {
    startGameMessage.textContent = "YOU LOSE!";
    console.log("game end: you lose!");
  }

  startGameButton.textContent = "PLAY AGAIN";

  startGameContainer.style.display = "block";
  setTimeout(() => setPopupOpacity(), 400);
};
