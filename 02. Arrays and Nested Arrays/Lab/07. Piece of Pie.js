//7.	Piece of Pie

function pieceOfPie(arr, flav1, flav2) {
    const start = arr.indexOf(flav1);
    const end = arr.indexOf(flav2);

    return arr.slice(start, end + 1);
}

//console.log(pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
));
