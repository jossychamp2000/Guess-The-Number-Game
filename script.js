

// Guess The Number Game


// Variable to store the list of guesses 
let guesses = [];

// Variable for store the correct random number 
let correctNumber = getRandomNumber();



window.onload = function () {
  document.getElementById("number-submit").addEventListener("click", playGame);
  document.getElementById("restart-game").addEventListener("click", initGame)

}

/**
 * Functionality for playing the whole game
 */
function playGame() {
  // *CODE GOES BELOW HERE *
  let numberGuess = document.getElementById('number-guess').value;
  displayResult(numberGuess);
  saveGuessHistory(numberGuess);
  displayHistory();

}

/**
 * Show the result for if the guess it too high, too low, or correct.
 */


function displayResult(numberGuess) {
  if (numberGuess > correctNumber) {
    showNumberAbove();
  } else if (numberGuess < correctNumber) {
    showNumberBelow();
  } else if (numberGuess == correctNumber) {
    showYouWon();
  }

}



/**
 * Initialize a new game by resetting all values and content on the page
 
 */
function initGame() {

  correctNumber = getRandomNumber();
  document.getElementById("result").innerHTML = "";
  guesses = [];
  displayHistory();
}

/**
 * Reset the HTML content for guess history
 */
function resetResultContent() {
  document.getElementById("result").innerHTML = "";
}

/**
 * Return a random number between 1 and 100
 *   Math.random was used to get the random number 
 */
function getRandomNumber() {

  let randomNumber = Math.random();
  let wholeNumber = Math.floor(randomNumber * 100) + 1;
  return wholeNumber;

}

/**
 * Save guess history 
 *  .push was used to "append to array in javascript"
 *  Empty array for guesses variable was used to store gueses.
 */
function saveGuessHistory(guess) {

  guesses.push(guess)

}

/**
 * Display guess history to user
 * HTML TO USE:
 * <ul class='list-group'>
 *  <li class='list-group-item'>You guessed {number}</li
 * </ul>
 *  while loop and string concatentation was used to create a list of guesses
 */
function displayHistory() {
  let index = guesses.length - 1;
  let list = "<ul class='list-group'>";

  while (index >= 0) {
    list += "<li class='list-group-item'>" +
      "You guessed " + guesses[index] + "</li>";
    index -= 1;
  }
  list += '</ul>';
  document.getElementById("history").innerHTML = list;
}



/**
 * Retrieve the dialog based on if the guess is wrong or correct 
 */
function getDialog(dialogType, text) {
  let dialog;
  switch (dialogType) {
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}

function showYouWon() {
  const text = "Awesome job, you got it!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog 
   */

  let dialog = getDialog('won', text)
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove() {
  const text = "Your guess is too high!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   */

  let dialog = getDialog('warning', text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow() {
  const text = "Your guess is too low!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   */

  let dialog = getDialog('warning', text);

  document.getElementById("result").innerHTML = dialog;
}
