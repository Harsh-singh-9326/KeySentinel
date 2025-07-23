const { PrismaClient } = require('@prisma/client');
const {  Keypair } = require('@solana/web3.js');
const prisma = new PrismaClient();
const express = require("express");
const app = express()
app.use(express.json())
require('dotenv').config();
const port = 3000
const jwt = require("jsonwebtoken")
secretKey = process.env.JWT_Secret

app.post("/api/v1/signup",async(req,res)=>{
    try  {
    const Username = req.body.Username
    const Password = req.body.Password

    
        const keypair= Keypair.generate()
    const user = await prisma.user.create({
        data:{
            Username:Username,
            password:Password,
            publicKey:keypair.publicKey.toString(),
            privateKey:Buffer.from(keypair.secretKey).toString('hex')
        
        }
    })

        res.json({
            message:"you just signed up",
            publicKey: keypair.publicKey.toString()

        })
     } catch (error) {
        res.status(500).json({
            error:"you failed to do signup"
        })
        console.error("Signup error:", error);

    }
})
app.post("/api/v1/signin",async(req,res)=>{
    try {
     const Username=req.body.Username
     const Password=req.body.Password

        const user = await prisma.user.findFirst({
            where :{
                Username:Username,
                password:Password
            }
        }
    )
    if(user){
        const token = jwt.sign({id:user.id}, secretKey, { expiresIn: '1h' })
        res.status(200).json({
            messgae :"welcome back User",
            token
        })}else {
            res.status(404).json({
                message:"invalid credential" 
            })
        }
    } catch (error) {
        res.status(500).json({
            error:"failed to login",
            error
        })
        console.error("Signin error:", error);

        
    }
})
app.post ("/api/v1/txn/sign",(req,res)=>{

})

app.post ("/api/v1/txn",(req,res)=>{
    
})


app.listen(port)


