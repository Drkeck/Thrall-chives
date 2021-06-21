const path = require('path');
const fs = require('fs');
const root = fs.readdirSync('/')

// server connection.
const client = require('./server-side/connection/connection.js')

const { app, BrowserWindow, ipcMain } = require('electron');
const routeManager = require('./server-side/Routes');
require('electron-reload')(__dirname)


//this creates the browser window, and its parameters. 
async function createBrowserWindow() {
    let tree = { home:{}};
    const win = new BrowserWindow({
        show: false,
        width: 1000,
        height: 800,
        autoHideMenuBar: true,
        frame: false,
        title: "Thrall-chives",
        webPreferences: {
            nodeIntegration: false, // is default value after Electron v5
            contextIsolation: true, // protect against prototype pollution
            enableRemoteModule: false, // turn off remote
            preload: path.join(__dirname, "preload.js") // use a preload script
        }
    });

    win.once('ready-to-show', () => win.show());
    win.loadFile('src/index.html');
    const contents = win.webContents;
    contents.openDevTools();
    client.connect()



    contents.on('did-finish-load', function(){ 
        ipcMain.on("toMain", async (event, args) => {
            switch (args) {
                case "minimize":
                    win.minimize()
                    break
                case "exit":
                    app.quit()
                    break
                default:

                    await routeManager(args, tree)
                        .then(response => {
                            if (!response) {
                                return
                            }
                            if (response === "back") {
                                win.loadFile('src/index.html')
                                return
                            }
                            event.sender.send("fromMain", response)
                        })
                        .catch(err => {
                            console.log(err)
                            event.sender.send("from main", err);
                        })
            }
        })
        // this will restore the app when it is reopened.
        app.on("Restore", () => {
            win.restore();
        })
    })
};

//this will be run when the app is started and calls the window creation function.
app.whenReady().then(() => {
    createBrowserWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
            console.log(root);
          }
        })
    });
    
    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
          app.quit()
    }
});


