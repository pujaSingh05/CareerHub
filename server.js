//imports
import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";

//config .env
dotenv.config()

//mongodb connection
connectDB();


//react objects
const app = express()

//router
app.get('/', (req,res) =>{
    res.send("<h1> Welcome To career hub</>")


})

//port
const PORT = process.env.PORT  || 8060

//listen
app.listen(8060, () => {
    console.log(`Node Server Running In ${process.env.DEV_MODE} Mode on port no  ${PORT}`.bgCyan.white)
;})