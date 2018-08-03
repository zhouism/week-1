var args = process.argv.slice(2); //takes in the user input from terminal as an array.
var diceNum = Number(args[0]);   //Tells us how many dice we are rolling. and turns the string into a number.

var diceRolls = randomNumbers(diceNum); //calls the function that rolls the right number of dice.

console.log(diceRolls);       //logs the answer to the terminal


//takes in the number of dice and returns the rolls in a string.
function randomNumbers(numDice){
  var arr = [];

  for(i = 0; i < numDice; i++){
    arr[i] = Math.floor(Math.random() * Math.floor(6)+1);
  }

  return arr.join(", ");
}