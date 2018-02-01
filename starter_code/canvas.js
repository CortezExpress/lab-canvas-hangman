
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
}

HangmanCanvas.prototype.createBoard = function () {
  // First, we need to draw the board. We should clear the canvas, so every time we start the game 
  // we have a clean one. We can also set up here the width we want to set to our lines.
  this.ctx.clearRect(0, 0, 1200, 800);

};

HangmanCanvas.prototype.drawLines = function () {
// We know the secret word so we should put one line for each of the letters the user has to guess.
  let x = 100
  // this.ctx.moveTo(0, 5);
    this.ctx.beginPath();
  for (var i = 0; i<=this.secretWord.length; i++) {
    this.ctx.moveTo(x, 100);
    x+=30;
    this.ctx.lineTo(x, 100);
    this.ctx.stroke();
    x+=10;
  }
};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
// Write the Guessed Letters and the Wrong Ones Every time a user clicks the keyboard, 
// after checking if the letter was not already clicked, we should write it on our board. If the secret word 
// includes the letter we should write it in the position it corresponds, and if is not included in the secret word, we will write 
// it on the top right so the user knows which ones he already clicked.

  this.font = '14px serif';
  this.fillText(this.guessedLetter+, 800, 200);
  
}draw();


};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {

};

HangmanCanvas.prototype.drawHangman = function (shape) {

};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};
