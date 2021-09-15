//5.	Smallest Two Numbers

function twoSmallest(arr) {
    arr.sort((a,b)=> a-b);
    let res = arr.slice(0,2);
    return res.join(' ');
}

//console.log(twoSmallest([30, 15, 50, 5]));
