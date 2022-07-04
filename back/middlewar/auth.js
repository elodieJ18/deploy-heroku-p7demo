// middleware/authjwt.js

const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.user;



module.exports.checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if(token){
    jwt.verify(token, process.env.KEY_TOKEN, async(error, decodedtoken) => {
      if(error){
        res.locals.user = null;
        res.cookie("jwt", "", {maxAge: 1});
        next();
      }
      else {
        let user = await User.findByPK(decodedtoken.id);
        res.locals.user = user;
        next();
      }
      
    })
  }
  else {
    res.locals.user = null;
    next();
  }
}