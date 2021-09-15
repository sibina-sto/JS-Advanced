//4.	Negative / Positive Numbers

function negativePositive(arr) {
    const result = [];
    for (let num of arr) {
        if(num < 0){
            result.splice(0,0,num);
        }else if(num > 0){
            result.push(num);
        }else{
            result[result.length] = num;
        }
    }

    return result;
}

// console.log(negativePositive([3, -2, 0, -1]));
// console.log(negativePositive([7, -2, 8, 9]));
