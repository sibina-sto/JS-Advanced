function sumTable() {
    let tableRowsElement = document.querySelectorAll('table tr');
    let sum = 0;
    for (let i = 1; i < tableRowsElement.length; i++) {
        let cols = tableRowsElement[i].children;
        let num = cols[cols.length - 1].textContent;
        sum += Number(num);
    }
    let resultElement = document.getElementById('sum');
    resultElement.textContent = sum;
}