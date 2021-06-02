const app = document.getElementById('main-page')
const errorBox = document.getElementById('err-box')

let folder = "home";

async function eventhandler (event) {
    event.preventDefault()
    var id = event.target.id;
    switch (id) {
        case "post":
            window.api.send("toMain", "newClient");
            break
        case "get":
            window.api.send("toMain", "findClient");
            break
        case "exit":
            window.api.send("toMain", "Close");
            break
        case "mini":
            window.api.send("toMain", "Minimize");
            break
    }
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