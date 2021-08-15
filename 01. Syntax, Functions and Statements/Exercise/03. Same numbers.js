function solve(input){
    const arr = Array.from(input.toString());
    let result = arr.reduce((acc, curr) => Number(acc) + Number(curr));
    let isEqual = arr.every((e, i, a) => e === a[0]);
    console.log(isEqual);
    console.log(result);
}

solve(1234)
