const mongoose=require("mongoose") //odm(model o documments)


const clientSchema=new mongoose.Schema({
        name:String,
        description:String,
        price:Number
});


const client = mongoose.model("client",clientSchema)
module.exports=client;