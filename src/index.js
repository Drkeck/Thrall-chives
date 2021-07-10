const app = document.getElementById('main-page')
const errorBox = document.getElementById('err-box')
const backButton = document.getElementById('back')

let folder = "home";

async function validChannels (id) {
    var info;
    switch (id) {
        case "post":
            info ="newClient"
            folder = "home/newClientForm"
            break
        case "get":
            info = "Client"
            folder = "home/clients/" + "--sampleUser--" 
            break
        case "exit":
            info = "exit"
            break
        case "mini":
            info = "minimize"
            break
        case "back":
            info = "back"
            break
        case "home":
            info = "home"
            folder = "home"
            break
        default:
            // this is where we turn off the error display.
    }
    return info
}

async function sendMessage (note) {
    if (!note) {
        return
    }
    window.api.send("toMain", note)
}

async function eventhandler (event) {
    event.preventDefault()
    var id = event.target.id;
    validChannels(id)
    .then(res => {
        if (!res) { return }
        sendMessage (res)
    })
}


addEventListener('click', eventhandler);
sendMessage("home");

window.api.receive("fromMain", response => {
    if (response === "Denied") {
        // errorBox.class = "system-err"
        return
    } else if (folder != "home") {
        backButton.classList = "on button";
    }
    console.log(response)
    return app.innerHTML = response
})

window.api.receive("error", response => {
    errorBox.classList = "system-err"
});