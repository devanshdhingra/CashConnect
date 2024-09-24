const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const User = require("../models/user.js");


const transactions=async(req,res)=>{
    const u = await User.findOne({email: req.body.email});
    if(u == undefined || u ==null){
        res.send('Sender Is not Identified');
    }
    try{
        if(await bcrypt.compare(req.body.password, u.password)){

            res.send(u.transactions);

        }
        else{
            res.send('Password Incorrect');
        }
    }catch(e){
        res.send('Oops! something went wrong');
    }

}

module.exports = transactions;