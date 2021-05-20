// this will be filled in later
const menu = document.getElementById('menu');

function eventhandler (event) {
    event.preventDefault()
    var target = event.target.id
    if (target === "menu") {
        console.log("JOB DONE!")
    }
}

addEventListener('click', eventhandler);