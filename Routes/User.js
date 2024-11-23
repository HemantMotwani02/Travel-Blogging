const express = require('express');
// const User = require('../Models/');
const { HandleLogin, ValidateUser, Register, SubmitData, AddBlog, PostBlog, Home, } = require('../Controllers/User');
const router = express.Router();



router.get('/', HandleLogin);

// for login!
router.post('/ValidateUser', ValidateUser);

// for registration!
router.get('/Register', Register);
router.post('/SubmitData', SubmitData);

//Blog
router.get('/AddBlog', AddBlog);
router.post('/PostBlog', PostBlog);


router.get("/home", Home);
// router.get('*', (req, res) => { res.send("Page Not Found"); res.end(); });

module.exports = router;