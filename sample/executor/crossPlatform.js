import Executor from "../../src/Executor.js";
import os from 'os';

const shell = new Executor();

console.log(shell.getDefaultOpenCommand(),'\n');

let result = '';

if (os.platform() === 'win32') {
  result = await shell.executeCommand('dir');
} else {
  result = await shell.executeCommand('ls -1a');
}

console.log(result.stdout.trim())