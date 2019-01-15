var infoTextOne = document.querySelector ('body.introductie > section:first-of-type p:first-of-type');
var infoTextTwo = document.querySelector ('body.introductie > section:first-of-type p:last-of-type');
var imgInfo = document.querySelector('body.introductie > section:first-of-type img');
var meerInfo = document.querySelector('body.introductie > section:first-of-type button');
var introForm = document.querySelector('body.introductie > form');
var situation = 1;


function changeInfo() {
    if (situation == 1) {
        infoTextOne.textContent = 'Door de verhalen te downloaden,';
        infoTextTwo.textContent = 'kunt u ze offline lezen. U kunt de gedownloade verhalen terug vinden in uw profiel pagina';
        imgInfo.src = 'images/intro-download.gif';
        situation = 2;
        return situation;
    }

      if (situation == 2) {
        infoTextOne.textContent = 'Highlight functie, door gaan met lezen,';
        infoTextTwo.textContent = 'Je hebt een verhaal niet afgelezen! U kunt een stukje tekst of een woord highlighten zodat je niet vergeet waar je gestopt bent.';
        imgInfo.src = 'images/highligh.gif';
        situation = 3;
        return situation;
    }

    else if (situation == 3) {
        infoTextOne.textContent = 'De verhalen website is ons cadeau voor u,';
        infoTextTwo.textContent = 'hopelijk geeft ons verhalen website u een WOW gevoel. Fijne reis';
        imgInfo.src = 'images/gift.gif';
        meerInfo.innerHTML = 'Verhalen website';
        situation = 4;
        return situation;
    }

    else if (situation == 4) {
        introForm.action = 'index-one.html';
        introForm.submit();
    }
}
meerInfo.addEventListener('click', changeInfo);
