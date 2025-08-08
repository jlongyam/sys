import Executor from "../../src/Executor.js";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = new Executor();
const target = {
  file: __dirname+'/mock/file.html',
  opener: 'zed'
}

await app.openWith(target.file, target.opener);