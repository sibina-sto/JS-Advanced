function solve() {
  let divOutputElement = document.getElementById('output');
  let inputTextareaElement = document.getElementsByTagName('textarea')[0];
  let all = inputTextareaElement.value.split('.');
  all.pop();

  while (all.length > 0) {
    let paragraphText = all.splice(0, 3).join('.') + '.';
    let newParagraph = document.createElement('p');
    newParagraph.textContent = paragraphText;
    divOutputElement.appendChild(newParagraph);
  }
}