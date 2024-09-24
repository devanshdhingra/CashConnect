const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const User = require("../models/user.js");


const pay=async(req,res)=>{
    const hk= await User.findOne({email: req.body.sender});
    if(hk == undefined || hk==null){
        res.send('Sender Is not Identified');
    }

    if(await bcrypt.compare(req.body.password, hk.password)){
        try{
            const r = await User.findOne({email: req.body.reciever});
            if(r==null || r==undefined){
                res.send("Reciever is not Identified");
            }
            const yp_s = hk.balance - req.body.amount;            
            const yp_r = r.balance + req.body. amount;

            let ts="Sent "+req.body.amount+" to "+r.email;
            let tr = "Recieved "+req.body.amount+" from "+hk.email;

            await User.findOneAndUpdate(
                { email: hk.email }, 
                { 
                    $push: { transactions: ts } ,  
                    $set: {balance: yp_s},
                },
                { new: true }  
            );
            await User.findOneAndUpdate(
                { email: r.email }, 
                { 
                    $push: { transactions: tr } ,  
                    $set: {balance: yp_r},
                },
                { new: true }  
            );
            res.send('transaction successfull');

            
        }catch(e){
            res.send('Oops something sent wronf');
        }

    }
else{
    res.send('Password Incorrect')
}}


module.exports = pay;