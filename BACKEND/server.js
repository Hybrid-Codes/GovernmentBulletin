// // https://www.w3schools.com/nodejs/nodejs_modules.asp
// const http = require('http');

// const PORT = 3000;

// // https://www.w3schools.com/nodejs/met_http_createserver.asp
// const server = http.createServer((req,res)=> {
//     res.end('Hello World');
// });

// server.listen(PORT);

// https://expresjs.com/en/started/hello-world.html
const express = require('express')
const app = express()
const port = 3000

// https://expressjs.com/en/4x/api.html#app.get
app.get('/', (req, res) => {
    res.send('Hello World Express')
})

app.listen(port)
