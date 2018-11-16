function game() {
  
		//Picks randomly for the computer. Moved the function outside of game function.
		function computerPlay() {
			let computerSelection = ['Rock', 'Paper', 'Scissors'];	
			return computerSelection[Math.floor(Math.random() * computerSelection.length)];
		}
		
		//Decides the winner of the round; updates the round and score.
		function playRound (playerSelection, computerSelection) {

			//Displays computer's selection on the GUI.
				if (computerSelection == 'Rock') {
					document.getElementById("computer_rock").style.backgroundImage = "url('./selected/computer_rock.png')";
					document.getElementById("computer_paper").style.backgroundImage = "url('./unselected/computer_paper.png')";
					document.getElementById("computer_scissors").style.backgroundImage = "url('./unselected/computer_scissors.png')";
				} else if (computerSelection =='Paper') {
					document.getElementById("computer_rock").style.backgroundImage = "url('./unselected/computer_rock.png')";
					document.getElementById("computer_paper").style.backgroundImage = "url('./selected/computer_paper.png')";
					document.getElementById("computer_scissors").style.backgroundImage = "url('./unselected/computer_scissors.png')";
				} else if (computerSelection == 'Scissors') {
					document.getElementById("computer_rock").style.backgroundImage = "url('./unselected/computer_rock.png')";
					document.getElementById("computer_paper").style.backgroundImage = "url('./unselected/computer_paper.png')";
					document.getElementById("computer_scissors").style.backgroundImage = "url('./selected/computer_scissors.png')";
				}	
	
		
			if (playerSelection.toUpperCase() == computerSelection.toUpperCase()) {
				round ++;
				document.getElementById("h1").innerHTML = "Round " + round;
				document.getElementById("p_round").innerHTML = playerSelection + ' ties with ' + computerSelection + '.';
				return (playerSelection + ' ties with ' + computerSelection + '.');
				
			} else if (playerSelection.toUpperCase() == 'ROCK' && computerSelection == 'Scissors'){
				player_score ++;
				round ++;
				document.getElementById("player_score").innerHTML = "Score: " + player_score;
				document.getElementById("h1").innerHTML = "Round " + round;
				document.getElementById("p_round").innerHTML = "You Win! Rock beats Scissors.";
				return ("You Win! Rock beats Scissors.");
				
			} else if (playerSelection.toUpperCase() == 'PAPER' && computerSelection == 'Rock') {
				player_score ++;
				round ++;
				document.getElementById("player_score").innerHTML = "Score: " + player_score;
				document.getElementById("h1").innerHTML = "Round " + round;
				document.getElementById("p_round").innerHTML = "You Win! Paper beats Rock.";
				return ("You Win! Paper beats Rock.");
				
			} else if (playerSelection.toUpperCase() == 'SCISSORS' && computerSelection == 'Paper') {
				player_score ++;
				round ++;
				document.getElementById("player_score").innerHTML = "Score: " + player_score;
				document.getElementById("h1").innerHTML = "Round " + round;
				document.getElementById("p_round").innerHTML = "You Win! Scissors beats Paper.";
				return ("You Win! Scissors beats Paper.");
				
			} else {
				computer_score ++;
				round ++;
				document.getElementById("computer_score").innerHTML = "Score: " + computer_score;
				document.getElementById("h1").innerHTML = "Round " + round;
				document.getElementById("p_round").innerHTML = "You Lose! " + computerSelection + " beats " + playerSelection + ".";
				return ("You Lose! " + computerSelection + " beats " + playerSelection + ".");
			}
		}
		
		const playerSelection = selection;
		const computerSelection = computerPlay();
		
		//Logs the match to the web browser's console.
		console.clear();
		console.log(playRound(playerSelection, computerSelection));
		console.log('Player: ' + player_score);
		console.log('Computer: ' + computer_score);
	}
	
let round = 1;
let selection = "Rock";
let player_score = 0;
let computer_score = 0;

function gameStart() {
	if (round <5) {
		game();
	} else if (round = 5) {
		if (player_score > computer_score) {
			document.getElementById("h1").innerHTML = "Winner!";
			document.getElementById("p_round").innerHTML = "You won the match.";
			document.getElementById("game_reset").innerHTML = "Play again?";
		} else if (player_score < computer_score) {
			document.getElementById("h1").innerHTML = "Loser!";
			document.getElementById("p_round").innerHTML = "You lost the match.";
			document.getElementById("game_reset").innerHTML = "Play again?";
		} else {
			document.getElementById("h1").innerHTML = "Tied!";
			document.getElementById("p_round").innerHTML = "It's a tied match. ";
			document.getElementById("game_reset").innerHTML = "Play again?";
		}
	}
}

//Resets the values and starts the game.
function gameReset() {
	round = 0;
	player_score = 0;
	computer_score = 0;
	
	document.getElementById("game_reset").innerHTML = "";
	document.getElementById("p_round").innerHTML = "Choose your weapon to start.";
	document.getElementById("player_score").innerHTML = "Score: " + player_score;
	document.getElementById("computer_score").innerHTML = "Score: " + computer_score;
	document.getElementById("h1").innerHTML = "Round 1";
}

function selectRock() {
	selection = "Rock";
	gameStart();
	
}
	
function selectPaper() {
	selection = "Paper";
	gameStart();
}
	
function selectScissors() {
	selection = "Scissors";
	gameStart();
}
	
if (player_score > computer_score) {
	console.log("You won the match!");
}	else {
	console.log("You lost the match!");
}