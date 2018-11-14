// Game values
let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

// UI elements
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  mesg = document.querySelector("#message");

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener("click", () => {
  let guess = parseInt(guessInput.value);

  // Validate input
  if (isNaN(guess) || guess < min || guess > max) {
    mesg.style.color = "red";
    setMessage(`Please enter a number between ${min} and ${max}`);
  }

  // Check if won
  if (guess === winningNum) {
    // disable input
    gameOver(true, `${winningNum} is correct !, YOU WIN!`);
  } else {
    // Wrong num
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      // Game over = lost
      gameOver(
        false,
        `Game Over, you lost. The correct number was ${winningNum}`
      );
    } else {
      // Game continues - answer wrong

      // change border color
      guessInput.style.borderColor = "red";
      mesg.style.color = "red";
      // clear the input
      guessInput.value = "";

      // tell user guesses left
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, "red");
    }
  }
});

// Set Message
function setMessage(msg) {
  mesg.textContent = msg;
}

// Game over function
function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");
  // disable input
  guessInput.disabled = true;
  // change border color
  guessInput.style.borderColor = color;
  mesg.style.color = color;
  // set message
  setMessage(msg);
}
