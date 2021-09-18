//4.	Rotate Array


function rotate(array, rotations) {
    for (let i = 0; i < rotations; i++) {
        const element = array.pop();
        array.unshift(element);
    }

    return array.join(' ');
}

// console.log(rotate(['1', 
// '2', 
// '3', 
// '4'], 
// 2
// ));
