function solve(n) {
    let num = n

    return function add(n) {
        return num + n
    }
}
