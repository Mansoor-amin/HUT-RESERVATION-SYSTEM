
const express = require("express");
const UserModle = require("../../DBrepo/UserModle");
const HutModle = require("../../DBrepo/HutModle");


let router = express.Router();
router.use(function(req, res, next) {
  console.log( req.method, req.url, req.path);
  next();
});
router.post("/sign-up", (req, res)=>{
    UserModle.saveUser(req.body.data)
                .then((userInstaance)=>{
                    res.send({status: true, user: userInstaance});
                },(err)=>{
                    res.send({status: false, message: err});
                });
});



module.exports = router;
