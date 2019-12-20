// Randomly generate computer's choice between rock paper or scissors
const computerPlay = () => {
    const options = ['rock', 'paper', 'scissors']

    // random number 0 - 2
    const choice = Math.floor(Math.random() * 3) 

    return(options[choice])
}

// function that plays one round of rock paper scissors 
const playRound = (playerSelection, computerSelection) => {
    playerSelection = prompt('Type rock, paper, or scissors: ')
    playerSelection = playerSelection.toLowerCase();

    computerSelection = computerPlay()
    
    if (playerSelection == computerSelection) {
        return 'There is a tie!'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return `You lose! ${ computerSelection } beats ${ playerSelection }.`
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return `You lose! ${ computerSelection } beats ${ playerSelection }.`
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return `You lose! ${ computerSelection } beats ${ playerSelection }.`
    } else {
        return `You win! ${ playerSelection } beats ${ computerSelection }.`
    }
}

const game = () => {
    const roundResult = playRound()
    document.querySelector('.result').innerHTML = roundResult
    return roundResult
}

game()

