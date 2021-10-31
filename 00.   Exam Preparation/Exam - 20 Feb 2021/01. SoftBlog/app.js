function solve() {
   let authorInput = document.getElementById('creator');
   let titleInput = document.getElementById('title');
   let categoryInput = document.getElementById('category');
   let contentInput = document.getElementById('content');
   let button = document.querySelector('.btn.create');
   button.addEventListener('click', createPost);

   function createPost(e) {
      e.preventDefault();

      let createArticlePlace = document.querySelector('.site-content main section');
      let createArticle = document.createElement('article');
      createArticlePlace.appendChild(createArticle);


      let createH1 = document.createElement('h1');
      createArticle.appendChild(createH1);
      createH1.textContent = titleInput.value;

      let createP = document.createElement('p');
      createArticle.appendChild(createP);
      createP.textContent = 'Category:';

      let createStrong = document.createElement('strong');
      createP.appendChild(createStrong);
      createStrong.textContent = categoryInput.value;

      let createP2 = document.createElement('p');
      createArticle.appendChild(createP2);
      createP2.textContent = 'Creator:';

      let createStrong2 = document.createElement('strong');
      createP2.appendChild(createStrong2);
      createStrong2.textContent = authorInput.value;

      let createText = document.createElement('p');
      createArticle.appendChild(createText);
      createText.textContent = contentInput.value;


      let createDivButtons = document.createElement('div');
      createDivButtons.setAttribute('class', 'buttons');
      createArticle.appendChild(createDivButtons);

      let deleteBtn = document.createElement('button');
      deleteBtn.setAttribute('class', 'btn delete');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', deleteClicked);

      let archiveBtn = document.createElement('button');
      archiveBtn.setAttribute('class', 'btn archive');
      archiveBtn.textContent = 'Archive';
      archiveBtn.addEventListener('click', archiveClicked);


      createDivButtons.appendChild(deleteBtn);
      createDivButtons.appendChild(archiveBtn);

      function deleteClicked(e) {
         e.preventDefault();
         e.target.parentNode.parentNode.remove();
      }

      function archiveClicked(e) {
         e.preventDefault();
         let h1 = e.target.parentNode.parentNode.querySelector('h1').textContent;

         let archive = document.querySelector('.archive-section ol');
         let li = document.createElement('li');
         li.textContent = h1;

         archive.appendChild(li)
         e.target.parentNode.parentNode.remove();

         let allLiElements = Array.from(document.querySelectorAll('.archive-section ol li'));
         let res = allLiElements.sort((a, b) => a.textContent.localeCompare(b.textContent));

         allLiElements.map(el => el.remove());
         res.map(el => archive.appendChild(el));

      }

   }

}
