import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userroutes.js';
import exploreRoutes from './routes/exploreroutes.js';
import cors from'cors'
import connectMongoDB from './db/database.js';
import authRoutes from './routes/authroutes.js';

dotenv.config();
const app=express();
app.use(cors());

app.get("/",(req,res)=>{
    res.send("server is ready");
});
app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);
app.use("/api/explore",exploreRoutes);
app.listen(8080,()=>{
    console.log("server started on port 8080");
    connectMongoDB();
})