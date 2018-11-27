export const generateGridMap = (length) => {
    const gridMap = [];
    for(let i = 0; i < length; i++) {
        let rowMap = [];
        for(let j = 0; j < length; j++) {
            rowMap[j] = Math.random() >= 0.5;
        }
        gridMap[i] = rowMap;
    }
    return gridMap;
};

export const updateGridMap = (gridMap) => {
    const updatedGridMap = [];
    gridMap.forEach((row, rowIndex) => {
        const updatedRow = [];
        row.forEach(( cell, cellIndex) => {
            const rowAbove = gridMap[rowIndex - 1];
            const rowBelow = gridMap[rowIndex + 1];
            const neighbours = [
                rowAbove ? rowAbove[cellIndex -1] : undefined,
                rowAbove ? rowAbove[cellIndex] : undefined,
                rowAbove ? rowAbove[cellIndex + 1] : undefined,
                row[cellIndex - 1],
                row[cellIndex + 1],
                rowBelow ? rowBelow[cellIndex -1] : undefined,
                rowBelow ? rowBelow[cellIndex] : undefined,
                rowBelow ? rowBelow[cellIndex + 1] : undefined,
            ];
            const neighboursLiveCounter = neighbours.filter(item => item);
            if(cell) {
                // alive cell
                if (neighboursLiveCounter.length < 2) {
                    updatedRow[cellIndex] = false;
                } else if (neighboursLiveCounter.length >= 2 && neighboursLiveCounter.length <= 3) {
                    updatedRow[cellIndex] = true;
                } else if(neighboursLiveCounter.length > 3) {
                    updatedRow[cellIndex] = false;
                }
            } else {
                // dead cell
                if (neighboursLiveCounter.length === 3) {
                    updatedRow[cellIndex] = true;
                } else {
                    updatedRow[cellIndex] = cell;
                }
            }
        });
        updatedGridMap[rowIndex] = updatedRow;
    });
    return updatedGridMap;
}