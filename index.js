const express=require("express");
const app=express();

const route=require("./routes/clientsRoutes")

app.use(express.urlencoded({extended:true}));

app.use("/",route)

app.listen(7000,function(){
    console.log("Sever is running");
});