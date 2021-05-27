async function eventhandler (event) {
    event.preventDefault()  
    var id = event.target.id;
    switch (id) {
        case "post":
            var result = await window.api.send("toMain", "newClient");
            break
        case "get":
            var result = await window.api.send("toMain", "findClient");
            break
        case "exit":
            window.api.send("toMain", "Close");
            break
        case "mini":
            window.api.send("toMain", "Minimize");
            break
    }
}

// result = window.api.receive();
// console.log(result)
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