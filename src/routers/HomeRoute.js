//EXPRESS :
        // ----------------
const express=require("express")
//-------------------------

//EXPRESS.ROUTER :
const route=express.Router()
//---------------------------

//APPEL CONTROLLER :

const HomeControllers=require("../controllers/HomeControllers");

route.get("/home",HomeControllers.homeget)
route.get("/index",HomeControllers.indexget)
//
route.get("/getdata",HomeControllers.getdata)
route.get("/adddata",HomeControllers.adddata)
route.get("/updatedata",HomeControllers.updatedata)

//-----------------------------

//MODULE.EXPORTS  (route)
        //--------------
module.exports=route
//-----------------------