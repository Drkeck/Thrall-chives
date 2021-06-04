const app = document.getElementById('main-page')
const errorBox = document.getElementById('err-box')
const backButton = document.getElementById('back')

let folder = "home";

async function eventhandler (event) {
    event.preventDefault()
    var id = event.target.id;
    var info;
    switch (id) {
        case "post":
            info ="newClient"
            break
        case "get":
            info = "FindClient"
            break
        case "exit":
            info = "Close"
            break
        case "mini":
            info = "Minimize"
            break
        case "back":
            info = "back"
            break
        default:
            // this is where we turn off the error display.

    }
    window.api.send("toMain", info)
}


addEventListener('click', eventhandler);

window.api.receive("fromMain", response => {
    if (response === "Denied") {
        // errorBox.class = "system-err"
        return
    }

    backButton.classList = "on button";
    return app.innerHTML = response
})