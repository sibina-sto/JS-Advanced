function toggle() {
    let spanElement = document.getElementsByClassName('button')[0];
    let divExtraElement = document.querySelector('div#extra');
    let divAccordionElement = document.querySelector('div#accordion');
    if(spanElement.textContent === 'More') {
        spanElement.textContent = 'Less';
        divExtraElement.style.display = 'block';
    } else if( spanElement.textContent === 'Less'){
        spanElement.textContent = 'More';
        divExtraElement.style.display = 'none';
    }
}