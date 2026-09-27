// require('dotenv').config({path: "./env"})
import dotenv from "dotenv"
import connectDB from "./db/index.js"
 

dotenv.config({ path: "./.env" })

connectDB();




/*
import mongoose from "mongoose";

// Quick approach to start app with db connection

import express from "express"
const app = express();
;(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        app.on("error",(error)=>{
            console.error("Got an error ",error)
            throw  error
        })

        app.listen(process.env.PORT,()=>{
            console.log("App is working on port: ",process.env.PORT);
            
        })
    } catch (error) {
       console.error("Error : ",error) 
       throw error;
    }
})()

*/
