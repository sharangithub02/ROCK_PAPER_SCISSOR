let score = JSON.parse(localStorage.getItem("gameScore")) || {
  wins: 0,
  loose: 0,
  tied: 0,
};

function playGame(playerMove) {
  let randomNumber = Math.random();
  let computermove = "";
  if (randomNumber > 0 && randomNumber < 1 / 3) {
    computermove = "rock";
  } else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) {
    computermove = "paper";
  } else if (randomNumber > 2 / 3 && randomNumber < 1) {
    computermove = "scissor";
  }
  let result = "";
  if (playerMove === "rock") {
    if (computermove === "rock") {
      result = "Match tied";
    } else if (computermove === "paper") {
      result = "You loose";
    } else if (computermove === "scissor") {
      result = "You win";
    }
  } else if (playerMove === "paper") {
    if (computermove === "rock") {
      result = "You win";
    } else if (computermove === "paper") {
      result = "Match tied";
    } else if (computermove === "scissor") {
      result = "You loose";
    }
  } else if (playerMove === "scissor") {
    if (computermove === "rock") {
      result = "You loose";
    } else if (computermove === "paper") {
      result = "You win";
    } else if (computermove === "scissor") {
      result = "Match tied";
    }
  }
  document.querySelector(".js-result").innerHTML = result;

  document.querySelector(".js-move").innerHTML = `
    You - <img src="moves-image/${playerMove}-emoji.png" alt="">
        <img src="moves-image/${computermove}-emoji.png" alt=""> - Computer

    `;
  if (result === "You win") {
    score.wins += 1;
  } else if (result === "You loose") {
    score.loose += 1;
  } else if (result === "Match tied") {
    score.tied += 1;
  }

  document.querySelector(".js-match-score").innerHTML = `
    Wins:${score.wins}&nbsp Loose:${score.loose} &nbsp Tied:${score.tied}
    `;

  localStorage.setItem("gameScore", JSON.stringify(score));
}

function scoreReset() {
  score.wins = 0;
  score.loose = 0;
  score.tied = 0;
  document.querySelector(".js-match-score").innerHTML = `
    Wins:${score.wins}&nbsp Loose:${score.loose}&nbsp Tied:${score.tied}
    `;
  localStorage.removeItem("gameScore");
}
