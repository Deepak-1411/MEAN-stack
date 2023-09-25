const express= require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("hello response from the get request");

});
app.get('/api/courses',(req,res)=>{
res.send([1,2,3,4]);
});

//end point with the params 
app.get('/api/courses/:year/:month',(req,res)=>{
//res.send(req.params);  //this is a param object
//res.send(req.params.year); //to get param
//queary 
res.send(req.query) ;//we use it for optional


});

const port= process.env.PORT ||3000;

app.listen(port,()=>{
    console.log(`listning to the...${port}`);
});