const express=require("express")
const route=express.Router()

const HomeControllers=require("../controllers/HomeControllers");

route.get("/home",HomeControllers.homeget)// 3lach "/"

module.exports=route