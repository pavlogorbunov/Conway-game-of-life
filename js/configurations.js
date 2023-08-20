const GLIDER1 = {
    scheme: [
        [1, 1, 1],
        [0, 0, 1],
        [0, 1, 0]
    ],
    position: ['left', 'bottom'],
    margin: 1
}

const GLIDER2 = {
    scheme: [
        [0, 1, 0],
        [0, 0, 1],
        [1, 1, 1]
    ],
    position: ['left', 'top'],
    margin: 1
}

const GLIDER3 = {
    scheme: [
        [0, 1, 0],
        [1, 0, 0],
        [1, 1, 1]
    ],
    position: ['right', 'top'],
    margin: 1
}

const GLIDER4 = {
    scheme: [
        [1, 1, 1],
        [1, 0, 0],
        [0, 1, 0]
    ],
    position: ['right', 'bottom'],
    margin: 1
}

const PENTADECATHLON = {
    scheme: [
        [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
        [1, 1, 0, 1, 1, 1, 1, 0, 1, 1],
        [0, 0, 1, 0, 0, 0, 0, 1, 0, 0]
    ],
    position: ['center', 'center'],
    margin: 2
}

const PINWHEEL = {
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
    margin: 2
}

const ORNAMENT1 = {
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
    margin: 2
}

const AA = {
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
    margin: 2
}

const DIAMOND4812 = {
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
    margin: 2
}

const BIGGLIDER = {
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
    margin: 2
}

const BIGGLIDER2 = {
    scheme: [...BIGGLIDER.scheme].map(arr => [...arr].reverse()).reverse(),
    position: ['left', 'top'],
    margin: 2
}

const STAR = {
    scheme: [
        [0,0,0,0,0,0,1,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,0,0,0,0,0,0],
        [0,0,0,0,1,1,0,1,1,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,1,0,1,0,0,0,1,0,1,0,0],
        [0,0,1,0,0,0,0,0,0,0,1,0,0],
        [1,1,0,0,0,0,0,0,0,0,0,1,1],
        [0,0,1,0,0,0,0,0,0,0,1,0,0],
        [0,0,1,0,1,0,0,0,1,0,1,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,1,1,0,1,1,0,0,0,0],
        [0,0,0,0,0,0,1,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,0,0,0,0,0,0],
    ],
    position: ['center', 'center'],
    margin: 2
}

const SPACESHIP1 = {
    scheme: [
        [0,1,1,1,1],
        [1,0,0,0,1],
        [0,0,0,0,1],
        [1,0,0,1,0]
    ],
    position: ['left', 'center'],
    margin: 2
}

const SPACESHIP1M = {
    scheme: [...SPACESHIP1.scheme].map(arr => [...arr].reverse()),
    position: ['right', 'center'],
    margin: 2
}

const FIG8 = {
    scheme: [
        [1,1,1,0,0,0,],
        [1,1,1,0,0,0,],
        [1,1,1,0,0,0,],
        [0,0,0,1,1,1,],
        [0,0,0,1,1,1,],
        [0,0,0,1,1,1,],
    ],
    position: ['center', 'center'],
    margin: 2
}

function addTwoSpaceShips1(B) {
    addFigure(SPACESHIP1, B)
    addFigure(SPACESHIP1M, B)
}

function addTwoBigGliders(B) {
    addFigure(BIGGLIDER, B)
    addFigure(BIGGLIDER2, B)
}

function addFourGliders(B) {
    addFigure(GLIDER1, B)
    addFigure(GLIDER2, B)
    addFigure(GLIDER3, B)
    addFigure(GLIDER4, B)
}

function addFigure(figure, B) {
    if ((B.length <= figure.scheme.length + figure.margin * 2) || (B[0].length <= figure.scheme[0].length + figure.margin * 2)) {
        alert('Добавление невозможно. Для добавления необходимо уменьшить масштаб поля.')
    }

    let horizontalStartPosition
    let verticalStartPosition

    if(figure.position[0] === 'left') horizontalStartPosition = figure.margin
    if(figure.position[0] === 'right') horizontalStartPosition = B[0].length - figure.margin - figure.scheme[0].length
    if(figure.position[0] === 'center') horizontalStartPosition = Math.floor(B[0].length / 2) - Math.floor(figure.scheme[0].length / 2)

    if(figure.position[1] === 'top') verticalStartPosition = figure.margin
    if(figure.position[1] === 'bottom') verticalStartPosition = B.length - figure.margin - figure.scheme.length
    if(figure.position[1] === 'center') verticalStartPosition = Math.floor(B.length / 2) - Math.floor(figure.scheme.length / 2)

    figure.scheme.forEach((row, i) => {
        row.forEach((n, j) => {
            B[verticalStartPosition + i][horizontalStartPosition + j] = n
        })
    })
    return
}

export {
    addTwoSpaceShips1,
    addTwoBigGliders,
    addFourGliders,
    addFigure,
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