//import model
const Todo=require("../models/Todo");

//define routes
exports.deleteTodo=async(req,res)=>{
    try{
        const {id}=req.params;
        await Todo.findByIdAndDelete(id);


      //delete entry
        res.json(
            {
                success:true,
                message:"entry deleted successfully"
            }
          );
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}