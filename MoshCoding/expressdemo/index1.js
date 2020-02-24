const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

//to use logger module 
const logger = require('./logger.js');

//to user logger function
app.use(logger);  //custom middle ware fuction to user in our express

//express already have so many middle ware function i.e called encoded as well
app.use(express.urlencoded({extended:true}));  //key=value&&key=value
//this one populate that body and make it like req.body

//to use static acces ex css and html pages or static files related to project can be used here
app.use(express.static('public')); //thing inside the public folder can be used directly
//now check localhost:3000/readmeFile.txt


const courses = [
    { id: 1, name: 'Action' },  
    { id: 2, name: 'Horror' },  
    { id: 3, name: 'Romance' },  
  ];

app.post('/api/courses',(req,res)=>{
const {error} = validateCourse(req.body);
if(error) res.status(400).send(error.details[0].message);

const course ={
    id:courses.length+1,
    name:req.body.name
};
courses.push(course);
res.send(course);

});

function validateCourse(course){
    const schema ={
        name:Joi.string().min(3).required()
    };
    return Joi.validate(course,schema);
}
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));