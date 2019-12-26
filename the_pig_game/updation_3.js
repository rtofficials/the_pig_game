//UPDATIONS:
/*
	1. if 6 pops up two times on the dice in a row, then the entire score of the player vanishes, and the turn goes to next player.
	2. Addition of an input field to HTML where player can set the winning score, so that they can change the predefined score of 100.
	3. Addition of another dice to the game, so that there are 2 dices; and the player looses his current score when one of the rolls a 1(as was earlier with one dice).
*/

var gameOn = true, scores, roundScores, activePlayer, lastRoll;
again();
//Math.random() --> number between 0 and 1
//Math.random()*6 --> number between 0 and 5
//(Math.random()*6) +1 --> number between 1 and 6

//console.log(dice);
//setter method
//document.querySelector('#current-' + activePlayer).textContent = dice; //document object to access dom;  querySelector selects exactly the way as in css but the only difference is that is selects only the first element it finds.

 //document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + "</em>" ;
//current score of the round will be show in italics

//getter method
/*
var x = document.querySelector('#score-' + activePlayer).textContent;

console.log(x); //output : value of score-1 or score-0 
*/

/*function btn(){
	
}
btn();

document.querySelector('.btn-roll').addEventListener('click', btn);//'btn' is a function and here used to tell the event listener method to call this function whenever 'click' event occurs.
//The 'btn' function is not followed by '()' because here we are not calling function but the event listener is calling the function for us.
//here, btn() is called CALLBACK FUNCTION.

//rather than writing the specific btn() , if we leave the space after ',', this means that we are calling an ANNONYMOUS FUNCTION => function that doesnt have name:
*/
document.querySelector('.btn-roll').addEventListener('click', function(){
 	if(gameOn){
		//random number
		var dice1 = Math.floor((Math.random()*6)+1);
		
		var dice2 = Math.floor((Math.random()*6)+1);
		
  		//display result
		diceDom1 = document.getElementById('dice-1');
		diceDom1.style.display = 'block';
		
		diceDom2 = document.getElementById('dice-2');
		diceDom2.style.display = 'block';
		
				//or
		//document.querySelector('.dice').style.display = 'block';
		diceDom1.src = 'dices/dice-' + dice1 + '.png';
		
		diceDom2.src = 'dices/dice-' + dice2 + '.png';
		
//update 3:
		
  		//update the round score; if the rolled number is not 1
	
		//updating socres if the rolled number is not 1
	//update 1:	
	
		if(dice1 > 1 && dice2 > 1){
			//add score
			roundScores += dice1 + dice2;
			//next player
			document.querySelector('#current-' + activePlayer).textContent = roundScores;
		}else{
			
			//as soon as 1 comes on the dice, the current round score of the current player is set to zero and before this the round score is added to the current player's overall score.
		
			//document.getElementById('score-' + activePlayer).textContent += roundScores;		
		
			//next player
			nextPlayer();
		}
	}
});

//for hold option
document.querySelector('.btn-hold').addEventListener('click', function(){
	if(gameOn){
		//add current score to overall score:
	scores[activePlayer] += roundScores;
		
	//update it in the page:
	document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
	
	//check if the player won the game:
	//player with 100 overall score points wins
//update 2:
	var target = document.querySelector('.setTarget').value;
	var winScore;
	if(target){
		winScore = target;
	}else{
		winScore = 100;
	}
	
	if(scores[activePlayer] >= winScore){
		document.querySelector('#name-' + activePlayer).textContent += ' Wins!';
		
		//removing active player hint:
		document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
		document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
		
		//remove dice
		document.querySelector("#dice-1").style.display = 'none';
		
		document.querySelector("#dice-2").style.display = 'none';
		
		gameOn = false;
		
		
	}else{
		//change active player:
		nextPlayer();	
	}
	}
});

document.querySelector('.btn-new').addEventListener('click', again);

function nextPlayer(){
	document.getElementById('current-' + activePlayer).textContent = '0';
		
		activePlayer = activePlayer === 0?1:0 
		roundScores = 0;
		
		document.getElementById('current-' + activePlayer).textContent = '0';
		
		//now to indicate the active player like the background color(grey) and the red dot, the html class 'active' is also set to the class of next active player.
		
		//remove 'active' class from current player
		document.querySelector('.player-0-panel').classList.toggle('active');
		
		//adding 'active' class to next active player:
		document.querySelector('.player-1-panel').classList.toggle('active');
		
		//toggle means jismein ye class h usse hta do , jismein ni h usmein add krdo.
		
		//to hide dice when 1 pops:
		//document.querySelector('.dice').style.display = 'none';
}

function again(){
	scores = [0, 0];
	roundScores = 0;
	activePlayer = 0;
	gameOn = true;
	//to change css property: dice should not be seen initially (set display property of dice to none)
	
	document.getElementById('dice-1').style.display = 'none';
	
	document.getElementById('dice-2').style.display = 'none';
	
	//to change the initial scores to 0:(can also be done by querySelector() , but this one is faster than querySelector() and is only for ids)

	//(JS is given weightage over HTML: agr me html mein scores ki value '0' kr du pr js mein yahan pr '00' to page pr 00 show hoga na ki 0)

	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	
	//reset names:
	document.getElementById('name-0').textContent = 'Player 1';

	document.getElementById('name-1').textContent = 'Player 2';
	
	//remove winner class
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	
	//removing active class
	//the active class is removed and then again added to player 1 as maybe the active player is 1 already.. so if not removed once on reset, it would get 2 active classes so when on click we remove the active class, only one class will removed and so one removal let the other active class properties to sustain that is not needed.
	document.querySelector('.player-0-panel').classList.remove('active');
	
	document.querySelector('.player-1-panel').classList.remove('active');
	
	//reset player 1 as active
	document.querySelector('.player-0-panel').classList.add('active');
	
	//document.querySelector('.setTarget').value = '';
	
	
	
}