
const express = require("express");
const UserModle = require("../../DBrepo/UserModle");
const HutModle = require("../../DBrepo/HutModle");


let router = express.Router();

router.post("/create-user", (req, res)=>{
    UserModle.saveUser(req.body.data)
                .then((userInstaance)=>{
                    res.send({status: true, user: userInstaance});
                },(err)=>{
                    res.send({status: false, message: err});
                });
});



module.exports = router;
