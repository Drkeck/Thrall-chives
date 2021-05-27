async function eventhandler (event) {
    event.preventDefault()  
    var id = event.target.id;
    switch (id) {
        case "post":
            window.api.send("toMain", "new Client page")
            break
        case "get":
            window.api.send("toMain");
            break
        case "exit":
            window.api.send("toMain", "Close");
            break
        case "mini":
            window.api.send("toMain", "Minimize");
            break
    }
}

window.api.receive(data => {
    console.log(data)
})

// window.addEventListener("toRender", (e, ...data) => {
//     var id = e
//     console.log(id)
    // var page = document.getElementById('Mmin-page').innerHTML()

    // switch(id) {
    //     case "Client Page":
    //         page = data;
    //         break
    //     case "Client Finder":
    //         page = data;
    //         break
    // }

// });


addEventListener('click', eventhandler);