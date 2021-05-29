const app = document.getElementById('main-page')
console.log(app)
async function eventhandler (event) {
    event.preventDefault()  
    var id = event.target.id;
    let result
    switch (id) {
        case "post":
            console.log(window.api.form())
            app.innerHTML = window.api.form()
            break
        case "get":
            result = await window.api.send("toMain", "findClient");
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