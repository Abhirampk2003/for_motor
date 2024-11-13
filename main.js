const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const backend = require('./backend'); // Import the backend module

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 400,
    height: 300,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  mainWindow.loadFile('index.html');
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// Handle start-motor event from frontend
ipcMain.on('start-motor', (event) => {
  console.log('Received start-motor request from frontend');
  
  // Send command to backend (STM32) to start the motor
  backend.sendCommand('START_MOTOR');

  // Send a status update back to the frontend
  event.sender.send('status-update', 'Motor started!');
});
