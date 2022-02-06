const container = document.getElementById('container');
// const gridContainer = document.getElementById('gridContainer');

const createGrid = (squareNumber) => {
    for (let i = 0; i < squareNumber; i++) {
        for (let j = 0; j < squareNumber; j++) {
            let div = document.createElement('div');
            container.appendChild(div).classList.add('square');
            let newHeight = (512 / squareNumber);
            let newWidth = (512 / squareNumber);
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
const colorChange = function (e) {
    let target = e.target;
    if (target.className != 'square') return;
    target.style.background = randomColor();
}

//black color
const colorBlack = () => {
    const color = 'black';
    return color;
}

const colorChangeBlack = function (e) {
    let target = e.target;
    if (target.className != 'square') return;
    target.style.background = colorBlack();
}

//white color/eraser
const colorWhite = () => {
    const color = 'white';
    return color;
}

const colorChangeWhite = function (e) {
    let target = e.target;
    if (target.className != 'square') return;
    target.style.background = colorWhite();
}

function removeAllListeners() {
    container.removeEventListener('mouseenter', colorChange, true);
    container.removeEventListener('mouseenter', colorChangeBlack, true);
    container.removeEventListener('mouseenter', colorChangeBlack, true);
}

const buttons = document.querySelectorAll('button');
const buttonsArr = Array.from(buttons);

const colorPicker = function (e) {
    removeAllListeners();
    if (e.target.textContent == 'Color') {
        container.addEventListener('mouseenter', colorChange, true);
    } else if (e.target.textContent == 'Black') {
        container.addEventListener('mouseenter', colorChangeBlack, true);
    } else if (e.target.textContent == 'Eraser') {
        container.addEventListener('mouseenter', colorChangeWhite, true);
    }
}

buttonsArr.forEach((button) => {
    button.addEventListener('click', colorPicker);
})

//container.addEventListener('mouseenter', colorChange, true);

const reset = document.getElementById('resetGrid');

const resetGrid = () => {
    const squares = document.querySelectorAll('.square');
    const squaresArray = Array.from(squares);
    squaresArray.forEach((square) => {
        container.removeChild(square);
    });
    const newSize = input.value;
    createGrid(newSize);
};

//button for reseting grid/clearing colors
reset.addEventListener('click', resetGrid);

// range input
const display = document.querySelector('p')
const input = document.querySelector('input');
display.textContent = input.value;

function showValue() {
    display.textContent = input.value;
}
input.addEventListener('mousemove', showValue);
input.addEventListener('mouseup', resetGrid);

// random color generator: 
// const color = '#' + (Math.random().toString(16) + "000000").substring(2, 8);