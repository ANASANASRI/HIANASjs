const mongoose=require("mongoose") //odm(model o documments)

// definir le schema 
const userSchema=new mongoose.Schema({
        name:String ,
        description:String ,
        age:Number
});
//-----------------------------------

//const users = require("./src/modules/users.js");{nafss smiyty lconst li kin f index}
const users=mongoose.model('users',userSchema);
//------------------------------------

//
module.exports=users;
//------------------------------------