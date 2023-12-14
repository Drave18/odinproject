let playerPointer = 0;
let computerPointer = 0;

function getComputerChoice(){
    const option = ["rock", "paper", "scissors"]
    let choose = option[Math.floor(Math.random() *3)];
    return choose
}


function playRound(playerSelection, computerSelection) {
    //

    if (computerSelection=== "rock" && playerSelection=="paper"){
        playerPointer++;
        return "paper beats rock you've won!"
    }
    else if (computerSelection=== "paper" && playerSelection=="rock"){
        computerPointer++
        return "paper beats rock you've lost!"
    }
    if (computerSelection === "rock" && playerSelection == "scissors") {
        computerPointer++
        return "rock beats scissors you've lost!";
    } 
    else if (computerSelection === "scissors" && playerSelection == "rock") {
        playerPointer++
        return "rock beats scissors you've won!";
    }
        
    //
    if (computerSelection=== "scissors" && playerSelection=="paper"){
        computerPointer++
        return "scissors beats paper you've lost!"
    }
    else if (computerSelection=== "paper" && playerSelection=="scissors"){
        playerPointer++
        return "scissors beats paper you've won!"
    }

    else {
        return "it's a tie"
    }
        
}

function game (){
    for (let i = 0; i < 5; i++) {
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("enter choose: ");
    console.log(playRound(playerSelection, computerSelection));
    console.log("computer: ", computerPointer, "Player", playerPointer);
    }
    if (playerPointer > computerPointer) {
    console.log("you've won the game, congratulations!");
    } else if (playerPointer < computerPointer) {
    console.log("you've lost the game, keep trying!");
    }
}

game()




