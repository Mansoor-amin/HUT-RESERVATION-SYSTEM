
const express =require('express');
const UserModle = require("../../DBrepo/UserModle");

const router = express.Router();

router.use(function(req, res, next) {
  console.log(req.method, req.url, req.path);
  
  next();
});

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/dashbord', (req, res) => {
  console.log(req.session);
  res.send('welcome to dashbord');
});
router.post('/signup', (req, res) => {
  console.log(req.body.user)
  UserModle.saveUser({
        name: req.body.user.name,
        phoneNo: req.body.user.phoneNo,
        location:req.body.user.location,
        userType: req.body.user.userType,
        email: req.body.user.email,
        password: req.body.user.password,
        city : req.body.user.city,
        state : req.body.user.state,
        country: req.body.user.country
    })
                .then((userInstaance)=>{
                    res.send({status: true, user: userInstaance});
                },(err)=>{
                    res.send({status: false, message: err});
                });
});

module.exports = router;