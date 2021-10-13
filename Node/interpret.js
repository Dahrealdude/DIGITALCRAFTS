const http = require("http");
const myImpirtedModule = require('./module')
const cow = require('cowsay');

//which computer, where, are my files being hosted from?
//Think of this like a your house aka my computer
const hostname = "127.0.0.1";

//The exact room within the house aka my computer
const port = 3000;

//let's use the http module to create the server

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end(myImpirtedModule.colors.primary);
});

server.listen(port, hostname, () => {
    console.log(cow.say({
      text:`Server running at http://${hostname}:${port}/`})
      )});
