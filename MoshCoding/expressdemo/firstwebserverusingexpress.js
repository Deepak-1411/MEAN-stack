const express=require('express');

const app = express();

// app.get();
// app.post();
// app.put();
// app.delete();

app.get('/',function(req,res){
    res.send("Hello reponse of get request");
});
app.get('/api/courses',(req,res)=>{
res.send([1,2,3,4]);
});
app.listen(3000,()=>{
    console.log("listing on port 3000...");
});

///run using the nodemon firtswebserviceusingexpress.js
//it will manage server restart ,it will automatically 
//dont need to restart after code change

