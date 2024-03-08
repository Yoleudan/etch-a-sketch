const grid = document.querySelector('#grid');


function  makeSquare(){
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.outline = "thin solid grey"
    square.style.minHeight = "32px"
    square.style.minWidth = "32px"
    grid.appendChild(square);
}

let dimensions = 16

function makeGrid(){
    for (let i = 1; i <= (dimensions*dimensions); i++ ){
        makeSquare();
    }
}

makeGrid();