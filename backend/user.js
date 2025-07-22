const { configDotenv } = require("dotenv");
const express = require("express");
const { JsonWebTokenError } = require("jsonwebtoken");
const app = express()
app.use(express.json())
require('dotenv').config();
const port = 3000



app.post("api/v1/signup",async(req,res)=>{
    try  {
    Username = req.body.Username
    Password = req.body.Password

        res.json({
            message:"you just signed up",
            Username
        })
     } catch (error) {
        res.status(500).json({
            error:"you failed to do signup"
        })
    }
})
app.post("/signin",async(req,res)=>{
    try {
        Username=req.body.Username
        Password=req.body.Password
        res.status(200).json({
            messgae :"welcome back User"
        })
    } catch (error) {
        res.status(500).json({
            error:"failed to login",
            error
        })
        
    }
})
app.post ("/api/v1/txn/sign",(req,res)=>{

})

app.post ("/api/v1/txn",(req,res)=>{
    
})


app.listen(port)


