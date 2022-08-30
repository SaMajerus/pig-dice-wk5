export function Player(name, variable) {
  this.name = name;
  this.currentTotal = [];
  this.totalPts = variable;
}

// Player.prototype.diceRoll = function() {
//   return "testing";
// }; 



/*   (Orig) Business Logic   */
Player.prototype.diceRoll = function() {
  const min = Math.ceil(1);  
  let number = Math.floor((Math.random() * 6) + min);  //Both max and min are inclusive. [See last example on MDN's 'Math.random()' page for reference. -SM] 
  if (number !== 1) { 
    this.currentTotal.push(number);
  } else {  //(If 'number === 1')
    console.log("Resetting currentTotal");
    console.log(this.currentTotal);
    game.changeTurn();
    return this.currentTotal = [0];
  }
}

Player.prototype.currentSum = function() {
  this.currentPoints = 0;
  for (let i=0; i < this.currentTotal.length; i++) {
    this.currentPoints += this.currentTotal[i];
  } if (this.totalPts >= 100) {
    this.winner();
  } else {
    return this.currentPoints;
  } 
}

Player.prototype.sum = function() {  //(Local-var 'totalPoints' modified to 'totalPts' for revision/clarification of Test 1.)
 this.totalPts = this.totalPts;
  for (let i = 0; i < this.currentTotal.length; i++) {
    this.totalPts += this.currentTotal[i];
  }
  this.currentTotal = [];
  return this.totalPts;
}

// function Player(name, variable) {
//   this.name = name;
//   this.currentTotal = [];
//   this.totalPts = variable; //Initializes this field to start at 0. 
// } 

function Game(player1, player2) {
  this.firstPlayer = player1
  this.secondPlayer = player2
  this.activePlayer = 1;
}

Game.prototype.changeTurn = function() {
  if (this.activePlayer === 1) {
    this.activePlayer = 2;
    console.log("p1 to p2");
    document.querySelector("div#p1Buttons").setAttribute("class", "hidden");
    document.querySelector("div#p2Buttons").removeAttribute("class");
  } else {
    console.log("p2 to p1");
    document.querySelector("div#p2Buttons").setAttribute("class", "hidden");
    document.querySelector("div#p1Buttons").removeAttribute("class");
    this.activePlayer = 1;
  } 
}

Player.prototype.winner = function() {
  document.querySelector("#youWin").removeAttribute("class");
  document.querySelector("#gameboard").setAttribute("class", "hidden");
  document.querySelector("#winner").innerText = this.name;
}

let game;

/*   (Orig) UI Logic   */

function handleGameStart(event) {
  event.preventDefault();
  const inputPlayer1 = document.querySelector("input#player1").value;
  const inputPlayer2 = document.querySelector("input#player2").value;
  let player1 = new Player(inputPlayer1, 0);
  let player2 = new Player(inputPlayer2, 0);
  game = new Game(player1, player2); 
  document.querySelector("div#game").removeAttribute("class");
  document.querySelector("span#player1").innerText = player1.name;
  document.querySelector("span#player2").innerText = player2.name;
  document.querySelector("div#p1Buttons").removeAttribute("class");
  document.getElementById("roll1").addEventListener("click",function() {
    player1.diceRoll(); 
    document.querySelector("span#currpts1").innerHTML = player1.currentSum();
  });
  document.getElementById("roll2").addEventListener("click",function() {
    player2.diceRoll(); 
    document.querySelector("span#currpts2").innerHTML = player2.currentSum();
  });
  document.querySelector("#hold1").addEventListener("click", function(){
    player1.sum();
    document.querySelector("span#totalpts1").innerHTML = player1.totalPts;
    game.changeTurn(); 
  });
  document.querySelector("#hold2").addEventListener("click", function(){
    player2.sum();
    document.querySelector("span#totalpts2").innerHTML = player2.totalPts;
    game.changeTurn(); 
  });
}

window.addEventListener("load", function() {
  document.querySelector("form#nameInput").addEventListener("submit", handleGameStart);
}); 
