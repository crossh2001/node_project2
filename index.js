const express = require('express');
const app = express();
const fs = require('fs');
const url = require('url');
const http = require('http');


/* write a list with project about_me Home Resume Contact */
 

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

app.get('/resume', (req,res) =>{

    fs.readFile("./resume.html", "utf8", function(err,data){
        if(err) throw err;

        res.send(data);
    });
});

app.get('/contact', (req,res) =>{

    fs.readFile("./contact.html", "utf8", function(err,data){
        if(err) throw err;

        res.send(data);
    });
});


app.listen(3333, ()=>{
    console.log("I am listing to you");
});