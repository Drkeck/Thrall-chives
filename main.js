const path = require('path');
const fs = require('fs');
const root = fs.readdirSync('/')

const { app, BrowserWindow } = require('electron');

//this creates the browser window, and its paramaters. 
function createBrowserWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        autoHideMenuBar: true,
        frame: false,
        backgroundColor: '#d1cdb7',
        title: "Thrall-chives",
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,
        }
    });

    win.loadFile('src/index.html');

    win.webContents.openDevTools();

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
