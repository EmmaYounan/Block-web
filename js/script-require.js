var filter = document.querySelector('body>form input:nth-of-type(3)');
var form = document.querySelector('body>form');
var search = document.querySelector('header span button');
var searchForm = document.querySelector('body header>form');
var closeButton = document.querySelector('body header>form fieldset button');
var read = document.querySelector('body>form input:nth-of-type(2)');
var genre = document.querySelector('body>form input:nth-of-type(1)');
var likeButton = document.querySelectorAll('main section article footer ul li:first-of-type button');
var downloadButton = document.querySelectorAll('main section article footer ul li:last-of-type button')


function formSubmit() {
    form.action = 'index-filter.html';
    form.submit();
}

function readSubmit() {
    form.action = 'index-nietgelezen.html';
    form.submit();
}

function genreSubmit() {
    form.action = 'index-genre.html';
    form.submit();
}

function zoeken(e) {
    e.preventDefault();
    searchForm.classList.toggle('zoeken');
}

genre.addEventListener('click', genreSubmit);
read.addEventListener('click', readSubmit);
filter.addEventListener('click', formSubmit);
search.addEventListener('click', zoeken);
closeButton.addEventListener('click', zoeken);


for (var i = 0; i < likeButton.length; i++) {
    likeButton[i].addEventListener('click', function(){
        this.classList.toggle('animation');
        var likelabel = this.nextElementSibling;
        var likes = parseInt(likelabel.innerText);
        if (this.classList.contains('animation')){
            likes = likes + 1;
            likelabel.textContent = likes;
        }
        else {
            likes = likes - 1;
            likelabel.textContent = likes;
        }
    });
}


for (var i = 0; i < downloadButton.length; i++){
    downloadButton[i].addEventListener('click', function(){
        var melding = this.parentElement.parentElement.nextElementSibling.nextSibling;
        melding.classList.add('show');
        setTimeout(function(){
            melding.classList.remove('show');
        }, 3000)

    })
}












