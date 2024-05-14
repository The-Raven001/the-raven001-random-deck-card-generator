/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function cardGenerator() {
  let bigNumberToDisplay = document.getElementById("numbers");

  const cardSymbols = ["♦", "♥", "♠", "♣"];

  const NumberAndLetterToDisplay = [
    2,
    3,
    5,
    6,
    7,
    8,
    9,
    10,
    "Q",
    "J",
    "A",
    "K"
  ];

  let randomizerForBigNumber = Math.floor(
    Math.random() * NumberAndLetterToDisplay.length
  );

  bigNumberToDisplay.innerHTML =
    NumberAndLetterToDisplay[randomizerForBigNumber];

  let upperIcon = document.getElementById("upperIcon");
  let lowerIcon = document.getElementById("lowerIcon");

  let randomizerForNumbers = Math.floor(Math.random() * cardSymbols.length);

  if (
    cardSymbols[randomizerForNumbers] == "♥" ||
    cardSymbols[randomizerForNumbers] == "♦"
  ) {
    upperIcon.style.color = "red";
    lowerIcon.style.color = "red";
  } else {
    upperIcon.style.color = "black";
    lowerIcon.style.color = "black";
  }

  upperIcon.innerHTML = cardSymbols[randomizerForNumbers];
  lowerIcon.innerHTML = cardSymbols[randomizerForNumbers];
}

window.onload = function() {
  //write your code here
  cardGenerator();

  setInterval(() => {
    cardGenerator();
  }, 10000);

  let buttonCardChanger = document.getElementById("buttonCardChanger");

  buttonCardChanger.addEventListener("click", function() {
    cardGenerator();
  });
};
