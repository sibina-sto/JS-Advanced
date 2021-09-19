function extractText() {
    let listContentElements = document.querySelectorAll('#items li');
    let textAreaElement = document.querySelector('#result')
    let result = '';
    for (const node of listContentElements) {
        result += node.textContent + '\r\n';
    }
    textAreaElement.textContent = result.trim();
}