const express = require('express');
const app = express();
const fs = require('fs');
const url = require('url');
const http = require('http');

 
http.createServer(function(request, response){
    response.writeHeader(200, {"Content-Type": "text/html"});  
    response.writeFile("<html>");
    response.writeFile("<ul>");
    response.writeFile("<li>");
    response.writeFile("dlkajdfl;dfsla");
    response.writeFile("</li>");
    response.writeFile("</ul>");
    response.writeFile("</html>");  
    response.end(); 
})

app.get('/', (req,res) =>{

    fs.readFile("./index.html", "utf8", function(err,data){
        if(err) throw err;

        res.send(data);
    });
});

app.get('/about',(req,res)=>{
    fs.readFile("./about.html","utf8", function(err, data){
        if(err) throw err;

        res.send(data);
    })
})

app.listen(3333, ()=>{
    console.log("I am listing to you");
});