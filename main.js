const grid = document.querySelector('#grid');

let dimensions = 16

function getSquareWidth(){
    let width = 960 / dimensions
    return width + "px";
}


function  makeSquare(){
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.outline = "thin solid grey"
    square.style.minHeight = getSquareWidth();
    square.style.minWidth = getSquareWidth();
    grid.appendChild(square);
}


function makeGrid(){
    for (let i = 1; i <= (dimensions*dimensions); i++ ){
        makeSquare();
    }
}

makeGrid();