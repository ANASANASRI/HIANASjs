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
const users = require("./src/modules/users.js");
const dbURI = "mongodb+srv://anasbd:anas30@cluster0.fv0ksoj.mongodb.net/db_users?retryWrites=true&w=majority";

mongoose.connect(dbURI)
        .then(result=>console.log('connect'))
        .catch(err => console.log(err));
//--------------------------------------

//ROUTE:
        //------------------------------
const route=require("./src/routers/HomeRoute.js");
index.use("/",route);
//---------------------------------------


/*     // get data
index.get("/getuser",(req,res)=>{
users.find().then((result)=>{res.json(result)});
});
*/

/*     // add data

        index.get("/adduser",(req,res)=>{

        const use = new users({ 
                name: 'doufiane' , 
                description:'im the second user in this web', 
                age: 18
        });

        use.save().then(()=>{res.send("add done")});

        /* const client =new clients({
                name:"iphone",
                description:"description",
                price:10000 
                });
        client.save().then(()=>console.log(great));
        });
        
 */

index.use(express.urlencoded({extended:true}));

//PORT :
        //---------------
index.listen(7000,function(){
        console.log("Sever is running");
});
//-----------------------------------------
