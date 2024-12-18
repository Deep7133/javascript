function rollDice() {
  const dice1Value = Math.floor(Math.random() * 6) + 1;
  const dice2Value = Math.floor(Math.random() * 6) + 1;

  const dice1 = document.getElementById("dice1");
  const dice2 = document.getElementById("dice2");

  
  dice1.style.animation = "rollDiceAnimation 0.6s ease";
  dice2.style.animation = "rollDiceAnimation 0.6s ease";

  setTimeout(() => {
    dice1.style.animation = "";
    dice2.style.animation = "";

    dice1.innerHTML = `<span>${dice1Value}</span>`;
    dice2.innerHTML = `<span>${dice2Value}</span>`;

    const result = document.getElementById("result");
    if (dice1Value > dice2Value) {
      result.textContent = "Player 1 Wins! 🎉";
    } else if (dice2Value > dice1Value) {
      result.textContent = "Player 2 Wins! 🎉";
    } else {
      result.textContent = "It's a Draw! 🤝";
    }
  }, 600);
}