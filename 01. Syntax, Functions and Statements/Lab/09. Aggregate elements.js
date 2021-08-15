function solve(arr){
    console.log(arr.reduce((acc, curr) => Number(curr) + Number(acc), []));
    console.log(arr.map(e => (1 / e)).reduce((acc, curr) => Number(curr) + Number(acc), []));
    console.log(arr.reduce((acc, curr) => acc + curr, []));
}

solve([1, 2, 3]);
solve([2, 4, 8, 16])
