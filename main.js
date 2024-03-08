const grid = document.querySelector('#grid');

let dimensions = prompt("Select a size for the grid between 1-100")

function getSquareWidth(){
    let width = 500 / dimensions
    return width + "px";
}


function  makeSquare(){
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.outline = "thin solid grey"
    square.style.minHeight = getSquareWidth();
    square.style.minWidth = getSquareWidth();
    square.addEventListener('mouseover', function(){
        square.style.backgroundColor = "black"})
    grid.appendChild(square);
}


function makeGrid(){
    for (let i = 1; i <= (dimensions*dimensions); i++ ){
        makeSquare();
    }
}



makeGrid();