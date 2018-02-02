var hangman;

function Hangman() {
  this.words=["IRONHACK", "GOOD", "GRANDSTAND"];
  this.secretWord='';
  this.letters = [];
  this.guessedLetter='';
  this.errorsLeft=10;

}

Hangman.prototype.getWord = function () {
  // getWord(). Returns a random word from our array words.
  let number = Math.floor(Math.random(this.words.length));
  this.secretWord = this.words[number];
  return this.words[number];


};

Hangman.prototype.checkIfLetter = function (keyCode) {
  return keyCode >=65 && keyCode <=90;
 // return keyCode > 64 && keyCode <91;
 
  // checkIfLetter. This function should check if the key the user has typed is a letter.
//   if (keyCode < 91 && keyCode > 64){
//     return true;
//   } else {
//     return false;
//   }
};

Hangman.prototype.checkClickedLetters = function (key) {
  return this.letters.indexOf(key.toUpperCase()) == -1;
  // checkClickedLetters. Checks if the pressed letter has already been pressed 
  // and returns true if it was not or false in the opposite case.
//   if (this.letters.includes(key)) {
//     return false;
//   } else{
//     return true;
//   }
// };

Hangman.prototype.addCorrectLetter = function (i) {
  // addCorrectLetter. Adds to the guessedLetter variable the letter that was pressed. Also, it should check if the user wins.
  this.guessedLetter += this.secretWord[i].toUpperCase();


  //console Output - inline conditional statement below
  if (this.checkWinner ()) { return console.log("you have won!");}


  // Code to Draw up the "you won the game" img
  
  
  // if(this.secretWord.includes())
  // this.guessedLetter += fromCharCode(i);
  // this.checkWinner();
  
};

Hangman.prototype.addWrongLetter = function (letter) {
   return this.errorsLeft --;
  // this.errorsLeft -= 1;
  if (this.checkGameOver()) {return console.log ('you have lost!');}

};

Hangman.prototype.checkGameOver = function () {
return this.errosLeft === 0;
  // checkGameOver. Returns a bolean value, true if the users lose, and false in any other case.
// if (this.errorsLeft === 0){
//   return true;
// }else{
//   return false;
// }
// };

Hangman.prototype.checkWinner = function () {
return this.guessedLetter.length === this.secretWord.length;
  //   if (this.secretWord.length === this.guessedLetter.length){
//     return true;
//   } else{
//     return false;
//   }
// };

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
