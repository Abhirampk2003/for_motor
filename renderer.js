const { ipcRenderer } = require('electron');

// Get elements from the UI
const startButton = document.getElementById('startButton');
const statusElement = document.getElementById('status');

// Set up the start button click event
startButton.addEventListener('click', () => {
    console.log('Start button clicked');
    ipcRenderer.send('start-motor'); // Send message to backend to start the motor
});

// Listen for updates from the backend
ipcRenderer.on('status-update', (event, status) => {
    console.log(`Received status: ${status}`);
    statusElement.textContent = `Status: ${status}`;
});
