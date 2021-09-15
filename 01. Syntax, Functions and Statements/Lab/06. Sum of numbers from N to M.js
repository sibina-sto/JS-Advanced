function solve(first, second){
    first = Number(first);
    second = Number(second);
    let result = 0;

    for (let i = first; i <= second; i++){
        result += i;
    }

    return result;
}

//console.log(solve('-8','20'));
