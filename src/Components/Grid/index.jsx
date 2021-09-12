import { useState, useEffect } from "react";
import islandCounter from "../islandCounter";

const Grid = ({ rows, columns, setNumOfIslands }) => {
    const [selectedCells, setSelectedCells] = useState([]);

    let numberOfConnectedCells = islandCounter(selectedCells, rows, columns);
    useEffect(() => {
        setNumOfIslands(numberOfConnectedCells);
    }, [rows, columns, numberOfConnectedCells, setNumOfIslands]);

    const grid = [];
    for (let cellIndex = 0; cellIndex < rows * columns; cellIndex++) {
        const indexInCells = selectedCells.indexOf(cellIndex);
        grid.push(
            <div
                key={cellIndex}
                onClick={() => {
                    indexInCells === -1
                        ? setSelectedCells([...selectedCells, cellIndex])
                        : setSelectedCells(selectedCells.filter((value) => value !== cellIndex))
                }
                }
                className={`grid-item ${indexInCells !== -1 ? 'selectedCell' : 'unselectedCell'}`}
            >
            </div>
        );
    }
    let gridTemplateColumns = "";
    for (let i = 0; i < columns; i++) {
        gridTemplateColumns += " auto";
    }
    return (
        <>
            <div className="grid-container" style={{ gridTemplateColumns: gridTemplateColumns }}>
                {grid}
            </div>
        </>
    )
}
export default Grid;