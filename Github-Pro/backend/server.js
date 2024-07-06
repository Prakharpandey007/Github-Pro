import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userroutes.js';
import exploreRoutes from './routes/exploreroutes.js';
import cors from'cors'
import connectMongoDB from './db/database.js';
import authRoutes from './routes/authroutes.js';
import './passport/githubauth.js'
import passport from 'passport';
import session from 'express-session';
import path from "path";
dotenv.config();
const PORT=process.env.PORT ||5000
//run server and client on same doamin
const __dirname=path.resolve();
console.log("dirname",__dirname);
const app=express();
console.log('Base directory:', path.resolve());
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());


app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);
app.use("/api/explore",exploreRoutes);
app.use(express.static(path.join(__dirname,"/frontend/dist")));
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});
app.listen(PORT,()=>{
    console.log(`server started on port  ${PORT}`);
    connectMongoDB();
})
