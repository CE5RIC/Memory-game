

function shuffleThem () {
// Selecting all cards
let allCards = document.querySelectorAll(".card");
// Storing all cards in an array (Convert Nodelist to an array)
let arrayCards = Array.from(allCards);
 
console.log(arrayCards);

// Randomize the cards

let shuffledCards = arrayCards.sort((a, b) => 0.5 - Math.random());

console.log(shuffledCards);

}


shuffleThem();





