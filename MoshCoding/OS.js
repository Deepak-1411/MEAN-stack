//to get the info about current operating system
const os =require('os');
var totalmemory=os.totalmem();
var freeMemory=os.freemem();

console.log('totol memory',totalmemory);
console.log('FreeMemory',freeMemory);

console.log(`Totol Memory :${totalmemory}`);
console.log(`Free Memory: ${freeMemory}`);