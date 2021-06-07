const homeList = require('./Homelist.js');
const clientForm = require('./newClientForm.js');
const profile = require('./Profile.js');

async function routeManager (args, tree) {
    console.log(tree)
    switch (args) {
        case "newClient":
            tree
            return clientForm()
        case "Profile":
        case "Client":
            //thing
            return profile()
        case "home":
            return homeList()
        case "back":
            return "back"
        default:
            return
    }

}
module.exports = routeManager