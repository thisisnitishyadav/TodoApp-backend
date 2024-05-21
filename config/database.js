const mongoose=require("mongoose");

require("dotenv").config();

const dbConnect = ()=> {
    mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser:true,
      useUnifiedTopology:true,
    })
    .then(()=>console.log("connection successful with database"))
    .catch((error)=>{
        console.log("error in connection with database");
        console.log(error.message);
        process.exit(1);
    });
}

module.exports=dbConnect;

//connection setup between nodejs application with mongodb database