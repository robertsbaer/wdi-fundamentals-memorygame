console.log("Up and running!");


// create object with each element(card)'s properties
var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

// create empty array to hold the cards while they are in play
var cardsInPlay = [];

// create var to define the user's score
var userScore = 0;

// create variable to link to HTML element 'score'
var setScore = document.getElementById("score");


// create fx to check if the cardsInPlay elements match, and notify user
var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
		// add a point to the score
		userScore +=1;
		// send new userScore value to html element for display
		setScore.innerHTML = userScore;
		// empty the cardsInPlay array
		cardsInPlay = [];
	} else {
		alert("Sorry, try again.");
		// empty the cardsInPlay array
		cardsInPlay = [];
	}
};

// create fx to be executed once a card is clicked
var flipCard = function() {
	// give the current card an ID and assign to a var
	var cardId = this.getAttribute("data-id");
	// add the rank of the current card to the cardsInPlay array
	cardsInPlay.push(cards[cardId].rank);
	// add the cardImage for the current card
	this.setAttribute("src", cards[cardId].cardImage);
	// run checkForMatch fx when there's two elements in cardsInPlay array
	if (cardsInPlay.length === 2) {
	checkForMatch();
 } else {
	// if the above isn't true, send following alert to user
	alert("Flip another card");
}
};

// create fx to present cards array in random order
var shuffle = function(cards) {
	var currentIndex = cards.length;
	// while there are more than 0 elements in the array
	while (0 !== currentIndex) {
		// pick one randomly
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		//  switch it with the current element.
		temporaryValue = cards[currentIndex];
		cards[currentIndex] = cards[randomIndex];
		cards[randomIndex] = temporaryValue;
	}
	return cards;
};

// create fx to make the game board and add event handler
var createBoard = function() {
	// create for loop to iterate over the cards array
	for (var i=0; i < cards.length; i++) {
		// create an img element and store in the cardElement var
		var cardElement = document.createElement("img");
		// add content to the above img element
		cardElement.setAttribute("src", "images/back.png");
		// add a data-id attribute to track current card
		cardElement.setAttribute("data-id", i);
		// add event handler to execute flipCard fx when user clicks
		cardElement.addEventListener("click", flipCard);
		// add the var cardElement to the element w/specified id
		document.getElementById("game-board").appendChild(cardElement);
	}
};

// execute the createBoard fx
createBoard();

// create fx to loop through cards array and set images to back of card
var unflipCards = function() {
	shuffle(cards);
	for (var i=0; i < cards.length; i++) {
		document.getElementsByTagName("img")[i].setAttribute("src", "images/back.png");
	}	
};

// add event handler to execute unflipCards fx when reset button is clicked
document.getElementById("reset-button").addEventListener("click", unflipCards);
