// https://expressjs.com/en/started/hello-world.html
const express = require('express');
const app = express();
const urlprefix = '/api';
const mongoose = require('mongosoe');
const Fruit = require('.module/fruit');
const fs = require('fs');
const cert = fs.readFileSync('keys/certificate.pem');
const options = {
    server: {sslCA: cert}};
const connString = 'mongodb+srv://st10086237:auZt2d10HnN6NH8p@cluster0.tq6azhe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

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

// https://expressjs.com/en/4x/api.html#app.get
    // app.get('/', (req, res) => {
    //     res.send('Hello World Express')
    // });

    // app.get('/test', (req, res) => {
    //     res.send('Hello World Express /test')
    // });

// https://www.json.org/json-en.html
// {} = object
// [] = array
app.get(urlprefix+'/orders', (req, res) => {
    const orders = [
        {
            id:"1",
            name: "Orange"
        },

        {
            id:"2",
            name: "Banana"
        },

        {
            id:"3",
            name: "Pear"
        }
    ]
    res.json(
        {
            message: "Fruits",
            orders: orders
        }
    )
});

app.post(urlprefix+'/fruits', (req, res) => {
    const fruit = new Fruit (
        {
            id: req.body.id,
            name: req.body.name
        }
    );
    fruit.save();
    res.status(201).json({
        message: 'Fruit created',
        fruit: fruit
    });
});

module.exports = app;
