const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const User = require("../models/user.js");


const register =async(req,res)=>{
    try{
        const hashedKey = await bcrypt.hash(req.body.password, 7);
        let object = {
            name: req.body.name,
            email: req.body.email,
            password: hashedKey,
            balance: 100,
            transactions:[]
        }
        console.log(object);
        await User.create(object);
        res.send("User created");
    }catch{
        res.send("Oops!! Something went wrong");
    }
    
}

module.exports = register;