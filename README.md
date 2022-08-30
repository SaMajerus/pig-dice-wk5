<!-- Describe- and Test-block templates. Do not delete -- copy paste please -->
<!-- 
Describe: 

Test: 
Code: 
Expected Result:  
-->


Describe: Player(); 

Test 1: It should create our players' respective Objects
  Code:
    function Player(name, currentTotal, totalPoints) {
      this.name = name;
      this.currentTotal = currentTotal;
      this.totalPoints = totalPoints;
    }
  Expected Result:  A new Player object with all properties declared, initialized and ready to go. 



Describe: diceRoll();

Test 1: It should randomly generate a number between 1 - 6
  Code: 
    let number = Math.floor((Math.random() * 6) + 1);
    return number;
  Expected Result:  Return random number between 1- 6

Test 2: It should return when the number generator is equal to 1
  Code: 
    let number = Math.floor((Math.random() * 6) + 1);
    if (number === 1) {
      return false;
    } else {
      return number;
    }

Test 3: It will push number into total points array if not equal to 1
  Code: 
    let number = Math.floor((Math.random() * 6) + 1);
    if (number !== 1) {
      this.currentTotal.push(number);
    } else {  //if (number === 1)
      return this.currentTotal = [];
    } 
  Expected Result:
  Erase the total of built up numbers when rolls a 1


Describe: sum();

Test 1: It should add all the numbers in currentPoints array to totalPoints array
  Code: 
    let totalPoints = 10; 
    let currentTotal = [4, 2, 2, 6];
    console.log(sum(currentTotal)); 
  Expected Result: 24 


<!--
Describe: currPlayerTurn(); 
  Test 1:  It should switch the player-turn boolean variable if Player 1's turn ends and Player 2's turn begins, and vice versa. 
  Code: 

  Expected Result:  
-->