//FUNCTION :
const homeget=(req,res)=>{
    res.render('home', { });
};

const indexget=(req,res)=>{
    res.render('index', { });
};
//---------------------------


//MODULE.EXPORTS (function)
        //--------------
module.exports={
    homeget,
    indexget
}
//------------------------
