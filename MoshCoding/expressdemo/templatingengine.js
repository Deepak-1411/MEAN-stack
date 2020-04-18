//in api call suppose want to respond with the html instead of the json,
//in that case we can use the templating engine , that can be done using the PUG(jade),MOstache,EJS
//code using pug how to genrate dynemic html for response

//first we need to save the templating engine
const Joi = require('joi');
const express = require('express');
const helmet = require('helmet');
const morgan= require('morgan');
const config = require('config');
const app= express();
app.engine('pug', require('pug').__express)

app.set('views','D:\\NodeJS\\NodePractice\\MoshCoding\\expressdemo\\views');//Default view engine
app.set('view engine','pug');
app.use(express.json());

app.get('/',(req,res)=>{
res.render('index.pug',{title:'my Express App',message:'Hello'});
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));



