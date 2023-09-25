//creating the course router
const express= require('express');
const router = express.Router();   //to use it as router use this router construction;
const Joi = require('joi');

router.get('/',(req,res)=>{
    res.send(courses);
});

router.post('/',(req,res)=>{
const {error}= ValidateCourse(req.body);
if(error) return res.status(400).send(error.details[0].message);
const course={
    id:course.length+1,
    name:req.body.name
};
course.push(course);
res.send(course);


});
router.put('/api/courses',(req,res)=>{
const {error}=validateCourse(req.body);
if(error) return res.status(400).send(error.details[0].message);
const course={
    id:courses.length+1,
    name:req.body.name
};
courses.push(course);
res.send(course);

});
router.get('/api/courses/:id',(req,res)=>{
const course = courses.find(c=>c.id===parseInt(req.params.id));
if(!course) return res.status(404).send('The course with the given id is not found');
res.send(course);
});

function validateCourse(course){
    const schema ={
        name:Joi.string().min(3).required()
    };
    return Joi.validate(course,schema);
}

module.exports=router;