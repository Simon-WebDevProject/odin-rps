let playerChoice, compChoice;
let pScore = 0, cScore = 0;

function getCompChoice(){
    let temp = Math.floor(Math.random() * 3) + 1;

    if(temp == 1){
        return "ROCK";
    } 
    else if(temp == 2){
        return "PAPER";
    }
    else{
        return "SCISSOR";
    }
}

function playRound(playerChoice, compChoice){

    if(playerChoice == "ROCK" && compChoice == "ROCK"){
        return "TIE GAME! ROCK == ROCK";
    }
    else if(playerChoice == "ROCK" && compChoice == "PAPER"){
        cScore++;
        return "YOU LOSE! ROCK < PAPER";
    }
    else if(playerChoice == "ROCK" && compChoice == "SCISSOR"){
        pScore++
        return "YOU WIN! ROCK > SCISSOR";
    }
    else if(playerChoice == "PAPER" && compChoice == "ROCK"){
        pScore++
        return "YOU WIN! PAPER > ROCK";
    }
    else if(playerChoice == "PAPER" && compChoice == "PAPER"){
        return "TIE GAME! PAPER == PAPER";
    }
    else if(playerChoice == "PAPER" && compChoice == "SCISSOR"){
        cScore++;
        return "YOU LOSE! PAPER < SCISSOR";
    }
    else if(playerChoice == "SCISSOR" && compChoice == "ROCK"){
        cScore++;
        return "YOU LOSE! SCISSOR < ROCK";
    }
    else if(playerChoice == "SCISSOR" && compChoice == "PAPER"){
        pScore++
        return "YOU WIN! SCISSOR > PAPER";
    }
    else if(playerChoice == "SCISSOR" && compChoice == "SCISSOR"){
        return "TIE GAME! SCISSOR == SCISSOR";
    }
    else{
        return "error";
    }

}

const log = document.querySelector('.log span');
const score = document.querySelector('.score span');
const restart = document.querySelector('.restart');


function game(){
    compChoice = getCompChoice();

    if (pScore < 5 && cScore < 5){
        log.innerHTML = (playRound(playerChoice, compChoice));
        score.innerHTML = `${pScore} - ${cScore}`;
    }

    if (pScore == 5){
            log.innerHTML = "YOU WIN!";
            restart.classList.add('end');
        }
    else if (cScore == 5){
            log.innerHTML = "YOU LOSE..";
            restart.classList.add('end');
    }
}

const button = document.querySelectorAll('.button');
button.forEach((button) => button.addEventListener('click', function(){
    this.classList.add('down');
    setTimeout(() => this.classList.remove('down'), 100);

    playerChoice = this.innerHTML;
    game();
}));

restart.addEventListener('click', function(){
    location.reload();
})