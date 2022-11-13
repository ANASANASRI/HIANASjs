//EXPRESS :
        // npm install express --save ---- // 2 params
const express=require("express");
const index=express();
//--------------------------------------

//EJS :
        // npm install ejs ---- // 2 params
index.set('views','./src/views') //fin 7at lviews
index.set('view engine','ejs') //nach katgolih rak khedam b .ejs
//--------------------------------------

//BD MONGOOSE:
        //------------------------------
const mongoose = require('mongoose');
const dbURI = "mongodb+srv://anasbd:anas30@cluster0.fv0ksoj.mongodb.net/db_test?retryWrites=true&w=majority";

mongoose.connect(dbURI)
    .then(result=>console.log('connect'))
    .catch(err => console.log(err));
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