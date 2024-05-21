const express=require("express");
const app=express();

//load config from env file
require("dotenv").config();
const PORT =process.env.PORT || 4000; 

//middleware to parse json request body
app.use(express.json()); 

//import routes for todo api
const todoRoutes=require("./routes/todo");
//mount todo api routes
app.use("/api/v1",todoRoutes);

//satrt server
app.listen(PORT,()=>{
    console.log(`server started succcessfully at ${PORT}`);
})

//connect to database
const dbConnect =require("./config/database");
dbConnect();

//default routes
app.get("/",(req,res)=>{
    res.send(`<h1>this is homepage</h1>`);
})