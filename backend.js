// const { SerialPort } = require('serialport');
// const { ReadlineParser } = require('@serialport/parser-readline'); // Correct parser import

// // Configure serial port for STM32 (only one port is needed for communication with STM32)
// const stm32Port = new SerialPort({
//   path: '/dev/ttyUSB1',  // STM32 serial port path
//   baudRate: 9600
// });

// // Set up parser for STM32
// const stm32Parser = stm32Port.pipe(new ReadlineParser({ delimiter: '\r\n' }));

// // Send a command to STM32
// function sendCommand(command) {
//   console.log(`Sending command to STM32: ${command}`);
//   stm32Port.write(command + '\n', (err) => {
//     if (err) {
//       console.error('Error sending command to STM32:', err);
//     }
//   });
// }

// // Handle incoming data from STM32
// stm32Parser.on('data', (data) => {
//   console.log(`Received from STM32: ${data}`);
//   // Send data to frontend (via IPC) after receiving it from STM32
//   mainWindow.webContents.send('status-update', data);  // Send to Electron frontend
// });

// // Handle incoming data from frontend (via IPC)
// const { app, BrowserWindow, ipcMain } = require('electron');
// let mainWindow;

// app.on('ready', () => {
//   mainWindow = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       preload: path.join(__dirname, 'preload.js')  // Ensure preload.js is set
//     }
//   });

//   mainWindow.loadFile('index.html');
// });

// // Listen for frontend messages to trigger actions like starting the motor
// ipcMain.on('start-motor', (event) => {
//   sendCommand('START_MOTOR');
// });

// // Error handling for serial port
// stm32Port.on('error', (err) => {
//   console.error('STM32 port error:', err);
// });

// // Log when the serial port opens successfully
// stm32Port.on('open', () => {
//   console.log('STM32 serial port opened');
// });



// const { SerialPort } = require('serialport');
// const { ReadlineParser } = require('@serialport/parser-readline');

// // Configure serial port for UART
// const stm32Port = new SerialPort({
//   path: '/dev/serial0',  // Update with your UART device path
//   baudRate: 9600
// });

// // Set up parser for UART communication
// const stm32Parser = stm32Port.pipe(new ReadlineParser({ delimiter: '\r\n' }));

// // Send a command to STM32
// function sendCommand(command) {
//   console.log(`Sending command to STM32: ${command}`);
//   stm32Port.write(command + '\n', (err) => {
//     if (err) {
//       console.error('Error sending command to STM32:', err);
//     }
//   });
// }

// // Handle incoming data from STM32
// stm32Parser.on('data', (data) => {
//   console.log(`Received from STM32: ${data}`);
//   // Send data to frontend (via IPC)
//   mainWindow.webContents.send('status-update', data);
// });

// // Electron setup
// const { app, BrowserWindow, ipcMain } = require('electron');
// let mainWindow;

// app.on('ready', () => {
//   mainWindow = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       preload: path.join(__dirname, 'preload.js')
//     }
//   });

//   mainWindow.loadFile('index.html');
// });

// // Listen for frontend messages to trigger actions
// ipcMain.on('start-motor', (event) => {
//   sendCommand('START_MOTOR');
// });

// // Error handling for serial port
// stm32Port.on('error', (err) => {
//   console.error('UART port error:', err);
// });

// // Log when the serial port opens successfully
// stm32Port.on('open', () => {
//   console.log('UART port opened');
// });



// const { SerialPort } = require('serialport');
// const { ReadlineParser } = require('@serialport/parser-readline');

// // Configure the serial port for UART communication with STM32
// const stm32Port = new SerialPort({
//   path: '/dev/serial0',  // Update with your actual serial port path (e.g., /dev/ttyUSB1 on Linux)
//   baudRate: 9600
// });

// // Set up parser to read data from STM32
// const stm32Parser = stm32Port.pipe(new ReadlineParser({ delimiter: '\r\n' }));

