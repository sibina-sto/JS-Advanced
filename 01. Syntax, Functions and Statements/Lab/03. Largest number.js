function solve(...numbers){
    const result = numbers.sort((a, b) => b - a);
    console.log(`The largest number is ${result[0]}.`)
}

//solve(5, -3, 16);
