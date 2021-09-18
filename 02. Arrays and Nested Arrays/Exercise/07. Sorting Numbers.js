//7.	Sorting Numbers

function solve1(arr) {
    let result = [];

    arr.sort((a,b) => a- b);

    while(arr.length){
        result.push(arr.shift());
        result.push(arr.pop());
    }

    return result.filter(num => num != undefined);
}

//console.log(solve1(
//    [1, 65, 3, 52, 48, 63, 31, -3, 18, 56]
// ));
