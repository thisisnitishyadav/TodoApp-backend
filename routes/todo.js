const express=require("express");
const router =express.Router ();

//import controller
const {createTodo}=require("../contollers/createTodo");
const{getTodo,getTodoById}=require("../contollers/getTodo");
const{updateTodo}=require("../contollers/updateTodo");
const{deleteTodo}=require("../contollers/deleteTodo");

//define api routes(path)
router.post("/createTodo",createTodo);  
router.get("/getTodo",getTodo);
router.get("/getTodo/:id",getTodoById);
router.put("/updateTodo/:id",updateTodo);
router.delete("deleteTodo/:id",deleteTodo); 

module.exports=router;