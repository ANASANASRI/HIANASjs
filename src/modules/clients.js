const mongoose=require("mongoose") //odm(model o documments)

// definir le schema 
const clientSchema=new mongoose.Schema({
        name:String,
        description:String,
        price:Number
});
//-----------------------------------

//
const Client = mongoose.model("clients",clientSchema);
//------------------------------------

//
module.exports=Client;
//------------------------------------