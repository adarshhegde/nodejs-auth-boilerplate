const jwt = require("jwt-then");
const { wrap : _ } = require("../utils");
module.exports = _(async (req, res, next) => {
    const{ authorization } = req.headers;
    if(!authorization?.length > 8) return next({status:500, message:"Unauthorised"});
    const token = authorization.split(" ")[1];
    try {
        if(await jwt.verify(token, process.env.SECRET)) 
            return next();
        else  
            return next({status:500, message:"Unauthorised"});
    }catch(err) {
        return next({status:500, message:"Unauthorised"});
    }
})

