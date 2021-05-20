// this will be filled in later
const menu = document.getElementById('menu');
const page1 = document.getElementById('main-page');

function eventhandler (event) {
    event.preventDefault()
    var target = event.target.id
    if (target === "menu") {
        page1.innerHTML = "<h1 class='title-main'></h1>";
    }   
}

addEventListener('click', eventhandler);