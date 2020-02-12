    //working with os module 
const os=require('os');
var totalmemory=os.totalmem();
var freememory=os.freemem();

console.log("The total memory of system is :"+totalmemory+" "+"Free memory of the system is :"+freememory);
console.log(`Total memory:${totalmemory}`);// in this wqy we can print string without concate
console.log(`Free memory:${freememory}`);