function solve(arr) {
    const result = arr.sort((a, b) => a - b);

    console.log(`[${result.splice(Math.ceil(result.length / 2)).join(', ')}]`);
}

//solve([3, 19, 14, 7, 2, 19, 6]);

//solve([3, 19, 14, 7, 2, 19, 6]);
