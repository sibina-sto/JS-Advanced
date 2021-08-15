function solve(num){
    if(num === ''){
        num = 5;
    }
    for (let i = 1; i <= num; i++){
        console.log('* '.repeat(num));
    }
}

solve(5);
