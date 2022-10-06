const express = require('express');
const app = express();
const fs = require('fs');
const url = require('url');

app.get('/', (req,res) =>{

    fs.readFile("./index.html", "utf8", function(err,data){
        if(err) throw err;

        res.send(data);
    });
});

app.listen(3333, ()=>{
    console.log("I am listing to you");
});