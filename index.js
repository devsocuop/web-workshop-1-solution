const playAgainBtn = document.getElementById('play-again-btn');
const btns = document.querySelectorAll('.button-item');
const answerContainer = document.getElementById('answer');
let winnerColour;
let gameOver = false;

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function (event) {
        event.preventDefault();
        if (!gameOver) {
            if (event.target.name == winnerColour) {
                answerContainer.textContent = 'Answer: Correct!';
                gameOver = true;
            } else {
                answerContainer.textContent = 'Answer: Incorrect!';
            }
        } else {
            alert('Game is over!');
        }
    });
}

function startGame() {
    winnerColour = Math.floor(Math.random() * 6);
    answerContainer.textContent = 'Answer: ';
    gameOver = false;
}

playAgainBtn.addEventListener('click', function (event) {
    event.preventDefault();
    startGame();
});

startGame();