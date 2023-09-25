//explantion about debug in nodejs
const morgan = require('morgan');
const express = require('express');
const app = express();
const startupDebugger = require('debug')('app:startup');
const dbDebugger=require('debug')('app:db');


if(app.get('env')==='development'){
    app.use(morgan('tiny'));
 //   console.log("Morgan enabled...");
startupDebugger("Morgan enabled...");
}
//db work...

dbDebugger('connected to the database...');
//we can set from terminal that which debug we want to run 
//ex  setDEBUG=app:startup,app:db , This one is for both
//wecan set env vraible whiilerunning the commnd
//Ex::DEBUG=app:db nodemon index.js

const port =process.env.PORT||3000;
app.listen(port,()=>console.log(`Listening on port ${port}...`));