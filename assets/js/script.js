document.addEventListener("DOMContentLoaded", function () {
    const choices = document.querySelectorAll(".choice-button");
    const computerChoiceDisplay = document.getElementById("computer-choice");
    const gameResultDisplay = document.getElementById("game-result");
    const userScoreDisplay = document.getElementById("user-score");
    const computerScoreDisplay = document.getElementById("computer-score");
    const triesLeftDisplay = document.getElementById("tries-left");
    const resetButton = document.getElementById("reset-button");

    let userScore = 0;
    let computerScore = 0;
    let triesLeft = 3;

    function computerPlay() {
        const choices = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function playRound(userChoice) {
        const computerChoice = computerPlay();
        computerChoiceDisplay.textContent = computerChoice;

        if (userChoice === computerChoice) {
            gameResultDisplay.textContent = "It's a tie!";
        } else if (
            (userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "paper" && computerChoice === "rock") ||
            (userChoice === "scissors" && computerChoice === "paper")
        ) {
            gameResultDisplay.textContent = "You win this round!";
            userScore++;
        } else {
            gameResultDisplay.textContent = "Computer wins this round!";
            computerScore++;
        }

        userScoreDisplay.textContent = userScore;
        computerScoreDisplay.textContent = computerScore;
        triesLeft--;

        if (triesLeft === 0) {
            endGame();
        } else {
            triesLeftDisplay.textContent = triesLeft;
        }
    }

    function endGame() {
        choices.forEach(choice => choice.setAttribute("disabled", "true"));

        if (userScore > computerScore) {
            gameResultDisplay.textContent = "Congratulations! You win the game.";
        } else if (userScore < computerScore) {
            gameResultDisplay.textContent = "Sorry, you lose the game.";
        } else {
            gameResultDisplay.textContent = "It's a tie game.";
        }
    }

    function resetGame() {
        userScore = 0;
        computerScore = 0;
        triesLeft = 3;
        triesLeftDisplay.textContent = triesLeft;
        choices.forEach(choice => {
            choice.removeAttribute("disabled");
        });
        gameResultDisplay.textContent = "";
        computerChoiceDisplay.textContent = "-";
        userScoreDisplay.textContent = "0";
        computerScoreDisplay.textContent = "0";
    }

    resetButton.addEventListener("click", function () {
        resetGame();
    });

    choices.forEach(choice => {
        choice.addEventListener("click", function () {
            if (triesLeft > 0) {
                playRound(choice.id);
            }
        });
    });
});
