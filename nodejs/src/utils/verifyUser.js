
const jwt = require('jsonwebtoken');

const verifyUser = async(req,res, next) =>{
 try {
    if(!req.body.token){
        res.json({
            message: "token is required"
        })
    }
    console.log(req.body.token, process.env.secretkey);
    var decoded = await jwt.verify(req.body.token || "", process.env.secretkey);
    if (decoded) {
        next();
    }
    else {
        res.json({
            message: "you don't access rights to call the route"
        })
    }
 } catch (error) {
    res.json({
        message: "you don't access rights to call the route", 
        error
    })
 }

}

module.exports = verifyUser