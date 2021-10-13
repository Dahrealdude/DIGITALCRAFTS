// DNS Lookup
// Write a program that prompts the user for a domain name, looks up the IP address for the domain, and prints it out.

const dns = require('dns')
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Domain Name: ", function (url) {
    readline.close();
    dns.lookup(url, function (error, address) {
        if (error) {
            console.log(error.message);
            return;
        }
        console.log("IP Address: ", address);
    })
});