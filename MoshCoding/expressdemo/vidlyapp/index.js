const Joi = require('joi');
const express=require('express');
const app = express();

app.use(express.json());

const genres=[
    {id:1,name:'Action'},
    {id:2,name:'Horrer'},
    {id:3,name:'Drama'}
];
//router to get the list of the genres
app.get('/api/genres',(req,res)=>{
res.send(genres);
});

app.post('/api/genres',(req,res)=>{
const {error}= validateGenre(req.body); 
if(error) return res.status(400).send(error.details[0].message);

    const genre = {
        id:genres.length+1,
        name:req.body.name
    }
    genres.push(genre);
    res.send(genre);
});

//code for the put router with input validation of the id and put data validation as well
app.put('/api/genres/:id',(req,res)=>{
const genre = genres.find(c=>c.id===parseInt(req.params.id));
if(!genre) return res.status(404).send("the genre with the given id was not found.");
const {error} = validateGenre(req.body);
if(error) return res.status(400).send(error.details[0].message);
genre.name = req.body.name;
res.send(genre);
});


//code for the delete with the id validatin

app.delete('/api/genre/:id',(req,res)=>{
const genre = genres.find(c=>c.id ===parseInt(req.params.id));
if(!genre) return res.status(404).send("The genre with the given id was not found");
const index = genres.indexOf(genre);
genres.splice(index,1);
res.send(genre);
});

//code to get the id with genres
app.get('api/genres/:id',(req,res)=>{
const genre = genres.find(c=>c.id===parseInt(req.params.id));
if(!genre) res.status(404).sendDate("The genre with the given ID was not found.");
res.send(genre);
});

function validateGenre(genre){
    const schema ={
        name : Joi.string().min(3).required()
    };
    return Joi.validate(genre,schema);
}

const port =process.env.PORT ||8080;
app.listen(port,()=>console.log(`Listning to the ${port}...`));


