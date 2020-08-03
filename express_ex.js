const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const joi = require('joi');

app.use('/public',express.static(path.join(__dirname,'static')));
app.use(bodyParser.urlencoded({'extended':false}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','index.html'));
});

app.post('/',(req,res)=>{
    console.log(req.body);
    const schema = joi.object({
        email : joi.string().trim().email().required(),
        password : joi.string().required().min(8).max(20),
    });
    const r= schema.validate(req.body);
    res.send(r.error?'F':'Done');
});

app.get('/example/:name',(req,res)=>{
    console.log(req.params);
    console.log(req.query);
    res.send('Welcome '+req.params.name);
});

app.listen(8080);