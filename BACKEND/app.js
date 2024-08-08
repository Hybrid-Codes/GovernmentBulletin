// https://expressjs.com/en/started/hello-world.html
const express = require('express');
const app = express();
const urlprefix = '/api';

// https://expressjs.com/en/4x/api.html#app.get
app.get('/', (req, res) => {
    res.send('Hello World Express')
});


app.get('/test', (req, res) => {
    res.send('Hello World Express /test')
});

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

module.exports = app;
