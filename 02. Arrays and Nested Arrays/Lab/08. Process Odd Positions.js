//8.	Process Odd Positions

function processOldPositions(array) {
    let newValue = 0;
    let result = [];
    for (let i = 1; i < array.length; i+= 2) {
       newValue = Number(array[i]) * 2;
       result.push(newValue);
    }
        // result = result.reverse();
    return result.reverse().join(' ');
}

//console.log(processOldPositions([10, 15, 20, 25]));
//console.log(processOldPositions([3, 0, 10, 4, 7, 3]));
