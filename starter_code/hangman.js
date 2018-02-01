var hangman;

function Hangman() {
  this.words=["ironhack", "good", "grandstand"];
  this.secretWord='';
  this.letters = [];
  this.guessedLetter='';
  this.errorsLeft=10;

}

Hangman.prototype.getWord = function () {
  // getWord(). Returns a random word from our array words.
  let number = Math.floor(Math.random(words.length));
  this.secretWord = this.words[number];
  return this.secretWord;

};

Hangman.prototype.checkIfLetter = function (keyCode) {
  // checkIfLetter. This function should check if the key the user has typed is a letter.
  if (keyCode < 91 && keyCode > 64){
    return true;
  } else {
    return false;
  }
};

Hangman.prototype.checkClickedLetters = function (key) {
  // checkClickedLetters. Checks if the pressed letter has already been pressed and returns true if it was not or false in the opposite case.
  if (this.letters.includes(key)) {
    return false;
  } else{
    return true;
  }
};

Hangman.prototype.addCorrectLetter = function (i) {
  // addCorrectLetter. Adds to the guessedLetter variable the letter that was pressed. Also, it should check if the user wins.
  if(this.secretWord.includes())
  this.guessedLetter += fromCharCode(i);
  this.checkWinner();
  
};

Hangman.prototype.addWrongLetter = function (letter) {
    this.errorsLeft -= 1;
};

Hangman.prototype.checkGameOver = function () {
  // checkGameOver. Returns a bolean value, true if the users lose, and false in any other case.
if (this.errorsLeft === 0){
  return true;
}else{
  return false;
}
};

Hangman.prototype.checkWinner = function () {
  if (this.secretWord.length === this.guessedLetter.length){
    return true;
  } else{
    return false;
  }
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  canvas.drawHangman();
  canvas.drawLines;
};


document.onkeydown = function (e) {
  hangman.checkIfLetter(e.keyCode);
  hangman.checkClickedLetters(e.key);
  if hangman.secretWord.includes(e){
    hangman.addCorrectLetter(e.keyCode)
  }else{
    hangman.addWrongLetter (e.keyCode);
  }
};
