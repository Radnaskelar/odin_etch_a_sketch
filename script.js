const container = document.getElementById('container');

//creating 32 divs, appending them to main div 'container'
const divCounter = Math.pow(16,2);
for (let i = 0; i < divCounter; i++){
    const div = document.createElement('div');
    div.classList.add('square');
    container.appendChild(div);
}

const squares = document.querySelectorAll('.square');

//random color generator: 
// const color = '#' + (Math.random().toString(16) + "000000").substring(2, 8);

squares.forEach((square => {
    square.addEventListener('mouseenter', () => {
        const color = '#' + (Math.random().toString(16) + "000000").substring(2, 8);
        square.style.background = color;
    });
}))


