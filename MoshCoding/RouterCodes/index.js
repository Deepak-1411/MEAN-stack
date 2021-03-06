const express = require('express');
const app = express();

app.use(express.json())
 var courses= [
    {id:1 , name:"Rush"},
    {id:2 , name:"happy"},
    {id:3 , name:"Tiger"}
];


app.get('/',(req,res)=>{
res.send("Hello world!");
});

app.get('/api/courses',(req,res)=>{
    res.send(courses);
    });

app.get('/api/courses/:id',(req,res)=>{
    let course=courses.find(c=>c.id===parseInt(req.params.id))
    
    if(!course) res.status(404).send("course with given id not found")
    res.send(course)
        });

app.post('/api/courses',(req,res)=>{
       const course={
           id : courses.length + 1,
           name :req.body.name
       };
       courses.push(course);
       res.send(course);
})

const port=process.env.PORT || 3000 ;

app.listen(port,()=>{
    console.log(`Listning to port ${port}`)
    
})