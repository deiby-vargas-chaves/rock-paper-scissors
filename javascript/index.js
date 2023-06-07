const game = () => {
    let pScore = 0;
    let cScore = 0;

    //start the Game
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");
    
        playBtn.addEventListener("click", () => {
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
        });
    };
      //Play Match
    const playMatch = () =>{
        const options = document.querySelectorAll('.options button');
        const playerPow = document.querySelector('.player-pow');
        const computerPow = document.querySelector('.computer-pow');

        //Computer Options
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option =>{
            option.addEventListener('click', function(){
                //computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                // here is where we call compare pows
                comparePows(this.textContent, computerChoice);
                //update images
                playerPow.src = `/images/${this.textContent}.png`
                computerPow.src = `/images/${computerChoice}.png`
            });
        });
    };

    const updateScore = () =>{
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }



    const comparePows = (playerChoice, computerChoice) =>{
        // update text
        const winner = document.querySelector('.winner');
        if (playerChoice === computerChoice){
            winner.textContent = 'It is a tie';
            return;
        }
        //Check for Rock
        if(playerChoice === 'rock'){
            if (computerChoice === 'scissors'){
                winner.textContent = 'Player wins'
                pScore++;
                updateScore();                return;
            }else{
                winner.textContent = 'Computer wins'
                cScore++;
                updateScore();  
                return;
            }

        }
        //Check for paper
        if(playerChoice === 'paper'){
            if (computerChoice === 'scissors'){
                winner.textContent = 'Computer wins'
                cScore++;
                updateScore();  
                return;
            }else{
                winner.textContent = 'Player wins'
                pScore++;
                updateScore();  
                return;
            }

        }
        //Check for scissors
        if(playerChoice === 'scissors'){
            if (computerChoice === 'paper'){
                winner.textContent = 'Player wins'
                pScore++;
                updateScore();  
                return;
            }else{
                winner.textContent = 'Computer wins'
                cScore++;
                updateScore();  
                return;
            }

        }
    }

    // is call all the inner function
    startGame();
    playMatch();
    
};
//start the game function
game();


