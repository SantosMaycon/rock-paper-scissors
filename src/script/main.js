function execut() {
  // // Open Modal Rules

  const btnRules = document.querySelector(".button-rules");
  const modalRules = document.querySelector(".rules-info");

  btnRules.addEventListener("click", () => {
    modalRules.className = "rules-info openModal";
  });

  // // Close Modal Rules

  const btnCloseModal = document.querySelector(".button-close");

  btnCloseModal.addEventListener("click", () => {
    modalRules.className = "rules-info closeModal";
  });

  // // ----------------------------------------------------------

  const paper = document.querySelector(".paper");
  const scissors = document.querySelector(".scissors");
  const rock = document.querySelector(".rock");

  const battle = document.querySelector(".battle");
  const pick = document.querySelector(".pick");
  const battlePlayer = document.querySelector(".battle-player");

  const score = document.querySelector(".scoreNumber");

  let playAgain;

  function picked(hand) {
    battle.className = "battle";
    pick.className = "pick close";

    let myHand = hand.classList[1];
    let computerHand;
    let messageGame;

    switch (Math.floor(Math.random() * 3)) {
      case 0:
        computerHand = "paper";
        break;

      case 1:
        computerHand = "scissors";
        break;

      case 2:
        computerHand = "rock";
        break;

      default:
        break;
    }

    if (
      (myHand == "paper" && computerHand == "rock") ||
      (myHand == "scissors" && computerHand == "paper") ||
      (myHand == "rock" && computerHand == "scissors")
    ) {
      messageGame = "You Win";
    } else if (myHand === computerHand) {
      messageGame = "Draw";
    } else {
      messageGame = "You Loser";
    }

    let youPick = `
      <div class="button-pick-big ${myHand} you">
          <div class="background-linear-big ${myHand}-color"></div>
      </div>
    `;

    let computerPick = `
      <div class="button-pick-big ${computerHand} computer">
        <div class="background-linear-big ${computerHand}-color"></div>
      </div>
    `;

    let messageGameResult = `
      <div class="result">
        <h1 class="result-title">${messageGame}</h1>
        <button class="button-play">Play Again</button>
      </div>
    `;

    battlePlayer.innerHTML = youPick;

    setTimeout(() => {
      battlePlayer.innerHTML = `
        ${youPick}
        ${computerPick}        
      `;
    }, 2000);

    setTimeout(() => {
      battlePlayer.innerHTML = `
        ${youPick}
        ${messageGameResult}
        ${computerPick}
      `;

      if (messageGame == "You Win") {
        score.innerText = +score.innerText + 1;
      } else if (messageGame == "You Loser") {
        if (Number(score.innerText) > 0) {
          score.innerText = +score.innerText - 1;
        }
      }

      playAgain = document.querySelector(".button-play");
      playAgain.addEventListener("click", () => {
        battle.className = "close";
        pick.className = "pick";
      });
    }, 3000);
  }

  paper.addEventListener("click", () => {
    picked(paper);
  });
  scissors.addEventListener("click", () => {
    picked(scissors);
  });
  rock.addEventListener("click", () => {
    picked(rock);
  });
}

execut();
