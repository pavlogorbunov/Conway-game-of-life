import getNextGen from "./conway.js"
import * as imported from "./configurations.js"
import '../css/style.css'

function toggleCell(cell) {
    cell.classList.toggle('cell_active')
    if (B[cell.i][cell.j] === 1) {
        B[cell.i][cell.j] = 0
    } else {
        B[cell.i][cell.j] = 1
    }
}

function handleCellMouseDown(e) {
    if (!isPlaying) {
        toggleCell(e.target)
    }
}

function handleCellMouseOver(e) {
    if (!isPlaying && e.buttons === 1) {
        toggleCell(e.target)
    }
}

function play() {
    return setInterval(() => {
        B = getNextGen(B)
        showCells(B)
    }, 100)
}

function stop(playTimer) {
    clearInterval(playTimer)
}

function handlePlayButtonClick(e) {
    isPlaying = !isPlaying
    if (isPlaying) {
        field.classList.remove('field_edit')
        playButton.classList.add('header__button_active')
        playButton.innerText = 'СТОП'
        playTimer = play()
    } else {
        field.classList.add('field_edit')
        playButton.classList.remove('header__button_active')
        playButton.innerText = 'СТАРТ'
        stop(playTimer)
    }
}

function handleClearButtonClick() {
    if (isPlaying) {
        field.classList.add('field_edit')
        playButton.classList.remove('header__button_active')
        playButton.innerText = 'СТАРТ'
        isPlaying = false
        stop(playTimer)
    }
    while (field.firstChild) {
        field.removeChild(field.firstChild)
    }
    handleResize()
}

function handlePlusButtonClick() {
    if (isPlaying) {
        field.classList.add('field_edit')
        playButton.classList.remove('header__button_active')
        playButton.innerText = 'СТАРТ'
        isPlaying = false
        stop(playTimer)
    }
    while (field.firstChild) {
        field.removeChild(field.firstChild)
    }
    cellSize += 2
    setTimeout(handleResize, 500)
}

function handleMinusButtonClick() {
    cellSize -= 2
    setTimeout(handleResize, 500)
}

function handleResize() {
    if (isPlaying) {
        field.classList.add('field_edit')
        playButton.classList.remove('header__button_active')
        playButton.innerText = 'СТАРТ'
        isPlaying = false
        stop(playTimer)
    }
    const xCells = Math.floor(field.offsetWidth / cellSize)
    cellWidth = field.offsetWidth / xCells
    const yCells = Math.floor((window.innerHeight - field.getBoundingClientRect().top - footer.getBoundingClientRect().height) / cellSize)
    cellHeight = (window.innerHeight - field.getBoundingClientRect().top - footer.getBoundingClientRect().height) / yCells
    B = []
    for (let i = 0; i < yCells; ++i) {
        B.push(Array(xCells).fill(0))
    }
    showCells(B)
}

function showCells(array) {
    while (field.firstChild) {
        field.removeChild(field.firstChild)
    }

    array.forEach((subArray, i) => {
        subArray.forEach((el, j) => {
            const cell = document.createElement('div')
            cell.classList.add('cell')
            if (el === 1) {
                cell.classList.add('cell_active')
            }
            cell.style.height = cellHeight + 'px'
            cell.style.width = cellWidth + 'px'
            cell.i = i
            cell.j = j
            cell.addEventListener('mouseover', handleCellMouseOver)
            field.appendChild(cell)
        })
    })
}

function addConfiguration(conf) {
    handlePopupClose()
    if (typeof (imported[conf]) === 'function') {
        imported[conf](B)
    } else if (typeof (imported[conf]) === 'object') {
        imported.addFigure(imported[conf], B)
    }
    showCells(B)
}

function handlePopupClose() {
    Array.from(popups).forEach(popup => popup.classList.add('popup_hidden'))
}

function showPopup(p) {
    p.classList.remove('popup_hidden')
}

function handleInfoPopupOpen() {
    if (isPlaying) handlePlayButtonClick()
    showPopup(infoPopup)
}

function handleConfigurationsBtnClick() {
    if (isPlaying) handlePlayButtonClick()
    showPopup(configurationsPopup)
}

let B = []
let playTimer = {}
let isPlaying = false

let cellSize = 18
let cellWidth = cellSize
let cellHeight = cellSize

const field = document.getElementById('field')
const footer = document.getElementById('footer')
const playButton = document.getElementById('playButton')
const clearButton = document.getElementById('clearButton')
const plusButton = document.getElementById('+')
const minusButton = document.getElementById('-')
const popups = document.querySelectorAll('.popup')
const infoPopup = document.getElementById('infoPopup')
const infoPopupOpen = document.getElementById('infoPopupOpen')
const popupCloseBtns = document.querySelectorAll('.popup__close')
const showConfidurationsBtn = document.getElementById('configurations')
const configurationsPopup = document.getElementById('configurationsPopup')
const configurations = document.querySelectorAll('.configuration')

handleResize()

field.addEventListener('mousedown', handleCellMouseDown)
playButton.addEventListener('click', handlePlayButtonClick)
clearButton.addEventListener('click', handleClearButtonClick)
plusButton.addEventListener('click', handlePlusButtonClick)
minusButton.addEventListener('click', handleMinusButtonClick)
infoPopupOpen.addEventListener('click', handleInfoPopupOpen)
showConfidurationsBtn.addEventListener('click', handleConfigurationsBtnClick)
Array.from(popupCloseBtns).forEach(btn => { btn.addEventListener('click', handlePopupClose) })
Array.from(configurations).forEach(conf => { conf.addEventListener('click', () => { addConfiguration(conf.id) }) })

window.addEventListener('resize', () => {
    handleClearButtonClick()
    handleResize()
    setTimeout(handleResize, 250)
    setTimeout(handleClearButtonClick, 300)
})
