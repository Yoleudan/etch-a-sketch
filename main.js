const grid = document.querySelector('#grid');

let dimensions = 16

const size = document.querySelector('#size')
size.addEventListener('click', function(){
    dimensions = prompt("Please choose you desired dimensions between 1 and 100!")
    if(dimensions > 100|| dimensions < 1){
        alert("Please choose a number between 1-100")
    }
    else{
        deleteGrid();
        makeGrid();
    }
})

let drawingColor = 'black'

function colorGen(){
    const r = Math.floor(Math.random()*256)
    const g = Math.floor(Math.random()*256)
    const b = Math.floor(Math.random()*256)
    return drawingColor = ('rgb(' + r + "," + g + "," + b + ")")
}
randomCol = false
const rainbow = document.querySelector('#rainbow')
rainbow.addEventListener('click', function(){
    return randomCol = true;
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
        if(randomCol === true){
            square.style.backgroundColor = colorGen();
        }
        else{
            square.style.backgroundColor = drawingColor}})
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