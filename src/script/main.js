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

    battlePlayer.innerHTML = `
    <div class="button-pick-big ${myHand} you">
        <div class="background-linear-big ${myHand}-color"></div>
    </div>
    <div class="result">
      <h1 class="result-title">${messageGame}</h1>
      <button class="button-play">Play Again</button>
    </div>
    <div class="button-pick-big ${computerHand} computer">
        <div class="background-linear-big ${computerHand}-color"></div>
    </div>
  `;

    playAgain = document.querySelector(".button-play");
    playAgain.addEventListener("click", () => {
      battle.className = "close";
      pick.className = "pick";
    });
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
