const path = require('path');
const fs = require('fs');
const root = fs.readdirSync('/')

const { app, BrowserWindow, ipcMain } = require('electron');
const { resolve } = require('path');
const { rejects } = require('assert');
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
    const contents = win.webContents;
    contents.openDevTools();
};
// trying to set up ipc main on this being outside of the app creation.
ipcMain.on("toMain", (event, args) => {
    // log what the args say just so we know what is being asked of the application.
    console.log(args);
    // switch statement to hopefully get the right button presses.
    switch (args) {
        case "Close":
            app.quit();
            break
        case "Minimize":
            app.hide();
            break
    }


    // fs.readFile("path/to/file", (error, data) => {
    //   // Do something with file contents
    
    //   // Send result back to renderer process
    //   win.webContents.send("fromMain", responseObj);
    // })
});

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


