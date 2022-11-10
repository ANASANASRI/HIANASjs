const express=require("express");
const index=express();

const route=require("./src/routers/HomeRoute.js");
index.use(express.urlencoded({extended:true}));

index.use("/home",route); ///////////

index.listen(7200,function(){
    console.log("Sever is running");
});