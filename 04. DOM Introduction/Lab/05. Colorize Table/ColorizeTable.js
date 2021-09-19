function colorize() {
    let tableEvenRowsElemets = document.querySelectorAll('table tr:nth-child(even)');
    for (const row of tableEvenRowsElemets) {
        row.style.background = 'teal';
    }
}