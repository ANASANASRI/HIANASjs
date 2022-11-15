// DADTA USERS
const users = require("../modules/users.js");

//FUNCTION :
const homeget=(req,res)=>{
    res.render('home', { });
};

const indexget=(req,res)=>{
    res.render('index', { });
};

const getdata=(req,res)=>{
    users.find().then((result)=>{res.json(result)});
};

const adddata=(req,res)=>{
    const use = new users({ 
            name: 'soufiane' , 
            description:'im the second user in this web', 
            age: 18
    });

    use.save().then(()=>{res.send("add done")});
};
//---------------------------


//MODULE.EXPORTS (function)
        //--------------
module.exports={
    homeget,
    indexget,
    adddata,
    getdata
}
//------------------------
