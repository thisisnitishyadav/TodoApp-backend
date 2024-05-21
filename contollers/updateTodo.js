//import model
const Todo =require("../models/Todo");

//define route handler
exports.updateTodo=async(req,res)=>{
    try{
       const{id}=req.params;
       const{title,description}=req.body;

       const todo =await Todo.findByIdAndUpdate(
        {_id:id},
        {title,description,updatedAt: Date.now()},
       )

       res.status(200).json({
        success:true,
        data:todo,
        message:`updated successfully`,
       })
    }
    catch(err){
         console.error(err);
         console.log(500).json({
            success:false,
            error:err.message,
            message:"server error",
         })
    }
}