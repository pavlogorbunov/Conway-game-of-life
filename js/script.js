import getNextGen from "./conway.js";

function toggleCell(cell) {
    cell.classList.toggle('cell_active');
    if (B[cell.i][cell.j] === 1) {
        B[cell.i][cell.j] = 0;
    } else {
        B[cell.i][cell.j] = 1;
    }
}

function handleCellMouseDown(e) {
    if (!isPlaying) {
        toggleCell(e.target);
    }
}

function handleCellMouseOver(e) {
    if (!isPlaying && e.buttons === 1) {
        toggleCell(e.target);
    }
}

function play() {
    return setInterval(() => {
        B = getNextGen(B);
        showCells(B);
    }, 100);
}

function stop(playTimer) {
    clearInterval(playTimer);
}

let playTimer = {};

function handlePlayButtonClick(e) {
    isPlaying = !isPlaying;
    field.classList.toggle('field_edit');
    if (isPlaying) {
        playButton.innerText = 'СТОП';
        playTimer = play();
    } else {
        playButton.innerText = 'СТАРТ';
        stop(playTimer);
    }
}

function handleClearButtonClick() {
    while (field.firstChild) {
        field.removeChild(field.firstChild);
    }
    B = [];
    for (let i = 0; i < 33; ++i) {
        B.push(Array(60).fill(0));
    }
    showCells(B);
}

function showCells(array) {
    while (field.firstChild) {
        field.removeChild(field.firstChild);
    }

    array.forEach((subArray, i) => {
        subArray.forEach((el, j) => {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            if (el === 1) {
                cell.classList.add('cell_active');
            };
            cell.i = i;
            cell.j = j;
            cell.addEventListener('mouseover', handleCellMouseOver);
            field.appendChild(cell);
        });
    });
}

let B = [];
let isPlaying = false;

for (let i = 0; i < 33; ++i) {
    B.push(Array(60).fill(0));
}

const field = document.getElementById('field');
const playButton = document.getElementById('playButton');
const clearButton = document.getElementById('clearButton');

showCells(B);

field.addEventListener('mousedown', handleCellMouseDown);
playButton.addEventListener('click', handlePlayButtonClick);
clearButton.addEventListener('click', handleClearButtonClick);
document.addEventListener('');
