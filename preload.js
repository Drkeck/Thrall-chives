const {
  contextBridge,
  ipcRenderer
} = require("electron");

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld(
  "api", {
        receive: async (channel, func) => {
            console.log(channel)
            let validChannels = ["fromMain"];
            if (validChannels.includes(channel)) {
                // Deliberately strip event as it includes `sender` 
            const result = ipcRenderer.on(channel, (event, args) => args.forEach(element => {
                return`
                we found this.

                ${element}
                `  
            }));
            console.log(result)
            return result
            }
        },

      send: async (channel, data) => {
          // whitelist channels
          let validChannels = ["toMain"];
          if (validChannels.includes(channel)) {
              ipcRenderer.send(channel, data);
          }
        }
  }
);