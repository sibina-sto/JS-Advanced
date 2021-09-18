//9.	Magic Matrices

function magic(matrix) {
    let rowSums = [];
    let colSums = [];

    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i];
        let sum = row.reduce((result,currentElement) => (result+currentElement),0);
        rowSums.push(sum);
    }

    for (let i = 0; i < matrix.length; i++) {
        let newRow = [];
        for(let y = 0; y< matrix.length; y++){
            let index = matrix.length - 1 -y;
            newRow.push(matrix[index][i]);
        }

        let sum = newRow.reduce((result,curr)=> (result+curr),0);
        colSums.push(sum);
        
    }
    return rowSums.concat(colSums).every((el,i , arr) => el === arr[0]);
}
