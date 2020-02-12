//even emitter codes
 const EventEmitter= require('events')

 const emitter= new EventEmitter();
//register a listner
emitter.on('messagelogged',(args)=>{
    console.log("Listner called",args)
});


  //raise an event
 emitter.emit('messagelogged',{id:1 , url:'https://www.google.com'});
