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
    if (isPlaying) {
        field.classList.remove('field_edit');
        playButton.classList.add('header__button_active');
        playButton.innerText = 'СТОП';
        playTimer = play();
    } else {
        field.classList.add('field_edit');
        playButton.classList.remove('header__button_active');
        playButton.innerText = 'СТАРТ';
        stop(playTimer);
    }
}

function handleClearButtonClick() {
    if (isPlaying) {
        field.classList.add('field_edit');
        playButton.classList.remove('header__button_active');
        playButton.innerText = 'СТАРТ';
        isPlaying = false;
        stop(playTimer);
    }
    while (field.firstChild) {
        field.removeChild(field.firstChild);
    }
    handleResize();
}

function handlePlusButtonClick() {
    if (isPlaying) {
        field.classList.add('field_edit');
        playButton.classList.remove('header__button_active');
        playButton.innerText = 'СТАРТ';
        isPlaying = false;
        stop(playTimer);
    }
    while (field.firstChild) {
        field.removeChild(field.firstChild);
    }
    cellSize += 2;
    handleResize();
}

function handleMinusButtonClick() {
    cellSize -= 2;
    handleResize();
}

function handleResize() {
    if (isPlaying) {
        field.classList.add('field_edit');
        playButton.classList.remove('header__button_active');
        playButton.innerText = 'СТАРТ';
        isPlaying = false;
        stop(playTimer);
    }
    const xCells = Math.floor(field.offsetWidth / cellSize);
    cellWidth = field.offsetWidth / xCells;
    const yCells = Math.floor((window.innerHeight - field.getBoundingClientRect().top - footer.getBoundingClientRect().height) / cellSize);
    cellHeight = (window.innerHeight - field.getBoundingClientRect().top - footer.getBoundingClientRect().height) / yCells;
    B = [];
    for (let i = 0; i < yCells; ++i) {
        B.push(Array(xCells).fill(0));
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
            cell.style.height = cellHeight + 'px';
            cell.style.width = cellWidth + 'px';
            cell.i = i;
            cell.j = j;
            cell.addEventListener('mouseover', handleCellMouseOver);
            field.appendChild(cell);
        });
    });
}

let B = [];
let isPlaying = false;

let cellSize = 18;
let cellWidth = 18;
let cellHeight = 18;

const field = document.getElementById('field');
const footer = document.getElementById('footer');
const playButton = document.getElementById('playButton');
const clearButton = document.getElementById('clearButton');
const plusButton = document.getElementById('+');
const minusButton = document.getElementById('-');

handleResize();

field.addEventListener('mousedown', handleCellMouseDown);
playButton.addEventListener('click', handlePlayButtonClick);
clearButton.addEventListener('click', handleClearButtonClick);
plusButton.addEventListener('click', handlePlusButtonClick);
minusButton.addEventListener('click', handleMinusButtonClick);
window.addEventListener('resize', () => { setTimeout(handleResize, 200) });
