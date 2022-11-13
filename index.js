//EXPRESS :
        // npm install express --save ---- // 2 params
const express=require("express");
const index=express();
//--------------------------------------

//EJS :
        // npm install ejs ---- // 2 params
index.set('views','./src/views')
index.set('view engine','ejs')
//--------------------------------------

//BD MONGOOSE:
        //------------------------------
const mongoose = require('mongoose');

//--------------------------------------

//ROUTE:
        //------------------------------
const route=require("./src/routers/HomeRoute.js");
index.use("/",route);
//---------------------------------------

index.use(express.urlencoded({extended:true}));

//PORT :
        //---------------
index.listen(7000,function(){
    console.log("Sever is running");
});
//-----------------------------------------