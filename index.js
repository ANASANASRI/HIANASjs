const express=require("express");
const index=express();

const route=require("./src/routers/HomeRoute.js");

index.use(express.urlencoded({extended:true}));

index.use("/all",route); ///////////

index.listen(7000,function(){
    console.log("Sever is running");
});