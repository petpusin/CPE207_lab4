const http = require('http');
const fs = require('fs');
const path = require('path');

const server=http.createServer( (req,res) => {
    console.log(req.url);
    if(req.url === '/'){
        // res.writeHead(200,{'content-type': 'text/html'})
        // res.end('<h1>This is index.html</h1>');
        fs.readFile(path.join(__dirname,'public','index.html'), (err,content) =>{
            if(err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html'})
            res.end(content)
        });

    }else if (req.url === '/gallery'){
        // res.writeHead(200,{'content-type': 'text/html'})
        // res.end('<h1>This is ABOUT</h1>');
        fs.readFile(path.join(__dirname,'public','photo.html'), (err,content) =>{
            if(err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html'})
            res.end(content)
        });
    
    }else if (req.url === '/contact'){
        // res.writeHead(200,{'content-type': 'text/html'})
        // res.end('<h1>This is ABOUT</h1>');
        fs.readFile(path.join(__dirname,'public','contact.html'), (err,content) =>{
            if(err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html'})
            res.end(content)
        });
    
    }else if(req.url.match("\.css")){
        var cssPahth = path.join(__dirname,'public',req.url);
        var fileSteam = fs.createReadStream(cssPahth, "UTF-8");
        res.writeHead(200 , {'content-type' : 'text/css'});
        fileSteam.pipe(res);
    }else if(req.url.match("\.jpg")){
        var imagePahth = path.join(__dirname,'public',req.url);
        var fileSteam = fs.createReadStream(imagePahth);
        res.writeHead(200 , {'content-type' : 'image/jpg'});
        fileSteam.pipe(res);
    }else if(req.url === '/main.js'){
        fs.readFile(path.join(__dirname,'public','main.js'), (err,content) =>{
            if(err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/js'})
            res.end(content)
        });
    }else if (req.url === '/api/users'){
        const users = [
            {name: 'John Doe', age :25},
            {name: 'Pet pusin',age : 20},
            {name: 'Bee eiei',age :30}
        ];

        res.writeHead(200, { 'Content-Type': "application/json"});
        res.end(JSON.stringify(users));
    }
    else{
        // res.writeHead(404,{'content-type': 'text/html'})
        // res.end('<h3>Error 404: Not Found</h3>');
        fs.readFile(path.join(__dirname,'public','404.html'), (err,content) =>{
            if(err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html'})
            res.end(content)
        });
    }
});

const PORT = process.env.PORT || 5500;
server.listen(PORT, () =>{
    console.log('Server is running on port: ' + PORT);
});

