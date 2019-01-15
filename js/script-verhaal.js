var filter = document.querySelector('body>form input:nth-of-type(3)');
var form = document.querySelector('body>form');
var search = document.querySelector('header span button');
var searchForm = document.querySelector('body header>form');
var closeButton = document.querySelector('body header>form fieldset button');
var read = document.querySelector('body>form input:nth-of-type(2)');
var genre = document.querySelector('body>form input:nth-of-type(1)');
var verrasMe = document.querySelector('body>form input:nth-of-type(4)');
var likeButton = document.querySelectorAll('main section article footer li:nth-of-type(2) button');
var downloadButton = document.querySelectorAll('main section article footer li:last-of-type button');
var downloadArray = Array.from(downloadButton);
var downloadNumber = document.querySelector('div header span a p');
var downloadGetal = parseInt(downloadNumber.innerText);

function verrasMeSubmit() {
    form.action = 'index-verrasme.html';
    form.submit();
}

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

verrasMe.addEventListener('click', verrasMeSubmit);
genre.addEventListener('click', genreSubmit);
read.addEventListener('click', readSubmit);
filter.addEventListener('click', formSubmit);
search.addEventListener('click', zoeken);
closeButton.addEventListener('click', zoeken);


// requestAnimationFrame
function movement(depassage) {
    var rawtxt = depassage.innerHTML;
    var len = rawtxt.length;

    var newtext = '';

    for (var i = 0; i < len; i++) {
        var rng = Math.floor(Math.random() * 5) + 1;

        var currentchar = rawtxt.charAt(i);
        if (currentchar == ' ') {
            var newchar = '<span class="space"></span>';
        } else {
            var newchar = '<span class="effect' + rng + '">' + currentchar + '</span>';
        }
        newtext = newtext + newchar;
        depassage.innerHTML = newtext;
    }

}

var passage0 = document.querySelector('body.story > main > section > article p span');
movement(passage0);


var titelParts = document.querySelectorAll('svg > g > *');
var titel = document.querySelector('svg');

var tijdlijn = new TimelineMax({repeat:-1, paused:false, yoyo:true});

tijdlijn.staggerTo(
  titelParts,
  0.15,
  {
    //scale: 1.5,
    //rotation: 360,
    opacity: 1,
    transformOrigin: '50% 50%',
    ease: Elastic.easeOut.config(1, 0.3)
  },
  0.05
);

var titelPartsMobiel = document.querySelectorAll('svg#klumperbevenMobiel > g > *');
var titelMobiel = document.querySelector('svg#klumperbevenMobiel');

var tijdlijnMobiel = new TimelineMax({repeat:-1, paused:false, yoyo:true});

tijdlijnMobiel.staggerTo(
  titelPartsMobiel,
  0.15,
  {
    //scale: 1.5,
    //rotation: 360,
    opacity: 1,
    transformOrigin: '50% 50%',
    ease: Elastic.easeOut.config(1, 0.3)
  },
  0.05
);


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


