//1.	Even Position Element
function evenPosition(arr) {
    let sum = '';
    for (let i = 0; i < arr.length; i+= 2) {
     sum += arr[i] + " ";

    }
   return sum;
} 

// console.log(evenPosition(['20', '30', '40', '50', '60']));
// evenPosition(['5', '10']);
