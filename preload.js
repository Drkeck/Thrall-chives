window.addEventListener('DOMContentLoaded', () => {
  const { contextBridge, ipcRenderer } = require('electron');

  let currWindow = contextBridge.exposeInMainWorld('electron', {
    doAThing: () => {
      ipcRenderer.invoke('do-a-thing')
    }
  })
  
  window.closeCurrentWindow = function(){
    currWindow.close();
  }

  window.minimizeCurrentWindow = function(){
    currWindow.minimize();
  }
    
})
  