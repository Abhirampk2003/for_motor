const { contextBridge } = require('electron');
const backend = require('./backend');

contextBridge.exposeInMainWorld('api', {
  startMotor: () => backend.sendCommand('START_MOTOR')
});
