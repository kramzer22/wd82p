const moveList = ["rock", "paper", "scissor"];
let playerScore = 0;
let enemyScore = 0;

let enemyMove;

function playerPick() {
  let playerMove = parseInt(
    prompt("Select 1. for rock, 2. for paper, 3. scissor")
  );

  playerMove -= 1;
  if (playerMove >= 0 && playerMove <= 2) {
    enemyPick(playerMove);
  } else {
    alert("Invalid pick. Please try again!");
    playerPick();
  }
}

function enemyPick(playerMove) {
  const enemyMove = Math.round(Math.random() * (moveList.length - 1));

  challengeResult(playerMove, enemyMove);
}

function challengeResult(playerMove, enemyMove) {
  let messageString =
    "Your move: " +
    moveList[playerMove] +
    " and Enemy move: " +
    moveList[enemyMove];
  if (playerMove === enemyMove) {
    alert(
      messageString +
        ". It's a draw.\nScore: " +
        playerScore +
        " - " +
        enemyScore
    );
  } else if (
    (playerMove === 0 && enemyMove === 1) ||
    (playerMove === 1 && enemyMove === 2) ||
    (playerMove === 2 && enemyMove === 0)
  ) {
    enemyScore += 1;
    alert(
      messageString + ". You lose.\nScore: " + playerScore + " - " + enemyScore
    );
  } else {
    playerScore += 1;
    alert(
      messageString + ". You win.\nScore: " + playerScore + " - " + enemyScore
    );
  }

  if (playerScore === 5) {
    alert("Game Over! You win!");
  } else if (enemyScore === 5) {
    alert("Game Over! You lose!");
  } else {
    playerPick();
  }
}

playerPick();
