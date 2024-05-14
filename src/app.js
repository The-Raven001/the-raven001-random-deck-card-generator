/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let bigNumberToDisplay = document.getElementById("numbers");

  const cardSymbols = ["♦", "♥", "♠", "♣"];

  bigNumberToDisplay.innerHTML = Math.floor(Math.random() * 7) + 2;

  let upperIcon = document.getElementById("upperIcon");
  let lowerIcon = document.getElementById("lowerIcon");

  let randomizerForNumbers = Math.floor(Math.random() * 4);

  if (cardSymbols[randomizerForNumbers] == "♥") {
    upperIcon.style.color = "red";
    lowerIcon.style.color = "red";
  }

  upperIcon.innerHTML = cardSymbols[randomizerForNumbers];
  lowerIcon.innerHTML = cardSymbols[randomizerForNumbers];
};
