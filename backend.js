const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline'); // Correct way to import ReadlineParser

// Configure serial ports for frontend (GUI) and STM32
const frontendPort = new SerialPort({
  path: '/dev/ttyUSB0',  // Replace with the correct frontend port
  baudRate: 9600
}); // Updated syntax for serialport >= 10.x

const stm32Port = new SerialPort({
  path: '/dev/ttyUSB1',  // Replace with STM32 serial port path
  baudRate: 9600
}); // Updated syntax for version 10.x or later

// Set up parsers for both serial ports
const frontendParser = frontendPort.pipe(new ReadlineParser({ delimiter: '\r\n' }));
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
  // Send data to frontend (LCD or touchscreen) after receiving it from STM32
  frontendPort.write(`STM32 Status: ${data}\n`, (err) => {
    if (err) {
      console.error('Error sending data to frontend:', err);
    }
  });
});

// Handle incoming data from frontend
frontendParser.on('data', (data) => {
  console.log(`Received from frontend: ${data}`);
  
  if (data === 'START_MOTOR') {
    sendCommand('START_MOTOR');
  }
  // You can add more commands here as needed
});

// Error handling for serial ports
frontendPort.on('error', (err) => {
  console.error('Frontend port error:', err);
});

stm32Port.on('error', (err) => {
  console.error('STM32 port error:', err);
});

// Log when the serial ports open successfully
frontendPort.on('open', () => {
  console.log('Frontend serial port opened');
});

stm32Port.on('open', () => {
  console.log('STM32 serial port opened');
});

// Example function to show start button on touchscreen (this can be adapted to your touchscreen)
function displayStartButton() {
  console.log('Displaying start button on screen...');
  // Add code to interact with touchscreen here, e.g., using exec to show an image on the screen
}

module.exports = {
  sendCommand,
  displayStartButton
};
