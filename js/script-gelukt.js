var form = document.querySelector('body.gelukt > form');
console.log(form);

function formSubmit() {
    setTimeout(function() {
        form.action = 'index-two.html';
        form.submit();
    },2000);
}

window.addEventListener('load', formSubmit);
