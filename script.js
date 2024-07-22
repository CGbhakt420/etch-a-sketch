const GRIDSIZE = 600;
let rows=16;
let cols=16;

const sketchArea = document.querySelector('#sketcharea');
sketchArea.style.width = `${GRIDSIZE}px`;
sketchArea.style.height = `${GRIDSIZE}px`;

function changeBgColor(){
    
}

function createcells(){
    for(let i=0; i<rows*cols; i++){
        const gridCell = document.createElement("div");
        gridCell.style.width = `${(GRIDSIZE/cols)-2}px`;
        gridCell.style.height = `${(GRIDSIZE/rows)-2}px`;
        gridCell.classList.add("cell");

        sketchArea.appendChild(gridCell);

        gridCell.addEventListener("mouseover", changeBgColor);
    }
}

createcells();