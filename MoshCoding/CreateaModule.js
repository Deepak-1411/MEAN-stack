//creation of the log function for logging and export this module
var url ='https://mylogger.io/log';

function log(message){
    //send the http request
    console.log(message);
}

module.exports.log=log;
//module.exports.endpoint= url; // this is public visible, not recomended

