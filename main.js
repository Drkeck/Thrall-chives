const path = require('path');
const fs = require('fs');
const root = fs.readdirSync('/')

const { app, BrowserWindow, ipcMain } = require('electron');
const { clientForm } = require('./src/Javascript');
require('electron-reload')(__dirname)


//this creates the browser window, and its paramaters. 
async function createBrowserWindow() {
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

    win.loadFile('src/index.html');
    win.once('ready-to-show', () => win.show());
    const contents = win.webContents
    contents.openDevTools();

    contents.on('did-finish-load', function(){ 
        let tree = "home";

        ipcMain.on("toMain", async (event, args) => {
            let data;
            // switch statement so we know what the app is asking for and what to reply with, if its not on this list it is either in the works or was not supposed to be added.
            switch (args) {
                case "Close":
                    app.quit();
                    break
                case "Minimize":
                    win.minimize();
                    break
                case "newClient":
                    data = clientForm();
                    tree = "home/newCli"
                    break
                case "back":
                    newTree = tree.split("/")
                    console.log(newTree)
                default:
                    data = 'Denied'
                    // set up a second html window with its own css that desplays a denied symbol that flashes at the user.
                    break
            }
            event.sender.send("fromMain", data)
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


