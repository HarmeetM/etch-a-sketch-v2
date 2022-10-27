const gameBoard = document.querySelector('.game');
const black = document.querySelector('.black');
const rainbow = document.querySelector('.rainbow');
const white = document.querySelector('.white');
const clear = document.querySelector('.clear');
const resize = document.querySelector('.resize');

function createBoard(rows, cols) {
    gameBoard.style.setProperty('--grid-rows', rows);
    gameBoard.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        cell.textContent = "";
        gameBoard.appendChild(cell).className = 'gameCell'; 
    }
}

createBoard(16, 16)

black.addEventListener('click', () => {
    fillBlack()
});

rainbow.addEventListener('click', () => {
    fillRainbow()
});

white.addEventListener('click', () => {
    fillWhite()
});

clear.addEventListener('click', () => {
    clearBoard()
});

resize.addEventListener('click', () => {
    resizeBoard()
});

function fillBlack() {
    const cells = document.querySelectorAll('.gameCell');
    cells.forEach(gameCell => gameCell.addEventListener('mouseover', () => {
        gameCell.style.background = 'black';
    }));
}

function fillWhite() {
    const cells = document.querySelectorAll('.gameCell');
    cells.forEach(gameCell => gameCell.addEventListener('mouseover', () => {
        gameCell.style.background = 'white';
    }));
}
function fillRainbow() {
    const cells = document.querySelectorAll('.gameCell');
    cells.forEach(gameCell => gameCell.addEventListener('mouseover', () => {
        gameCell.style.background = `rgb(${(Math.random() * 256)}, ${(Math.random() * 256)}, ${(Math.random() * 256)}`;
    }));
}

function clearBoard() {
    const cells = document.querySelectorAll('.gameCell');
    cells.forEach(gameCell => gameCell.setAttribute('style', 'background: white'));
}

function resizeBoard() {
    clearBoard();
    let newSize = prompt('Enter a new board size')
    createBoard(newSize, newSize);
}
