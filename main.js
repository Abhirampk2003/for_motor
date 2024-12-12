// const { app, BrowserWindow, ipcMain } = require('electron');
// const path = require('path');
// const backend = require('./backend'); // Import the backend module

// let mainWindow;

// function createWindow() {
//   mainWindow = new BrowserWindow({
//     width: 400,
//     height: 300,
//     webPreferences: {
//       preload: path.join(__dirname, 'preload.js')
//     }
//   });

//   mainWindow.loadFile('index.html');
// }

// app.on('ready', createWindow);

// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') app.quit();
// });

// // Handle start-motor event from frontend
// ipcMain.on('start-motor', (event) => {
//   console.log('Received start-motor request from frontend');
  
//   // Send command to backend (STM32) to start the motor
//   backend.sendCommand('START_MOTOR');

//   // Send a status update back to the frontend
//   event.sender.send('status-update', 'Motor started!');
// });


const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const backend = require('./backend');  // Import the backend module

let mainWindow;

// Create the main window of the application
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

app.on('ready', () => {
  createWindow();

  // Ensure the backend is ready before handling frontend events
  console.log('Electron app started and ready for user interaction');
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// Listen for frontend events and forward them to the backend to control the STM32
ipcMain.on('start-motor', (event) => {
  console.log('Received start-motor request from frontend');
  
  // Call the backend to send the command to STM32
  backend.sendCommand('START_MOTOR');  // This calls the sendCommand function from backend.js

  // Send a status update back to the frontend
  event.sender.send('status-update', 'Motor started!');
});

