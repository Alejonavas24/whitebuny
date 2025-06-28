
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app=express()

app.set("port",3000)

const createUser = require('./CreaetUser');


app.use(bodyParser.json());
app.use('/auth/create', createUser);
//rutas 


app.listen(app.get("port"),()=>{
    console.log("Server is running on port ",app.get("port"))
})

module.exports = app; 