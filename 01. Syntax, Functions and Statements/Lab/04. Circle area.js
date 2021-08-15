function solve(input){
    if (typeof(input) === 'number'){
        return (Math.pow(input, 2) * Math.PI).toFixed(2);
    } else {
        return `We can not calculate the circle area, because we receive a ${typeof(input)}.`
    }
}

console.log(solve(5));
console.log(solve('name'));
