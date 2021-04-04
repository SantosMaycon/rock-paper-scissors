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

  let handType = hand.classList[1];

  battlePlayer.innerHTML = `
    <div class="button-pick-big ${handType} you">
        <div class="background-linear-big ${handType}-color"></div>
    </div>

    <div class="result">
      <h1 class="result-title">You Win</h1>
      <button class="button-play">Play Again</button>
    </div>

    <div class="button-pick-big ${handType} computer">
        <div class="background-linear-big ${handType}-color"></div>
    </div>
  `;

  console.log("Play Again: ", playAgain);

  playAgain = document.querySelector(".button-play");
  playAgain.addEventListener("click", () => {
    console.log("Play Again: ", playAgain);
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
