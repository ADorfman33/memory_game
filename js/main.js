
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
  },
];
var cardsInPlay = [];
var cardElementsInPlay = [];
var randFactor = 0;

var checkForMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
  flipCardsToBack();
  cardElementsInPlay = [];
  cardsInPlay = [];
}

var flipCardsToBack = function() {
  for (var i=0 ; i<cardsInPlay.length ; i++){
    cardElementsInPlay[i].setAttribute('src',"images/back.png");
  }
  cardElementsInPlay = [];
  cardsInPlay = [];
}

var flipCard = function(){
  var cardId = this.getAttribute('data-id');
  this.setAttribute('src',cards[cardId].cardImage);
  cardsInPlay.push(cards[cardId].rank);
  cardElementsInPlay.push(this);
  if(cardsInPlay.length === 2){
    setTimeout(checkForMatch , 100);
  }
}

var resetBoard = function(){
  var board = document.querySelector('#game-board');
  var images = document.querySelectorAll('.card');
  var len = images.length;
  for (var i = 0 ; i<len ; i++){
    board.removeChild(images[len-1-i]);
  }
  cardElementsInPlay = [];
  cardsInPlay = [];
  createBoard();
}

var createBoard = function(){
  randFactor = Math.floor(Math.random()*4);
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src',"images/back.png");
    cardElement.setAttribute('data-id',(i+randFactor)%4);
    cardElement.className = "card";
    cardElement.addEventListener('click',flipCard);
    document.querySelector("#game-board").appendChild(cardElement);
  }
}

var resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click',flipCardsToBack);

var resetBoardButton = document.querySelector('#resetBoardButton');
resetBoardButton.addEventListener('click',resetBoard);


// var createResetButton = function(){
//   var navBar = document.querySelector('nav');
//   var resetButton = document.createElement('a');
//   resetButton.innerHTML = 'Reset';
//   resetButton.className = 'game_buttons';
//   resetButton.id = 'resetButton';
//   resetButton.addEventListener('click',flipCardsToBack);
//   navBar.appendChild(resetButton);
// }

// var createResetBoardButton = function(){
//   var navBar = document.querySelector('nav');
//   var resetBoardButton = document.createElement('a');
//   resetBoardButton.innerHTML = 'Reset Board';
//   resetBoardButton.className = 'game_buttons';
//   resetBoardButton.id = 'resetBoardButton';
//   resetBoardButton.addEventListener('click',resetBoard);
//   navBar.appendChild(resetBoardButton);
// }

createBoard();
// createResetButton();
// createResetBoardButton();
