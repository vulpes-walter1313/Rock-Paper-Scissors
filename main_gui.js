// declare variable of player wins
let compWins = 0;
// declare variable of computer wins
let playerWins = 0;
// Declares players choice as a variable
let playerChoice;

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
        return "You lose! Paper beats Rock!";
      } else if (computerSelection === 'scissors') {
        playerWins++;
        return 'You win! Rock beats Scissors!';
      } else {
        // Implied that Computer's choice is rock
        return "T'was a Tie! You both selected Rock!";
      }
      break;

      case 'paper':
        if (computerSelection === 'paper') {
          return "T'was a Tie! You both selected Paper!";
        } else if (computerSelection === 'scissors') {
          compWins++;
          return 'You lose! Scissors beats Paper!';
        } else {
          // implied that computers choice is rock
          playerWins++;
          return "You Win! Paper beats Rock!";
        }
        break;

        case 'scissors':
          if (computerSelection === 'paper') {
            playerWins++;
            return "You Win! Scissors beats Paper!";
          } else if (computerSelection === 'scissors') {
            return "T'was a Tie! You both selected Scissors!";
          } else {
            // implied that computers choice is rock
            compWins++;
            return "You Lose! Rock beats Scissors";
          }
          break;
        default:
        // this is in the event the user inputs anything other than the choices
          return "You didn't choose an appropriate choice.\nReload and try again";
  }
}

function game(){

  const btns = document.querySelectorAll('button');
  btns.forEach(button => {
    // console.log(button.value);
    button.addEventListener('click', () => {
      playerChoice = button.value;
      let computerChoice = computerPlay();
      // console.log(`Comp's choice: ${computerChoice}`);
      // console.log(playRound(playerChoice, computerChoice));
      const resultDisplay = document.querySelector('.results');
      resultDisplay.textContent = playRound(playerChoice, computerChoice);
      resultDisplay.textContent += `\n\nComp's choice: ${computerChoice}`;
    }
  )});
}
game();
