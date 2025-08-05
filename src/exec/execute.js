import { execSync } from 'child_process'


console.log( execSync(`ls -1a`) );
