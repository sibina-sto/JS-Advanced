function add(a) {
    function calc(b) {
        a += b;
        return calc;
    }
    calc.toString = () => a //just to print number
    return calc
}
