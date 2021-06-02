const app = document.getElementById('main-page')
const errorBox = document.getElementById('err-box')

let folder = "home";

async function eventhandler (event) {
    event.preventDefault()
    var id = event.target.id;
    var call;
    switch (id) {
        case "post":
            call ="newClient"
            break
        case "get":
            call = "FindClient"
            break
        case "exit":
            call = "Close"
            break
        case "mini":
            call = "Minimize"
            break
        case "back" :
            // will have the application go back to the other pages.
    }
    window.api.send("toMain", call)
}


addEventListener('click', eventhandler);

window.api.receive("fromMain", response => {
    console.log(response)

    if (response === "Denied") {
        // errorBox.class = "system-err"
        return
    }


    return app.innerHTML = response
})