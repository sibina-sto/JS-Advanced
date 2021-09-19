function editElement(ref, match, replacer) {
    let textContentElement = ref.textContent;
    let matcher = new RegExp(match, 'g');
    let editedText = textContentElement.replace(matcher, replacer);
    ref.textContent = editedText;
}