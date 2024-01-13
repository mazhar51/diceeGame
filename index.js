
//diceImage1
var  randomNumber1  = Math.round(Math.random()*5+1);
var diceOne = document.querySelector(".dice .img1");
diceOne.setAttribute("src","images/dice"+ randomNumber1+".png");

//diceImage2
var  randomNumber2  = Math.round(Math.random()*5+1);
var diceTwo = document.querySelector(".dice2 .img2");
diceTwo.setAttribute("src","images/dice"+ randomNumber2+".png");

///Result message
if (randomNumber1 > randomNumber2 ) {
  document.querySelector("h1").textContent = " 🏆 player 1 win  "
  
} else if (randomNumber1 == randomNumber2) {
  document.querySelector("h1").textContent = "draw "
}
 else {
  document.querySelector("h1").textContent = " player 2 win 🏆  "
}
