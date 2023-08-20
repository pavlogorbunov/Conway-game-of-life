import gliderImg from '../img/glider.jpg'
import pentadecathlonImg from '../img/penta-decathlon.jpg'
import pinwheelImg from '../img/pinwheel.jpg'
import ornamentImg from '../img/ornament-1.jpg'
import aaImg from '../img/a-a.jpg'
import diamondImg from '../img/diamond-4-8-12.jpg'
import bigGliderImg from '../img/big-glider.jpg'
import starImg from '../img/star.jpg'
import spaceShipImg from '../img/spaceship.jpg'
import fig8Img from '../img/fig-8.jpg'

import twoSpaceShipsImg from '../img/two-spaceships-1.jpg'
import twoBigGlidersImg from '../img/two-big-gliders.jpg'
import fourGlidersImg from '../img/four-gliders.jpg'

type Figure = {
    scheme: number[][],
    position: [string, string],
    margin: number,
    img: string,
    name: string
}

class Combination {
    figures: Figure[]
    img: string
    name: string

    constructor(figures: Figure[], img: string, name: string) {
        this.figures = figures
        this.img = img
        this.name = name
    }

    draw(B: number[][]) {
        this.figures.forEach(fig => addFigure(fig, B))
    }
}

const GLIDER1: Figure = {
    scheme: [
        [1, 1, 1],
        [0, 0, 1],
        [0, 1, 0]
    ],
    position: ['left', 'bottom'],
    margin: 1,
    img: gliderImg,
    name: 'Глайдер'
}

const GLIDER2: Figure = {
    scheme: [
        [0, 1, 0],
        [0, 0, 1],
        [1, 1, 1]
    ],
    position: ['left', 'top'],
    margin: 1,
    img: gliderImg,
    name: 'Глайдер'
}

const GLIDER3: Figure = {
    scheme: [
        [0, 1, 0],
        [1, 0, 0],
        [1, 1, 1]
    ],
    position: ['right', 'top'],
    margin: 1,
    img: gliderImg,
    name: 'Глайдер'
}

const GLIDER4: Figure = {
    scheme: [
        [1, 1, 1],
        [1, 0, 0],
        [0, 1, 0]
    ],
    position: ['right', 'bottom'],
    margin: 1,
    img: gliderImg,
    name: 'Глайдер'
}

const PENTADECATHLON: Figure = {
    scheme: [
        [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
        [1, 1, 0, 1, 1, 1, 1, 0, 1, 1],
        [0, 0, 1, 0, 0, 0, 0, 1, 0, 0]
    ],
    position: ['center', 'center'],
    margin: 2,
    img: pentadecathlonImg,
    name: 'Пентадекатлон'
}

const PINWHEEL: Figure = {
    scheme: [
        [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
        [1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
        [1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1],
        [0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1],
        [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
    ],
    position: ['center', 'center'],
    margin: 2,
    img: pinwheelImg,
    name: 'Вертушка'
}

const ORNAMENT1: Figure = {
    scheme: [
        [1, 1, 1, 1, 1, 1, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 1, 1, 1, 1, 1, 1],
    ],
    position: ['center', 'center'],
    margin: 2,
    img: ornamentImg,
    name: 'Орнамент'
}

const AA: Figure = {
    scheme: [
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        [0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
        [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    ],
    position: ['center', 'center'],
    margin: 2,
    img: aaImg,
    name: 'AA'
}

const DIAMOND4812: Figure = {
    scheme: [
        [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
    ],
    position: ['center', 'center'],
    margin: 2,
    img: diamondImg,
    name: 'Бриллиант 4-8-12'
}

const BIGGLIDER: Figure = {
    scheme: [
        [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0],
        [0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0]
    ],
    position: ['right', 'bottom'],
    margin: 2,
    img: bigGliderImg,
    name: 'Большой глайдер'
}

const BIGGLIDER2: Figure = {
    scheme: [...BIGGLIDER.scheme].map(arr => [...arr].reverse()).reverse(),
    position: ['left', 'top'],
    margin: 2,
    img: bigGliderImg,
    name: 'Большой глайдер'
}

const STAR: Figure = {
    scheme: [
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    ],
    position: ['center', 'center'],
    margin: 2,
    img: starImg,
    name: 'Звезда'
}

const SPACESHIP1: Figure = {
    scheme: [
        [0, 1, 1, 1, 1],
        [1, 0, 0, 0, 1],
        [0, 0, 0, 0, 1],
        [1, 0, 0, 1, 0]
    ],
    position: ['left', 'center'],
    margin: 2,
    img: spaceShipImg,
    name: 'Звездолет'
}

const SPACESHIP1M: Figure = {
    scheme: [...SPACESHIP1.scheme].map(arr => [...arr].reverse()),
    position: ['right', 'center'],
    margin: 2,
    img: spaceShipImg,
    name: 'Звездолет'
}

const FIG8: Figure = {
    scheme: [
        [1, 1, 1, 0, 0, 0,],
        [1, 1, 1, 0, 0, 0,],
        [1, 1, 1, 0, 0, 0,],
        [0, 0, 0, 1, 1, 1,],
        [0, 0, 0, 1, 1, 1,],
        [0, 0, 0, 1, 1, 1,],
    ],
    position: ['center', 'center'],
    margin: 2,
    img: fig8Img,
    name: 'Фигура - 8'
}

const fourGliders = new Combination([GLIDER1, GLIDER2, GLIDER3, GLIDER4], fourGlidersImg, 'Четыре глайдера в противоположных углах поля')

const twoBigGliders = new Combination([BIGGLIDER, BIGGLIDER2], twoBigGlidersImg, 'Два больших глайдера')

const twoSpaceShips = new Combination([SPACESHIP1, SPACESHIP1M], twoSpaceShipsImg, 'Два космических корабля')

function addFigure(figure: Figure, B: number[][]): void {
    if ((B.length <= figure.scheme.length + figure.margin * 2) || (B[0].length <= figure.scheme[0].length + figure.margin * 2)) {
        alert('Добавление невозможно. Для добавления необходимо уменьшить масштаб поля.')
    }

    let horizontalStartPosition
    let verticalStartPosition

    if (figure.position[0] === 'left') horizontalStartPosition = figure.margin
    if (figure.position[0] === 'right') horizontalStartPosition = B[0].length - figure.margin - figure.scheme[0].length
    if (figure.position[0] === 'center') horizontalStartPosition = Math.floor(B[0].length / 2) - Math.floor(figure.scheme[0].length / 2)

    if (figure.position[1] === 'top') verticalStartPosition = figure.margin
    if (figure.position[1] === 'bottom') verticalStartPosition = B.length - figure.margin - figure.scheme.length
    if (figure.position[1] === 'center') verticalStartPosition = Math.floor(B.length / 2) - Math.floor(figure.scheme.length / 2)

    figure.scheme.forEach((row, i) => {
        row.forEach((n, j) => {
            B[verticalStartPosition + i][horizontalStartPosition + j] = n
        })
    })
    return
}

export {
    addFigure,
    fourGliders,
    twoBigGliders,
    twoSpaceShips,
    GLIDER1,
    PENTADECATHLON,
    PINWHEEL,
    ORNAMENT1,
    AA,
    DIAMOND4812,
    BIGGLIDER,
    STAR,
    SPACESHIP1,
    FIG8
}