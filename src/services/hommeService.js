// DADTA USERS
const users = require("../modules/users.js");

//FUNCTION :
const gotohome=()=>{
    res.render('home', { });
};

const getalldata=async ()=>{
    return await users.find()
    /* .then(users=>{res.json({users})});
    //kina .findById("id") */
};
//---------------------------


//MODULE.EXPORTS (function)
        //--------------
module.exports={
    gotohome,
    getalldata
}
//------------------------
