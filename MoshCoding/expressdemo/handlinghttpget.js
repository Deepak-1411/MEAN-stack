const express= require('express');
const app = express();
const Joi =require('joi');
app.use(express.json());

//creating const courses object
const courses =[
    {id:1,name:'course1'},
    {id:2,name:'course2'},
    {id:3,name:'course3'},
    ];




app.get('/',(req,res)=>{
    res.send("hello response from the get request");

});
app.get('/api/courses',(req,res)=>{
res.send(courses);
});

//adding id parameter
app.get('/api/courses/:id',(req,res)=>{
//res.send(req.query);
 //logic to find the specific course
 let course=courses.find(c=>c.id===parseInt(req.params.id));
 if(!course) res.status(404).send('The course with the given id is not found');
 res.send(course);
});


//code to create the http post request
app.post('/api/courses/',(req,res)=>{
//always provide the input validation befor providing response
// if(!req.body.name ||req.body.name.length<3){
//     res.status(400).send("Name is required and should be minimum 3 character");
//     return;
// } valiation without joi
//there is a package available name as joi that can be used to 
//validate the input of the req to make below code easy
//with using joi validation the input 
const schema={
    //below code we are validating the using joi 
    //that name should be a string and should have the minimum 3 digits and a required from body
    name:Joi.String().min(3).required();
  
};
var result =Joi.validate(req.body,schema);
console.log(result);

const course ={
    id : courses.length+1,
    name :req.body.name 
};



courses.push(course);
res.send(course);
});

const port= process.env.PORT ||3000;

app.listen(port,()=>{
    console.log(`listning to the...${port}`);
});