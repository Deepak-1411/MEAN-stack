//to set the env variable and can be used while creating the listner
const express= require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("hello response from the get request");

});
app.get('/api/courses',(req,res)=>{
res.send([1,2,3,4]);
});
 //instead of proving port number we can set according to the env of the variable

 //ports set up
const port= process.env.PORT ||3000;

app.listen(port,()=>{
    console.log(`listning to the...${port}`);
});

//to set the env variable from the command promt export PORT=5000