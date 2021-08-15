function solve(first, second, operation){
    let result = {
        '+': first + second,
        '-': first - second,
        '*': first * second,
        '/': first / second,
        '%': first % second,
        '**': first ** second
    }

    return result[operation];
}

console.log(solve(5,6,'+'));
console.log(solve(3, 5.5, '*'));
