var filter = document.querySelector('body>form input:nth-of-type(3)');
var form = document.querySelector('body>form');
var search = document.querySelector('header span button');
var searchForm = document.querySelector('body header>form');
var closeButton = document.querySelector('body header>form fieldset button');
var read = document.querySelector('body>form input:nth-of-type(2)');
var genre = document.querySelector('body>form input:nth-of-type(1)');
var verrasMe = document.querySelector('body>form input:nth-of-type(4)');
var likeButton = document.querySelectorAll('main section article footer li:first-of-type button');
var downloadButton = document.querySelectorAll('main section article footer li:last-of-type button');
var downloadArray = Array.from(downloadButton);
var downloadNumber = document.querySelector('div header span a p');
var downloadGetal = parseInt(downloadNumber.innerText);

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

function verrasMeSubmit() {
    form.action = 'index-verrasme.html';
    form.submit();
}

function zoeken(e) {
    e.preventDefault();
    searchForm.classList.toggle('zoeken');
}

genre.addEventListener('click', genreSubmit);
read.addEventListener('click', readSubmit);
filter.addEventListener('click', formSubmit);
verrasMe.addEventListener('click', verrasMeSubmit);
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


downloadArray.forEach((item) => {    
    item.addEventListener('click', () => {
        console.dir(item);
        console.log(downloadNumber);        
        if (item.classList.value == "") {            
            item.classList.add('gif');            
            item.innerHTML = 'Downloaden';            
            setTimeout(function () {                
                item.classList.remove('gif');                
                item.classList.toggle('done');                
                var melding = item.parentNode.parentNode.nextElementSibling.nextSibling;

                                
                if (item.classList.contains('done')) {                    
                    downloadGetal = downloadGetal + 1;                    
                    downloadNumber.textContent = downloadGetal;                    
                    item.innerHTML = 'Gedownload';
                    console.log(melding);                    
                    melding.classList.add('show');                    
                    setTimeout(function () {                        
                        melding.classList.remove('show');                    
                    }, 3000);

                                    
                } else {                    
                    downloadGetal = downloadGetal - 1;                    
                    downloadNumber.textContent = downloadGetal;                    
                    item.innerHTML = 'Download';                
                }

                   
                if (downloadGetal > 0) {
                    console.log('goed', downloadNumber);                
                    downloadNumber.classList.add('showNumber');

                                
                } else if (downloadGetal <= 0) {                
                    downloadNumber.classList.remove('showNumber');
                    console.log('no');            
                }


                            
            }, 2100);


                    
        } else if (item.classList.value == 'done') {            
            item.classList.remove('done');            
            item.classList.remove('gif');            
            item.innerHTML = 'Download';            
            downloadGetal = downloadGetal - 1;            
            downloadNumber.textContent = downloadGetal;

                        
            if (downloadGetal > 0) {
                console.log('goed', downloadNumber);                
                downloadNumber.classList.add('showNumber');

                            
            } else if (downloadGetal <= 0) {                
                downloadNumber.classList.remove('showNumber');
                console.log('no');            
            }

                    
        }


            
    });
});
