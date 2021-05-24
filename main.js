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

    ipcMain.on("toMain", (event, args) => {
        console.log(event, args);
        const writeFile = fileContent => {
            return new Promise((resolve, reject) => {
                fs.writeFile('./genNotes.MD', fileContent, err => {
                      if (err) {
                          reject(err);
                          return;
                    }
                    resolve({
                        ok:   true,
                        message: 'readme created' 
                    })
                }) 
            })
        }        
        writeFile(data)
              .then( fileData => {
                  let responseObj = fileData
                  return responseObj
                })

        // fs.readFile("path/to/file", (error, data) => {
        //   // Do something with file contents
        
        //   // Send result back to renderer process
          win.webContents.send("fromMain", responseObj);
        // })
    });
});


