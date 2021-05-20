// this will be filled in later
const menu = document.getElementById('menu');
const page1 = document.getElementById('main-page');

function eventhandler (event) {
    event.preventDefault()  
    var id = event.target.id;
    let text;
    switch (id) {
        case "post":
            text = "New Client Info";
            break;
        case "get":
            text = "Find Existing Client";
            break
    }
    //text.
    if (!text) {return}
        page1.innerHTML = '<h2 class="title-main">' + text + '</h2>';   
}

addEventListener('click', eventhandler);