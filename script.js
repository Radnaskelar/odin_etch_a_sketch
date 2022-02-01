const container = document.getElementById('container');
// const gridContainer = document.getElementById('gridContainer');

const createGrid = (squareNumber) => {
    for (let i = 0; i < squareNumber; i++) {
        for (let j = 0; j < squareNumber; j++) {
            let div = document.createElement('div');
            container.appendChild(div).classList.add('square');
            let newHeight = (256 / squareNumber);
            let newWidth = (256 / squareNumber);
            div.setAttribute('style', `height: ${newHeight}px; width: ${newWidth}px`);
        }
    }
}
createGrid(16);

// //grid method of creating div squares

// /*const gridCounter = Math.pow(16, 2);
// for (let j = 0; j < gridCounter; j++) {
//     const gridDiv = document.createElement('div');
//     gridContainer.appendChild(gridDiv);
//     gridDiv.classList.add('grid', 'square');
// }*/

const squares = document.querySelectorAll('.square');
const squaresArray = Array.from(squares);

//random color generator
const randomColor = () => {
    const color = '#' + (Math.random().toString(16) + "000000").substring(2, 8);
    return color;
}

//black color

//white color/eraser

const colorChange = function (e) {
    let target = e.target;
    if (target.className != 'square') return;
    target.style.background = randomColor();
}

container.addEventListener('mouseenter', colorChange, true);

const clear = document.getElementById('clearGrid');

const reset = document.getElementById('resetGrid');

//capture event due to array of divs removal
const clearGrid = () => {
    const squares = document.querySelectorAll('.square');
    const squaresArray = Array.from(squares);
    squaresArray.forEach((square) => {
        square.removeAttribute('color');
    });
};

//caputer event due to array of divs removal
const resetGrid = () => {
    const squares = document.querySelectorAll('.square');
    const squaresArray = Array.from(squares);
    squaresArray.forEach((square) => {
        container.removeChild(square);
    });
    const newSize = prompt('Number of squares:', 16);
    createGrid(newSize);
};

//button for resetting grid
reset.addEventListener('click', resetGrid);

//button for clearing grid
clear.addEventListener('click', clearGrid);

// range input
const display = document.querySelector('p')
const input = document.querySelector('input');
display.textContent = input.value;

function showValue() {
    display.textContent = input.value;
}
input.addEventListener('mousemove', showValue);

// random color generator: 
// const color = '#' + (Math.random().toString(16) + "000000").substring(2, 8);