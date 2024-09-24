
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const User = require("./models/user.js");
const pay = require("./apps/pay.js");
const transactions = require("./apps/transactions.js");
const register = require("./apps/register.js");
const port =3000;
const app = express();


app.use(express.json());

// use the desired mongoDb connection string
mongoose.connect("**************").then(()=>{
    console.log("Mongo connected");
})



app.get('/',(req,res)=>{
    res.send('Root Route');
})

app.post('/transactions',transactions);

app.post('/pay',pay);

app.post('/register',register);


app.listen(port,()=>{
    console.log("Server started");
}) 