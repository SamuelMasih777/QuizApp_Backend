const jwt = require("jsonwebtoken");
require("dotenv").config();
//Creating a Middleware to verify the token
const authVerify = (req,res,next)=>{
    const token = req.headers.authorization;
    try {
        const decodedToken = jwt.verify(token,process.env.SECRET_TOKEN);
        req.user = {userId:decodedToken.id}
        return next();
    } catch (error) {
        console.error(`Error form server ${JSON.stringify(error)}`)
    }
}
module.exports = authVerify;