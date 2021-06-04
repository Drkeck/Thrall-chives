const clientForm = require('./newClientForm');
const profile = require('./profile')
function routeManager (args) {
    
    switch (args) {
        case "newClient":
            //thing
            return clientForm()
        case "profile":
            //thing
            return profile()
        case "back":
            //thing
            console.log('working on it')
            return "working on it"
        default:
            return
    }

}
module.exports = routeManager