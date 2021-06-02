const {
  contextBridge,
  ipcRenderer
} = require("electron");

// set valid channels for the app to be using, no others will go through.
let validChannels = ["fromMain", "toMain"]

// Expose protected methods that allow the renderer process to use

// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld(
  "api", {
  receive: async (channel, func) => {
    if (validChannels.includes(channel)) {
      ipcRenderer.on(channel, async (event, args) => func(args)
      )
    }
  },

  send: async (channel, data) => {
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data);
    }
  },
}
);