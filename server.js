//packages imports
import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import cors from 'cors';
import morgan from "morgan";

//files imports
import connectDB from "./config/db.js";

//routes imports
import testRoute from './routes/testRoutes.js';
import authRoutes from './routes/authRoutes.js';
import errroMiddelware from "./middlewares/errorMiddleware.js";



//config .env
dotenv.config()

//mongodb connection
connectDB();


//react objects
const app = express()

//middleware
app.use(express.json());
app.use(cors())
app.use(morgan("dev"));


//routes
app.use('/api/v1/test', testRoute);
app.use('/api/v1/auth', authRoutes)


//validation midddleware
app.use(errroMiddelware)

//port
const PORT = process.env.PORT || 8060

//listen
app.listen(8060, () => {
    console.log(`Node Server Running In ${process.env.DEV_MODE} Mode on port no  ${PORT}`.bgCyan.white)
        ;
})