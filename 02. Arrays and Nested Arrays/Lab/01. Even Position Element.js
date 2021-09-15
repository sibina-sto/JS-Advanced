function solve(input) {
    let arr = [];
    for (let i = 0; i <= input.length; i += 2) {
        arr.push(input[i]);
    }

    console.log(arr.join(' '));
}

solve(['20', '30', '40', '50', '60']);
