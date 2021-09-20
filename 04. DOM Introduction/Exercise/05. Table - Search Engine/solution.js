function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let inputElement = document.getElementById('searchField');
      let elementsToCheck = Array.from(document.querySelectorAll('tbody tr'));
      console.log(elementsToCheck);
      elementsToCheck.forEach(element => {

         if (element.textContent.includes(inputElement.value)) {
            element.classList.add('select');
         }

      });
      element.classList.remove('select');
      inputElement.value = '';
   }
}