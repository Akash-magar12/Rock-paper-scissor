let choices = ["rock", "paper", "scissor"];
let player = document.querySelector("#player");
let computer = document.querySelector("#computer");
let results = document.querySelector("#result");
let computerScore = document.querySelector("#computerScore");
let playerScore = document.querySelector("#playerScore");
let green = document.querySelector(".green");
let red = document.querySelector(".red");
green.classList.remove("green");
red.classList.remove("red");
let result = "";
let playerCount = 0;
let ComputerCount = 0;



function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 2)];

  if (playerChoice === computerChoice) {
    result = "Its a Tie !";
    results.style.color = "blue";

  } else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice === "scissor" ? "You Win!" : "You Lose !";
        break;
      case "paper":
        result = computerChoice === "rock" ? "You Win!" : "You Lose !";

        break;
      case "scissor":
        result = computerChoice === "paper" ? "You Win!" : "You Lose!";

        break;
    }
  }

  player.innerHTML = `Player: ${playerChoice}`;
  computer.innerHTML = `Computer: ${computerChoice}`;
  results.innerHTML = ` ${result}`;

  switch (result) {
    case "You Win!":
      playerCount++;
      green.classList.add("green");
      green.innerHTML = playerCount;
      results.style.color = "green";

      break;
    case "You Lose!":
      ComputerCount++;
      red.classList.add("red");

      red.innerHTML = ComputerCount;
      results.style.color = "red";

      break;
  }
}

// let rockBtn = document.querySelector("#rock");
// rockBtn.addEventListener("click", function () {
//   playGame("rock");
// });

// let paperBtn = document.querySelector("#paper");
// paperBtn.addEventListener("click", function () {
//   playGame("paper");
// });

// let scissorBtn = document.querySelector("#scissor");
// scissorBtn.addEventListener("click", function () {
//   playGame("scissor");
// });
