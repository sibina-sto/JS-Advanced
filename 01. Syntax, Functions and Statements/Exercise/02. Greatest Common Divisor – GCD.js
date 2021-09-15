function solve (a, b){
    while(b !== 0){
        let oldB = b;
        b = a % b;
        a = oldB;
    }

    console.log(a)
}

//solve(2154, 458);
