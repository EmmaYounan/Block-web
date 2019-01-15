var search = document.querySelector('header span button');
var searchForm = document.querySelector('body header>form');
var closeButton = document.querySelector('body header>form fieldset button');
var likeButton = document.querySelectorAll('main section article footer li:first-of-type button');

function zoeken(e) {
    e.preventDefault();
    searchForm.classList.toggle('zoeken');
}

search.addEventListener('click', zoeken);
closeButton.addEventListener('click', zoeken);

for (var i = 0; i < likeButton.length; i++) {
    likeButton[i].addEventListener('click', function () {
        this.classList.toggle('animation');
        var likelabel = this.nextElementSibling;
        var likes = parseInt(likelabel.innerText);
        if (this.classList.contains('animation')) {
            likes = likes + 1;
            likelabel.textContent = likes;
        } else {
            likes = likes - 1;
            likelabel.textContent = likes;
        }
    });
}



