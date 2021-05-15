const path = require('path');
const fs = require('fs')
const { app, BrowserWindow } = require('electron');

//this creates the browser window, and its paramaters. 
function createBrowserWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        autoHideMenuBar: true,
        frame: false,
        backgroundColor: '#d1cdb7',
        title: "",
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('index.html')
}

//this will be run when the app is started and calls the window creation function.
app.whenReady().then(() => {
    createBrowserWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
          }
        })
    })
      
    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
          app.quit()
    }
})
