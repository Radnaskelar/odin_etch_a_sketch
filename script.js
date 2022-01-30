const container = document.getElementById('container');
// const gridContainer = document.getElementById('gridContainer');

// creating divs, appending them to main div 'container'

let divCounter;
const createDivs = () => {
    const div = document.createElement('div');
    container.appendChild(div);
    div.classList.add('square');
}

divCounter = Math.pow(16, 2);
for (let i = 0; i < divCounter; i++) {
    createDivs();
}

// //grid method of creating div squares

// /*const gridCounter = Math.pow(16, 2);
// for (let j = 0; j < gridCounter; j++) {
//     const gridDiv = document.createElement('div');
//     gridContainer.appendChild(gridDiv);
//     gridDiv.classList.add('grid', 'square');
// }*/

const squares = document.querySelectorAll('.square');
const squaresArray = Array.from(squares);

const randomColor = () => {
    const color = '#' + (Math.random().toString(16) + "000000").substring(2, 8);
    return color;
}

const colorChange = function (e) {
    let target = e.target;
    if (target.className != 'square') return;
    target.style.background = randomColor();
}

container.addEventListener('mouseenter', colorChange, true);

const button = document.getElementById('clearGrid');
button.setAttribute('style', 'font-size: 16px; background-color: lightblue; color: purple');

const clearGrid = () => {
    squaresArray.forEach(square => {
        container.removeChild(square);
    });
}

const drawGrid = function (squareNumber) {
    let divWidth = (container.clientWidth/squareNumber).toString();
    let divHeight = (container.clientHeight/squareNumber).toString();
    
    divCounter = Math.pow(squareNumber, 2);
    for (let i = 0; i < divCounter; i++) {
        createDivs();
    }
}

button.addEventListener('click', clearGrid);

// random color generator: 
// const color = '#' + (Math.random().toString(16) + "000000").substring(2, 8);