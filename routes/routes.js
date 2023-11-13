const express=require('express');
const usercontroller = require('../controllers/usercontroller');

const router=express.Router();


router.post('/createuser',usercontroller.createUser);

module.exports=router;