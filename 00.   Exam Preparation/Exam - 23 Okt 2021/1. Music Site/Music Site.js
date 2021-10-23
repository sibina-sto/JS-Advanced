function solve() {
    const buttonAdd = document.getElementById('add-btn');
    buttonAdd.addEventListener('click', addSong);
 
    function addSong(e) {
        e.preventDefault();
 
        const collection = document.getElementsByClassName('all-hits-container')[0];
 
        const inputGenre = document.getElementById('genre');
        const inputName = document.getElementById('name');
        const inputAuthor = document.getElementById('author');
        const inputDate = document.getElementById('date');
 
        if (inputGenre.value !== '' && inputName.value !== '' && inputAuthor.value !== '' && inputDate.value !== '') {
 
            const song = document.createElement('div');
            song.classList.add('hits-info');
            song.innerHTML = `
            <img src="./static/img/img.png">
            <h2>Genre: ${inputGenre.value}</h2>
            <h2>Name: ${inputName.value}</h2>
            <h2>Author: ${inputAuthor.value}</h2>
            <h3>Date: ${inputDate.value}</h3>
            <button class="save-btn">Save song</button>
            <button class="like-btn">Like song</button>
            <button class="delete-btn">Delete</button>`;
 
            const [buttonSave, buttonLike, buttonDelete] = song.querySelectorAll('button');
            buttonSave.addEventListener('click', funcSave);
            buttonLike.addEventListener('click', funcLike);
            buttonDelete.addEventListener('click', funcDelete);
 
            collection.appendChild(song);
 
            inputGenre.value = '';
            inputName.value = '';
            inputAuthor.value = '';
            inputDate.value = '';
        }
    }
 
    function funcSave(e) {
        const saved = document.getElementsByClassName('saved-container')[0];
        const song = e.target.parentElement;
        const [buttonSave, buttonLike, buttonDelete] = song.querySelectorAll('button');
        buttonSave.remove();
        buttonLike.remove();
        saved.appendChild(song);
    }
 
    function funcLike(e) {
        const likes = document.querySelector("#total-likes > div > p");
        let count = Number(likes.textContent.split(':')[1].trim());
        count++;
        likes.textContent = `Total Likes: ${count}`
 
        e.target.disabled = true;
    }
 
    function funcDelete(e) {
        e.target.parentElement.remove();
    }
}
