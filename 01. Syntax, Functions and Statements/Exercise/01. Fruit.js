function solve(type, grams, price){
    const kg = grams / 1000;
    console.log(`I need $${(price * kg).toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${type}.`)
}

//solve('orange', 2500, 1.80);
