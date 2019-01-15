var search = document.querySelector('header span button');
var searchForm = document.querySelector('body header>form');
var closeButton = document.querySelector('body header>form fieldset button');


function zoeken(e) {
    e.preventDefault();
    searchForm.classList.toggle('zoeken');
}


search.addEventListener('click', zoeken);
closeButton.addEventListener('click', zoeken);

