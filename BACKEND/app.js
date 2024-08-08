// https://expressjs.com/en/started/hello-world.html
const express = require('express');
const app = express();

// https://expressjs.com/en/4x/api.html#app.get
app.get('/', (req, res) => {
    res.send('Hello World Express')
});


app.get('/test', (req, res) => {
    res.send('Hello World Express /test')
});

module.exports = app;
