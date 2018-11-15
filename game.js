function game () {
  
		//Picks randomly for the computer.
		function computerPlay() {
			let computerSelection = ['Rock', 'Paper', 'Scissors'];
			return computerSelection[Math.floor(Math.random() * computerSelection.length)];
		}
		
		//Decides the winner of the round and updates the score.
		function playRound (playerSelection, computerSelection) {

			if (playerSelection.toUpperCase() == computerSelection.toUpperCase()) {
				return (playerSelection + ' ties with ' + computerSelection + '.');
				
			} else if (playerSelection.toUpperCase() == 'ROCK' && computerSelection == 'Scissors'){
				player_score ++;
				return ("You Win! Rock beats Scissors.");
				
			} else if (playerSelection.toUpperCase() == 'PAPER' && computerSelection == 'Rock') {
				player_score ++;
				return ("You Win! Paper beats Rock.");
				
			} else if (playerSelection.toUpperCase() == 'SCISSORS' && computerSelection == 'Paper') {
				player_score ++;
				return ("You Win! Scissors beats Paper.");
				
			} else {
				computer_score ++;
				return ("You Lose! " + computerSelection + " beats " + playerSelection + ".");
			}
		}
		
		const playerSelection = prompt("Pick: Rock, Paper, Scissors");
		const computerSelection = computerPlay();
		
		console.clear();
		console.log(playRound(playerSelection, computerSelection));
		console.log('Player: ' + player_score);
		console.log('Computer: ' + computer_score);
	}
	
	let player_score = 0;
	let computer_score = 0;
	
	let round = 0;
	
	for (i = 0; i < 5; i++){
		game();
	}
	
	if (player_score > computer_score) {
		console.log("You won the match!");
	}	else {
		console.log("You lost the match!");
	}