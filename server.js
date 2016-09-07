/**
 * Created by naga- on 9/7/2016.
 */
var http = require('http');

http.createServer(function(request,responce){
    response.writeHead(200);
    response.end('First Node Page');
}).listen(3000);

console.log('Server running on port 3000');