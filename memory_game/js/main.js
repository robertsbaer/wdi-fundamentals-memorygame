console.log("Up and running!");

let cards = ["queen", "queen", "king", "king"];

let cardsInPlay = [];

var cardOne = cards[0];
var cardTwo = cards[3];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

if(cardsInPlay.length === 2){
	if(cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	}
	else {
		alert("Sorry, try again.");
	}
}


console.log("User fliped " + cardsInPlay[0]);
console.log("User fliped " + cardsInPlay[1]);