// // Function to send commands to STM32
// function sendCommand(command) {
//   console.log(`Sending command to STM32: ${command}`);
//   stm32Port.write(command + '\n', (err) => {
//     if (err) {
//       console.error('Error sending command:', err);
//     }
//   });
// }

// // Handle any errors with the serial port
// stm32Port.on('error', (err) => {
//   console.error('UART port error:', err);
// });

// // Log when the UART port opens successfully
// stm32Port.on('open', () => {
//   console.log('UART port opened');
// });

// // Handle incoming data from STM32 and print it to the console
// stm32Parser.on('data', (data) => {
//   console.log(`Received from STM32: ${data}`);
//   // Optionally send the data back to the Electron frontend (if needed)
//   // mainWindow.webContents.send('status-update', data); // Uncomment if you want this
// });

// module.exports = { sendCommand };







// const { SerialPort } = require('serialport');
// const { ReadlineParser } = require('@serialport/parser-readline'); // Correct parser import

// // Configure serial port for STM32 (only one port is needed for communication with STM32)
// const stm32Port = new SerialPort({
//   path: '/dev/ttyUSB1',  // STM32 serial port path
//   baudRate: 9600
// });

// // Set up parser for STM32
// const stm32Parser = stm32Port.pipe(new ReadlineParser({ delimiter: '\r\n' }));

// // Send a command to STM32
// function sendCommand(command) {
//   console.log(`Sending command to STM32: ${command}`);
//   stm32Port.write(command + '\n', (err) => {
//     if (err) {
//       console.error('Error sending command to STM32:', err);
//     }
//   });
// }

// // Handle incoming data from STM32
// stm32Parser.on('data', (data) => {
//   console.log(`Received from STM32: ${data}`);
//   // Send data to frontend (via IPC) after receiving it from STM32
//   mainWindow.webContents.send('status-update', data);  // Send to Electron frontend
// });

// // Handle incoming data from frontend (via IPC)
// const { app, BrowserWindow, ipcMain } = require('electron');
// let mainWindow;

// app.on('ready', () => {
//   mainWindow = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       preload: path.join(__dirname, 'preload.js')  // Ensure preload.js is set
//     }
//   });

//   mainWindow.loadFile('index.html');
// });

// // Listen for frontend messages to trigger actions like starting the motor
// ipcMain.on('start-motor', (event) => {
//   sendCommand('START_MOTOR');
// });

// // Error handling for serial port
// stm32Port.on('error', (err) => {
//   console.error('STM32 port error:', err);
// });

// // Log when the serial port opens successfully
// stm32Port.on('open', () => {
//   console.log('STM32 serial port opened');
// });



const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');

// Configure serial port for UART
const stm32Port = new SerialPort({
  path: '/dev/serial0',  // Update with your UART device path
  baudRate: 9600
});

// Set up parser for UART communication
const stm32Parser = stm32Port.pipe(new ReadlineParser({ delimiter: '\r\n' }));

// Send a command to STM32
function sendCommand(command) {
  console.log(`Sending command to STM32: ${command}`);
  stm32Port.write(command + '\n', (err) => {
    if (err) {
      console.error('Error sending command to STM32:', err);
    }
  });
}

// Handle incoming data from STM32
stm32Parser.on('data', (data) => {
  console.log(`Received from STM32: ${data}`);
  // Send data to frontend (via IPC)
  mainWindow.webContents.send('status-update', data);
});

// Electron setup
const { app, BrowserWindow, ipcMain } = require('electron');
let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  mainWindow.loadFile('index.html');
});

// Listen for frontend messages to trigger actions
ipcMain.on('start-motor', (event) => {
  sendCommand('CMD_Motor_home');
});

// Error handling for serial port
stm32Port.on('error', (err) => {
  console.error('UART port error:', err);
});

// Log when the serial port opens successfully
stm32Port.on('open', () => {
  console.log('UART port opened');
});

