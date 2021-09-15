function solve(arr) {
    const first = +arr.shift();
    const last = +arr.pop();

    console.log(first + last);
}

solve(['20', '30', '40']);
