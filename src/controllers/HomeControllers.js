// DADTA USERS
const users = require("../modules/users.js");

// SERVICES
const service = require("../services/hommeService.js");

//FUNCTION :

    //fuction services:
    const gotohome=(req,res)=>{
        service.gotohome()
    };

    const getalldata=(req,res)=>{
        service.getalldata().then(users=>{res.json({users})})
    //kina .findById("id") 
    };
    //------------------

const homeget=(req,res)=>{
    res.render('home', { });
};

const indexget=(req,res)=>{
    res.render('index', { });
};

const getdata=(req,res)=>{
    users.find().then(users=>{res.json({users})});
    //kina .findById("id")
};

const updatedata=(req,res)=>{
    users.findById("637366bc0cedaa54a02a82c0").then(users=>{
        users.name ="anas";
        users.save().then(()=>{
            res.send("updated")
        });
    });
};

const deletedata=(req,res)=>{
    users.findByIdAndDelete("//637366bc0cedaa54a02a82c0//").then(()=>{
            res.send("deleted")
        });
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
    getdata,
    updatedata,
    deletedata
}
//------------------------
