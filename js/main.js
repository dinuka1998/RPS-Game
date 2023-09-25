//player confirmation
let palyerConfirm = confirm("Let's play rock, paper or scissors?");

//game logic
if (palyerConfirm) {
  let playerChoice = prompt("Please enter rock, paper or scissors");
  if (playerChoice) {
    let player = playerChoice.trim().toLowerCase();
    if (player === "rock" || player === "paper" || player === "scissors") {
      let computerChoice = Math.floor(Math.random() * 3) + 1;

      let computer =
        computerChoice === 1
          ? "rock"
          : computerChoice === 2
          ? "paper"
          : "scissors";

      let result =
        player === computer
          ? "Tie Game"
          : computer === "rock" && player === "paper"
          ? `You: ${player}
        \nComputer: ${computer}
        \nYou Wins!`
          : computer === "paper" && player === "scissors"
          ? `You: ${player}
        \nComputer: ${computer}
        \nYou Wins!`
          : computer === "scissors" && player === "rock"
          ? `You: ${player}
        \nComputer: ${computer}
        \nYou Wins!`
          : `You: ${player}
        \nComputer: ${computer}
        \nComputer Wins!`;
      alert(result);
      let playAgain = confirm("Let's Play Again?");
      playAgain ? location.reload() : alert("May be next time");
    } else {
      alert("Please only enter rock, paper or scissors");
    }
  } else {
    alert("Changed your mid eh? see you next time");
  }
} else {
  alert("Maybe next time then.");
}

console.log(palyerConfirm);
