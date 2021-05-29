const app = document.getElementById('main-page')
console.log(app)
async function eventhandler (event) {
    event.preventDefault()
    var id = event.target.id;
    switch (id) {
        case "post":
            // window.api.send("toMain", "newClient");
            let result = window.api.form()
            console.log(result)
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
    // console.log(result)
}


addEventListener('click', eventhandler);