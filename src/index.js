async function eventhandler (event) {
    event.preventDefault()  
    var id = event.target.id;
    let result;
    switch (id) {
        case "post":
            result = await window.api.send("toMain", "new Client page");
            console.log(result)
            break;
        case "get":
            window.api.send("toMain", "Find Client");
            break
        case "exit":
            window.api.send("toMain", "Close");
            break
        case "mini":
            window.api.send("toMain", "Minimize");
            break
    };

}

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