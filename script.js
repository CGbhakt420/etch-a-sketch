const GRIDSIZE = 600;
let size=16;

const sketchArea = document.querySelector('#sketcharea');
sketchArea.style.width = `${GRIDSIZE}px`;
sketchArea.style.height = `${GRIDSIZE}px`;

// function setBgColor(){
//     this.style.backgroundColor = "black";

// }

let color = "#000000"; 
let click = true;

function changeColor() {
    color = document.getElementById('colorPicker').value;
}

document.getElementById('colorPicker').addEventListener('input', function() {
    changeColor();
});

// Function to handle mouseover event on grid cells
function colorSquare() {
    if (click) {
        this.style.backgroundColor = color;
    } else {
        // Erase the color when eraser mode is enabled
        this.style.backgroundColor = "#ffffff"; // White color for eraser
    }
}

function toggleMode() {
    click = !click; // Toggle the value of click (true/false)
}

function trueClick() {
    click = true;
}
document.querySelector('.erasorButton').addEventListener('click', function() {
    toggleMode();
});

document.querySelector('.drawButton').addEventListener('click', function(){
    trueClick();
});


function changeSize(input) {
    if (input >= 2 && input <= 100) {
      document.querySelector(".error").style.display = "none";
      createCells(input);
    } else {
      document.querySelector(".error").style.display = "flex";
    }
  }

function createCells(size){

    sketchArea.innerHTML = ''; // Clear existing cells

    let amount = size*size;
    for(let i=0; i<amount; i++){
        const gridCell = document.createElement("div");
        gridCell.style.width = `${(GRIDSIZE/size)-2}px`;
        gridCell.style.height = `${(GRIDSIZE/size)-2}px`;
        gridCell.classList.add("cell");

        sketchArea.appendChild(gridCell);

        gridCell.addEventListener("mouseover", colorSquare);
    }
}

function resetBoard() {
    createCells(size);
}

createCells(16);

// // Event listener for the reset button
// document.querySelector('.resetButton').addEventListener('click', function() {
//     createCells(size);
// });