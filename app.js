const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
const playerLives = 5;



// link playerlives to text
playerLivesCount.textContent = playerLives;


// STORE IMAGES IN AN ARRAY


const arrayOfImages = [];

arrayOfImages.push("Images/Astrologer copy.jpg",
"Images/bandit copy.jpg",
"Images/confessor copy.jpg",
"Images/hero copy.jpg",
"Images/Prisoner copy.jpg",
"Images/prophet copy.jpg",
"Images/samurai copy.jpg",
"Images/vagabond copy.jpg",
"Images/warrior copy.jpg",
"Images/wretch copy.jpg","Images/Astrologer copy.jpg",
"Images/bandit copy.jpg",
"Images/confessor copy.jpg",
"Images/hero copy.jpg",
"Images/Prisoner copy.jpg",
"Images/prophet copy.jpg",
"Images/samurai copy.jpg",
"Images/vagabond copy.jpg",
"Images/warrior copy.jpg",
"Images/wretch copy.jpg");



// Randomize the cards

const shuffledArray = arrayOfImages.sort((a, b) => 0.5 - Math.random());

console.log(shuffledArray);







