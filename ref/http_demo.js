const http = require('http');


//create HTPP server
http.createServer( (require,response) => {
    //write response
    // response.write('<h1>Hello World!!!!!<h1>');
    response.end();

}).listen(5000, () => {
    console.log('Server is running ...');
});