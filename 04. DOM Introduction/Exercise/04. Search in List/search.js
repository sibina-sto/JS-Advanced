function search() {
   let inputElement = document.getElementById('searchText');
   let ulElement = document.getElementById('towns');
   let liElements = Array.from(ulElement.children);
   let divResultElement = document.getElementById('result');
   let counter = 0;

   liElements.forEach(li => {
      if( li.textContent.includes(inputElement.value)) {
         li.style.textDecoration = 'underline';
         li.style.fontWeight = 'bold';
         counter++;
      }
   });

   divResultElement.textContent = `${counter} matches found`;
}