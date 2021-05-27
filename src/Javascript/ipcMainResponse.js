const { ipcMain } = require('electron')

async function respond (event, data) {
    console.log(data)
    const channel = "fromMain"
    event.sender.send(channel, data)
}

module.exports = respond