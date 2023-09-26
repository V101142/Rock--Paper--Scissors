console.log("Connected")
document.addEventListener("DOMContentLoaded", () => {
        const choices = document.querySelectorAll(".choice-button");
        const computerChoiceDisplay = document.getElementById("computer-choice");
        const gameResultDisplay = document.getElementById("game-result");
        const userScoreDisplay = document.getElementById("user-score");
        const computerScoreDisplay = document.getElementById("computer-score");
        const triesLeftDisplay = document.getElementById("tries-left");

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
            } else if ((userChoice === "rock" && computerChoice === "scissors") ||
                (userChoice === "paper" && computerChoice === "rock") ||
                (userChoice === "scissors" && computerChoice === "paper")) {
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

        choices.forEach(choice => {
            choice.addEventListener("click", function () {
                if (triesLeft > 0) {
                    playRound(choice.id);
                }
            });
        });
    });