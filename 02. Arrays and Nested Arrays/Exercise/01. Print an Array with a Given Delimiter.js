//1.	Print an Array with a Given Delimiter

function delimiterSolution(array, delimiter) {
    let result = '';
    for (let i = 0; i < array.length; i++) {
        result += i == array.length - 1 ? array[i] : array[i] + delimiter;
    }
    return result;
}
