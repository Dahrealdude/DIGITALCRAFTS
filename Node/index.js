const http = require('http');

const hostname = '127.0.0.1';
const port = 5000;

const express = require('express');
const { request } = require("http");
const app = express();

const server = http.createServer(app);

app.get('/',(req,res) =>{
    res.send('Hello from Express ! by Manny');
});
app.get('/',(req,res) =>{
    res.send('This is a sign up page');
});
server.listen(port, hostname, ()=>{
    console.log(`Server is running http://${hostname}:${port}`)
});
