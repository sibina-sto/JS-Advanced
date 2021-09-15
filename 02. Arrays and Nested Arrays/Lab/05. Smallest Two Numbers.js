function solve(arr) {
    const result = arr.sort((a, b) => a - b);

    console.log(`${result[0]} ${result[1]}`);
}

solve([30, 15, 50, 5]);

solve([3, 0, 10, 4, 7, 3]);
