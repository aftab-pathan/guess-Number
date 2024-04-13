let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);

function checkGuess() {
    let userInputvalue = parseInt(userInput.value);
    if (userInputvalue > randomNumber) {
        gameResult.textContent = "Too High! Try Again.";
        gameResult.style.backgroundColor = "black"
    } else if (userInputvalue < randomNumber) {
        gameResult.textContent = "Too Low! Try Again.";
        gameResult.style.backgroundColor = "black"
    } else if (userInputvalue === randomNumber) {
        gameResult.textContent = "Congratulations! You got it right."
        gameResult.style.backgroundColor = "green"
    } else {
        gameResult.textContent = "Please provide a valid input."
        gameResult.style.backgroundColor = "red"
    }

}