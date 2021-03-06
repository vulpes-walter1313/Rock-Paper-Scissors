// declare variable of player wins
let compWins = 0;
// declare variable of computer wins
let playerWins = 0;
// Declares players choice as a variable
let playerChoice;
// counts the number of rounds
let roundCounter = 0;

function computerPlay() {
  // Randomly chose between Rock, Paper, or Scissors
  const compChoice = Math.floor(Math.random() * 3) ;
  let result;

  switch (compChoice) {
    case 0:
      result = 'rock';
      break;

    case 1:
      result = 'paper';
      break;
    case 2:
      result = 'scissors';
  }

  return result;
}

function playRound(playerSelection, computerSelection) {
  // compares the player's joice vs computer's choice and returns
  // a string whether you win or lose the round.
  switch (playerSelection) {
    case 'rock':
      if (computerSelection === 'paper') {
        compWins++;
        roundCounter++;
        return "You lose! Paper beats Rock!";
      } else if (computerSelection === 'scissors') {
        playerWins++;
        roundCounter++;
        return 'You win! Rock beats Scissors!';
      } else {
        // Implied that Computer's choice is rock
        roundCounter++;
        return "T'was a Tie! You both selected Rock!";
      }
      break;

      case 'paper':
        if (computerSelection === 'paper') {
          roundCounter++;
          return "T'was a Tie! You both selected Paper!";
        } else if (computerSelection === 'scissors') {
          compWins++;
          roundCounter++;
          return 'You lose! Scissors beats Paper!';
        } else {
          // implied that computers choice is rock
          playerWins++;
          roundCounter++;
          return "You Win! Paper beats Rock!";
        }
        break;

        case 'scissors':
          if (computerSelection === 'paper') {
            playerWins++;
            roundCounter++;
            return "You Win! Scissors beats Paper!";
          } else if (computerSelection === 'scissors') {
            roundCounter++;
            return "T'was a Tie! You both selected Scissors!";
          } else {
            // implied that computers choice is rock
            roundCounter++;
            compWins++;
            return "You Lose! Rock beats Scissors";
          }
          break;
        default:
        // this is in the event the user inputs anything other than the choices
          return "You didn't choose an appropriate choice.\nReload and try again";
  }
}

function play(value) {
  playerChoice = value;
  let computerChoice = computerPlay();

  const resultDisplay = document.querySelector('#round-result');
  resultDisplay.textContent = playRound(playerChoice, computerChoice);
  resultDisplay.classList.add("result");

  const playerChoiceDisplay = document.querySelector("#player-choice");
  playerChoiceDisplay.textContent = `Player's choice: ${playerChoice}`;
  playerChoiceDisplay.classList.add("result");

  const computerChoiceDisplay = document.querySelector("#computer-choice");
  computerChoiceDisplay.textContent = `Comp's choice: ${computerChoice}`;
  computerChoiceDisplay.classList.add("result");

  const roundCounterDisplay = document.querySelector("#round-counter");
  roundCounterDisplay.textContent = `Round: ${roundCounter}`;
  roundCounterDisplay.classList.add("result");

  if (roundCounter >= 5) {
    if (playerWins == compWins) {
      alert(`T'was a tie with ${playerWins} each.`);
      gameReset();
    } else if (playerWins > compWins) {
       alert(`You've won with ${playerWins} over Computer's ${compWins}!`);
       gameReset();
    } else {
      alert(`Ya lost, You got beat by Computer's ${compWins} over your ${playerWins} wins!`);
      gameReset();
    }
  }
}

function gameReset() {
  roundCounter = 0;
  compWins = 0;
  playerWins = 0;
  const resultDisplay = document.querySelector('#round-result');
  resultDisplay.textContent = ''
  resultDisplay.classList.remove("result");
  const playerChoiceDisplay = document.querySelector("#player-choice");
  playerChoiceDisplay.textContent = "";
  playerChoiceDisplay.classList.remove("result");
  const computerChoiceDisplay = document.querySelector("#computer-choice");
  computerChoiceDisplay.textContent = "";
  computerChoiceDisplay.classList.remove("result");
  const roundCounterDisplay = document.querySelector("#round-counter");
  roundCounterDisplay.textContent = "";
  roundCounterDisplay.classList.remove("result");
}

function game(){
  const btns = document.querySelectorAll('button');
  btns.forEach(button => {
    // console.log(button.value);
    button.addEventListener('click',() => play(button.value))
  });
}
game();
