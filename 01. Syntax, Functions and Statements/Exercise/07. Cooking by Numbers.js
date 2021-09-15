function solve(...input) {
    let num = Number(input.shift());

    const cooking = {
        chop() {
            num /= 2;
        },
        dice() {
            num = Math.sqrt(num);
        },
        spice() {
            num++;
        },
        bake() {
            num *= 3;
        },
        fillet() {
            num = (num * 0.8).toFixed(1);
        },
    };

    for (let el of input) {
        cooking[el]();
        console.log(num);
    }
}

//solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');

//solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
