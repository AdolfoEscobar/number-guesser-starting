let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


const generateTarget = () => {
    return Math.floor(Math.random() * 10);
} 

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    if(humanGuess >= 10 || humanGuess < 0){
        window.alert("Your number is out of range");
    }
    const humanDifference = Math.abs(targetGuess - humanGuess);
    const computerDifference = Math.abs(targetGuess - computerGuess);
    return humanDifference <= computerDifference;
}


const updateScore = winner => {
    if(winner === "human"){
        humanScore++;
    }else if(winner === "computer"){
        computerScore++;
    }
}

const advanceRound = () => currentRoundNumber++;
