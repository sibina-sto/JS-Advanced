//9.	Biggest Element

function biggestElement(matrix) {
    let biggestNum = Number.NEGATIVE_INFINITY;
    matrix.forEach(
        row => row.forEach(
            col => biggestNum = Math.max(biggestNum,col)
        )
    );

    return biggestNum;
}

//console.log(biggestElement([[20, 50, 10],
    [8, 33, 145]]
   ));
