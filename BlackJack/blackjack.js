/*************************
  Game - Singleton class
**************************/

var Game = new function(){

  /*
    Deal button event handler
  */
  this.dealButtonHandler = function(){
    Game.start();
    this.dealButton.disabled = true;
    this.hitButton.disabled = false;
    this.standButton.disabled = false;
  }

  /*
    Hit button event handler
  */
  this.hitButtonHandler = function(){
    //deal a card and add to player's hand
    var card = Deck.deck.pop();
    this.player.hit(card);

    //render the card and score
    document.getElementById(this.player.element).innerHTML += card.view();
    this.playerScore.innerHTML = this.player.getScore();

    //if over, then player looses
    if(this.player.getScore() > 21){
      this.gameEnded('You lost!');
    }
  }

  /*
    Stand button event handler
  */
  this.standButtonHandler = function(){
    this.hitButton.disabled = true;
    this.standButton.disabled = true;

    //deals a card to the dealer until
    //one of the conditions below is true
    while(true){
      var card = Deck.deck.pop();

      this.dealer.hit(card);
      document.getElementById(this.dealer.element).innerHTML += card.view();
      this.dealerScore.innerHTML = this.dealer.getScore();

      var playerBlackjack = this.player.getScore() == 21,
          dealerBlackjack = this.dealer.getScore() == 21;

      //Rule set
      if(dealerBlackjack && !playerBlackjack) {
          this.gameEnded('You lost!');
          break;
      } else if(dealerBlackjack && playerBlackjack) {
          this.gameEnded('Draw!');
          break;
      } else if(this.dealer.getScore() > 21 && this.player.getScore() <= 21) {
          this.gameEnded('You won!');
          break;
      } else if(this.dealer.getScore() > this.player.getScore() && this.dealer.getScore() <= 21 && this.player.getScore() < 21) {
          this.gameEnded('You lost!');
          break;
      }
      //TODO needs to be expanded..

    }
  }
  /*
    Initialise
  */
  this.init = function(){
    this.dealerScore = document.getElementById('dealer-score').getElementsByTagName("span")[0];
    this.playerScore = document.getElementById('player-score').getElementsByTagName("span")[0];
    this.dealButton = document.getElementById('deal');
    this.hitButton = document.getElementById('hit');
    this.standButton = document.getElementById('stand');

    //attaching event handlers
    this.dealButton.addEventListener('click', this.dealButtonHandler.bind(this));
    this.hitButton.addEventListener('click', this.hitButtonHandler.bind(this));
    this.standButton.addEventListener('click', this.standButtonHandler.bind(this));

  }

  /*
    Start the game
  */
  this.start = function(){

    //initilaise and shuffle the deck of cards
    Deck.init();
    Deck.shuffle();

    //deal one card to dealer
    this.dealer = new Player('dealer', [Deck.deck.pop()]);

    //deal two cards to player
    this.player = new Player('player', [Deck.deck.pop(), Deck.deck.pop()]);

    //render the cards
    document.getElementById(this.dealer.element).innerHTML = this.dealer.showHand();
    document.getElementById(this.player.element).innerHTML = this.player.showHand();

    //renders the current scores
    this.dealerScore.innerHTML = this.dealer.getScore();
    this.playerScore.innerHTML = this.player.getScore();

    this.setMessage("Hit or Stand");
  }

  /*
    If the player wins or looses
  */
  this.gameEnded = function(str){
    this.setMessage(str);
    this.dealButton.disabled = false;
    this.hitButton.disabled = true;
    this.standButton.disabled = true;

  }

  /*
    Instructions or status of game
  */
  this.setMessage = function(str){
    document.getElementById('status').innerHTML = str;
  }


}

//Exposing the Game.init function
//to the outside world
return {
  init: Game.init.bind(Game)
}

})()
