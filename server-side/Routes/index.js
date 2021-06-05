const clientForm = require('./newClientForm.js');
const profile = require('./Profile.js');

async function routeManager (args) {
    
    switch (args) {
        case "newClient":
            //thing
            return clientForm()
        case "Profile":
        case "FindClient":
            //thing
            return profile()
        case "back":
            //thing
            return "back"
        default:
            return
    }

}
module.exports = routeManager