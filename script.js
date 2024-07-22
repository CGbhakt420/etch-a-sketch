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
    }
}


function changeSize(input) {
    if (input >= 2 && input <= 100) {
      document.querySelector(".error").style.display = "none";
      createcells(input);
    } else {
      document.querySelector(".error").style.display = "flex";
    }
  }

function createcells(size){
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

createcells(16);