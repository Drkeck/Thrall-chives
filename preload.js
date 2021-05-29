const {
  contextBridge,
  ipcRenderer
} = require("electron");
const {clientForm} = require('./src/Javascript');

let validChannels = ["fromMain", "toMain"]
// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld(
  "api", {
  receive: async (channel, func) => {
    if (validChannels.includes(channel)) {
      ipcRenderer.on(channel, async (event, args) => func(args)
      ).then(data => {
        console.log(data)
      })

    }
  },

  send: async (channel, data) => {
    // whitelist channels
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data);
    }
  },

  form: async () => clientForm()
  }
);