// array of 6 or 3 squars
let numOfSqrs = 6;
let colors = [];
let pickedColor;

let sqrs = document.getElementsByClassName("square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.getElementById("message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

resetButton.addEventListener("click", reset);

colorDisplay.textContent = pickedColor;

init();


function init() {
  // mode button even listeners (could make own function)
  for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function () {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");

      this.classList.add("selected");
      if (this.textContent === "Easy" & numOfSqrs !== 3) {
        numOfSqrs = 3;
        reset();
      } else if (this.textContent === "Hard" & numOfSqrs !== 6) {
        numOfSqrs = 6;
        reset();
      }
      // this.textContent === "Easy" ? numOfSqrs = 3 : numOfSqrs = 6;
      // reset();

    });
  }

  // set square listeners (could make own function)
  for (i = 0; i < sqrs.length; i++) {
    // add initial colors to squares
    sqrs[i].style.backgroundColor = colors[i];

    // add click listener to squares
    sqrs[i].addEventListener("click", function () {
      // get color of picked square
      let clickedColor = this.style.backgroundColor;

      // compare color to pickedColor
      if (clickedColor === pickedColor) {
        // display message
        messageDisplay.textContent = "Correct!";
        // change color of all squares & header
        h1.style.backgroundColor = clickedColor;
        changeAllColors(clickedColor);
        resetButton.textContent = "Play Again?";
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
  reset();
}

function reset() {
  // generate all new colors in array
  colors = generateRandomColors(numOfSqrs);
  // pick new random color from array
  pickedColor = pickColor();
  // change displayed rgb color
  colorDisplay.textContent = pickedColor;
  // change colors of squares
  messageDisplay.textContent = "";

  h1.style.backgroundColor = "steelblue";
  this.textContent = "New Colors";

  for (let i = 0; i < sqrs.length; i++) {
    if (colors[i]) {
      sqrs[i].style.display = "block";
      sqrs[i].style.backgroundColor = colors[i];
    } else {
      sqrs[i].style.display = "none";
    }
    // add initial colors to squares
    sqrs[i].style.backgroundColor = colors[i];
  }
}




// loop through all squares changing color
function changeAllColors(color) {
  for (let i = 0; i < sqrs.length; i++) {
    sqrs[i].style.backgroundColor = color;
  }
}

// return random number between 0-255
function pickColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

// return array of random colors for squares
function generateRandomColors(amount) {
  // make array
  let arr = [];
  // add amount rando colors to array
  for (let i = 0; i < amount; i++) {
    arr[i] = randomColor();
  }
  // return array
  return arr;
}

// return random rgb color string
function randomColor() {
  // red 0-255
  let r = Math.floor(Math.random() * 256);
  // greed 0-255
  let g = Math.floor(Math.random() * 256);
  // blue 0-255
  let b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

// *******
// Below refactored
// *******
// add event listenters to easy/hard buttons
// easyBtn.addEventListener("click", function () {
//   easyBtn.classList.add("selected");
//   hardBtn.classList.remove("selected");

//   numOfSqrs = 3;
//   colors = generateRandomColors(numOfSqrs);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   // h1.style.backgroundColor = "steelblue";

//   for (let i = 0; i < sqrs.length; i++) {
//     if (colors[i]) {
//       sqrs[i].style.backgroundColor = colors[i];
//     } else {
//       sqrs[i].style.display = "none";
//     }
//   }
// });

// hardBtn.addEventListener("click", function () {
//   easyBtn.classList.remove("selected");
//   hardBtn.classList.add("selected");

//   numOfSqrs = 6;
//   colors = generateRandomColors(numOfSqrs);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   // h1.style.backgroundColor = "steelblue";

//   for (let i = 0; i < sqrs.length; i++) {
//     if (colors[i]) {
//       sqrs[i].style.backgroundColor = colors[i];
//       sqrs[i].style.display = "block";
//     }
//   }
// });

