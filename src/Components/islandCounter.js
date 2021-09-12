const cellsArray2MatrixConverter = (cellsArray, rows, columns) => {
    let Matrix = [];
    let innerMatrix = [];
    for (let cellIndex = 0; cellIndex <= rows * columns; cellIndex++) {
        if (cellIndex % columns) {
            innerMatrix.push(cellsArray.indexOf(cellIndex) !== -1 ? 1 : 0);
        } else if (cellIndex !== 0) {
            Matrix.push(innerMatrix);
            innerMatrix = [cellsArray.indexOf(cellIndex) !== -1 ? 1 : 0];
        } else {
            innerMatrix = [cellsArray.indexOf(cellIndex) !== -1 ? 1 : 0];
        }
    }
    return Matrix;
}

const islandCounter = (cellsArray, rows, columns) => {
    const data = cellsArray2MatrixConverter(cellsArray, rows, columns);

    function removeNeighbor(path, data, location) {
        let neighbors = getNeighbors(data, location);
        var notVisitedNeighbors = neighbors.filter(eachNeighbor => {
            for (let i = 0; i < path.length; i++) {
                if (path[i].x === eachNeighbor.x && path[i].y === eachNeighbor.y) {
                    return false
                }
            }
            return true;
        });

        notVisitedNeighbors.forEach(each => removeNeighbor([...path, location], data, each));
        data[location.x][location.y] = 0;
    }

    function getNeighbors(data, location) {
        let x = location.x;
        let y = location.y;
        let output = [];
        for (let dx = -1; dx < 2; dx++) {
            for (let dy = -1; dy < 2; dy++) {
                output.push({ x: x + dx, y: y + dy })
            }
        }
        output = output.filter(i => i.x >= 0 && i.x < data.length && i.y >= 0 && i.y < data[0].length);
        output = output.filter(i => {
            return !(i.x === x && i.y === y);
        });
        output = output.filter(each => data[each.x][each.y] !== 0)

        return output;

    }

    let numOfIslands = 0;
    for (let x = 0; x < data.length; x++) {
        for (let y = 0; y < data[0].length; y++) {
            if (data[x][y] !== 0) {
                removeNeighbor([], data, { x: x, y: y });
                numOfIslands++;
            }
        }
    }
    return numOfIslands;
}

export default islandCounter;