const EventEmitter = require('events');
const emitter = new EventEmitter();

//register a listner
emitter.on('messageLogged',function(arg){
console.log('Listner called');
});




//raise an emitted pass multiple arguments
emitter.emit('MessageLogged',{id:'1',url:'https://'});