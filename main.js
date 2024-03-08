const grid = document.querySelector('#grid');

let dimensions = 16

const size = document.querySelector('#size')
size.addEventListener('click', function(){
    dimensions = prompt("Please choose you desired dimensions between 1 and 100!")
    deleteGrid();
    makeGrid();
})

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

function deleteGrid(){
    grid.innerHTML = '';
}



makeGrid();