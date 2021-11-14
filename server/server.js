var express = require('express');
const { applyMiddleware } = require('redux');
var app = express();

var port = 3100;

//hello world. currently fetched from home.js in client
app.get("/placeholder", (req, res) => {
    res.json({message: "Hello world!"});
})



app.listen(port, () =>{
    console.log('Server listening at '+port);
});