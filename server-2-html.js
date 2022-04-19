var http = require('http');

http.createServer(
    function onRequest(request, response){
        console.log('Requested!');
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write('<h1> Hello World! </h1> <p> Dit is HTML! <p>');
        response.end();
    }
).listen(3000);

console.log('De server luistert op port 3000');