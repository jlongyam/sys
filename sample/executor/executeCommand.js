import Executor from "../../src/Executor.js";

const shell = new Executor();

console.log(await shell.executeCommand(`echo HI`))
