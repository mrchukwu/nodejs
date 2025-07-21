const http = require('http'); 
const fs = require('fs');

//Fect the HTML file
const html = fs.readFileSync('./template/index.html', 'utf-8');

//create a server
const server = http.createServer((request, response) => {
    response.end(html);
    console.log("A new request recieved")
});

//listen to server
server.listen(8000, '127.0.0.1', () => {
    console.log("Server is listening on port 8000");  
});

