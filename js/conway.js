function countNeighbours(i, j, array) {
    let res = 0;
    for (let n = -1; n <= 1; ++n) {
        for (let m = -1; m <= 1; ++m) {
            if ((i + n >= 0) && (i + n < array.length) && (j + m >= 0) && (j + m < array[i + n].length)) {
                res += array[i + n][j + m];
            }
        }
    }
    res -= array[i][j];
    return res;
}

function fillNeighboursNumsArray(array) {
    let neighboursNums = [];
    for (let i = 0; i < array.length; ++i) {
        neighboursNums.push([]);
        for (let j = 0; j < array[0].length; ++j) {
            neighboursNums[i][j] = countNeighbours(i, j, array);
        }
    }
    return neighboursNums;
}

function fillNextGenArray(currentGenArray, neighboursNumsArray) {
    const nextGenArray = [];
    for (let i = 0; i < currentGenArray.length; ++i) {
        nextGenArray.push([]);
        for (let j = 0; j < currentGenArray[i].length; ++j) {
            if ((currentGenArray[i][j] === 0) && (neighboursNumsArray[i][j] === 3)) {
                nextGenArray[i][j] = 1;
            } else if ((currentGenArray[i][j] === 1) && ((neighboursNumsArray[i][j] < 2) || (neighboursNumsArray[i][j] > 3))) {
                nextGenArray[i][j] = 0;
            } else {
                nextGenArray[i][j] = currentGenArray[i][j];
            }
        }
    }
    return nextGenArray;
}

function getNextGen(array) {
    if (JSON.stringify(array) === JSON.stringify([[]])) return array;
    let currentArray = JSON.parse(JSON.stringify(array));

    // currentArray = addZerosAroundArray(currentArray);
    let currentNeighboursNumsArray = fillNeighboursNumsArray(currentArray);
    let nextGenArray = fillNextGenArray(currentArray, currentNeighboursNumsArray);
    // nextGenArray = eraseZerosAroundArray(nextGenArray);
    return nextGenArray;
}

export default getNextGen;