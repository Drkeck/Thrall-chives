// this will be filled in later
const menu = document.getElementById('menu');
const page1 = document.getElementById('main-page');

function eventhandler (event) {
    event.preventDefault()  
    var id = event.target.id;
    let text;
    let html;
    switch (id) {
        case "post":
            text = "New Client";
            html = "<h2 class='title-secondary'>Client Info Form</h2>"
            break;
        case "get":
            text = "Find Client";
            html = "<h2 class='title-secondary'>Finding Client...</h2>"
            break
        case "exit":
            console.log('this will exit the application');
            break
        case "mini":
            //add minimization
            console.log('this will minimize the application');
            break
    }
    //text.
    if (!text) {return}
    page1.innerHTML = '<h1 class="title-main">' + text + '</h1>' + html;

}

addEventListener('click', eventhandler);