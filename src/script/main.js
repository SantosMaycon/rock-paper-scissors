// Open Modal Rules

const btnRules = document.querySelector(".button-rules");
const modalRules = document.querySelector(".rules-info");

btnRules.addEventListener("click", () => {
  modalRules.className = "rules-info openModal";
  console.log("Maycão");
});

// Close Modal Rules

const btnCloseModal = document.querySelector(".button-close");

btnCloseModal.addEventListener("click", () => {
  modalRules.className = "rules-info closeModal";
  console.log("Da Bike");
});
