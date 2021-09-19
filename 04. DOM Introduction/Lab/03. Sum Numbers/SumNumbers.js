function calc() {
    let firstNumElement = document.getElementById('num1').value;
    let secondNumElement = document.getElementById('num2').value;
    let resultElement = document.getElementById('sum');
    resultElement.value = Number(firstNumElement) + Number(secondNumElement);
}
