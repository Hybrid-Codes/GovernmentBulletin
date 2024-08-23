// https://expressjs.com/en/started/hello-world.html
const express = require('express');
const app = express();
const urlprefix = '/api';
const mongoose = require('mongoose');
const Fruit = require('./Models/fruit');
const fs = require('fs');
const cert = fs.readFileSync('keys/certificate.pem');
const options = {
    server: { sslCA: cert }};
const connString = "mongodb+srv://st10086237:auZt2d10HnN6NH8p@cluster0.tq6azhe.mongodb.net/farmDatabase?retryWrites=true&w=majority&appName=Cluster0";

const fruitRoutes = require("./routes/fruit");

mongoose.connect(connString)
.then(()=>
{
    console.log('Connected :-)' )
})
.catch(()=>
{
    console.log('NOT connected :-(')
},options);

app.use(express.json());

app.get(urlprefix+'/fruits', (req, res) => {

    Fruit.find().then((fruits)=>{
        res.json(
            {
                message: 'Fruits found',
                fruits:fruits
            }
        )
    })
});

app.post(urlprefix+'/fruits', (req, res) => {
    const fruit = new Fruit (
        {
            id: req.body.id,
            name: req.body.name
        }
    );
    fruit.save().then;
    res.status(201).json({
        message: 'Fruit created',
        fruit: fruit
    });
});

app.delete(urlprefix+"/fruits/:id", (req, res) => {

    Fruit.deleteOne({_id: req.params.id}).then((result)=>{
        res.status(200).json({message: 'Fruits deleted',})
    });
});

module.exports = app;
