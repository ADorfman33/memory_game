
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
  },{
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
var cardsInPlay = [];
var cardElementsInPlay = [];

var flipCardsToBack = function() {
  for (var i=0 ; i<cardsInPlay.length ; i++){
    cardElementsInPlay[i].setAttribute('src',"images/back.png");
  }
  cardElementsInPlay = [];
  cardsInPlay = [];
}

var checkForMatch = function() {
  if (cardsInPlay[0].rank === cardsInPlay[1].rank && cardsInPlay[0].suit === cardsInPlay[1].suit) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
  flipCardsToBack();
  cardElementsInPlay = [];
  cardsInPlay = [];
}

var flipCard = function(){
  var cardId = this.getAttribute('data-id');
  this.setAttribute('src',cards[cardId].cardImage);
  if(){
    cardsInPlay.push(cards[cardId]);
  }
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

var makeRandomOrder = function(){
  randFactor = []
  for(var i=0 ; i<cards.length ; i++){
    randFactor.push(i);
  }
  randFactor.sort(function(a,b){return 0.5 - Math.random()});
  console.log(randFactor);
  return randFactor;
}

var createBoard = function(){
  randFactor = makeRandomOrder();
  // randFactor = Math.floor(Math.random()*cards.length);
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src',"images/back.png");
    // cardElement.setAttribute('data-id',(i+randFactor)%cards.length);
    cardElement.setAttribute('data-id',randFactor[i]);
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
