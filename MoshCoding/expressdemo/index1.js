const Joi = require('joi');
const express = require('express');
const helmet = require('helmet');
const morgan= require('morgan');
const app = express();
const config = require('config');

//to set the env for the modules
//process.env.NODE_ENV 
// console.log(`NODE_ENV:${process.env.NODE_ENV}`); //not set any thing that is why unknown
// console.log(`app:${app.get('env')}`); //by default return development env

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

app.use(helmet());


if(app.get('env')==='development'){
    app.use(morgan('tiny')); //logger module to make logger pretty
    console.log('Morgan  enabled....')
}
//using config file
//configuration
console.log('Application Name:'+config.get('name'));
console.log('Mail Server:'+config.get('mail.host'));
console.log('Mail Password:'+config.get('mail.password'));

//it genrate logger for all your req ,so assume that in production you dont require to see the 
//log details of the application , also it will pe maintain in api pipeline so 
//optimization will be less, so we need to enable only in one env that can be set using the env
//above has set the env variable

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