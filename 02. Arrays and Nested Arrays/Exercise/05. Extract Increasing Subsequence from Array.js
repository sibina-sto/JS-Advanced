//5.	Extract Increasing Subsequence from Array

function increasingSubs(array) {
    let result = [];
    let maxNumber;
    for (let i = 0; i < array.length; i++) {
        let element = array[i];

        if (element >= result[result.length - 1] || result.length == 0) {
            result.push(element);
        }
    }

    return result;

}

//another solution


function increase(arr) {
    return arr.reduce(function (result, currentValue, index, initialArr) {
        if (currentValue >= result[result.length - 1]) {
            result.push(currentValue);
        }
        return result;
    }, [arr[0]])
}

// console.log(increase(
//     [1,
//         3,
//         8,
//         4,
//         10,
//         12,
//         3,
//         2,
//         24]
// ));
