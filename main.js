const path = require('path');
const fs = require('fs');
const root = fs.readdirSync('/')

const { app, BrowserWindow } = require('electron')
require('electron-reload')(__dirname)


//this creates the browser window, and its paramaters. 
function createBrowserWindow() {
    const win = new BrowserWindow({
        show: false,
        width: 1000,
        height: 800,
        autoHideMenuBar: true,
        frame: false,
        title: "Thrall-chives",
        webPreferences: {
            preload: path.join(app.getAppPath(), 'preload.js'),
            contextIsolation: true,
        }
    });

    win.loadFile('src/index.html');
    win.once('ready-to-show', () => win.show())
    win.webContents.openDevTools();
    window.electron.doAThing()

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
