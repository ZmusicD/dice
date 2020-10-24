
// Player 1's Dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var dice1 = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", dice1);


//Player 2's Dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var dice2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", dice2);


//Find Winner (if there is one)

if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").textContent = "Draw!";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
} else {
  document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
}
