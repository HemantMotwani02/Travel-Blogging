const express = require('express');
const { GetCityBlogs, Back, GetStateBlogs, DisplayAllBlogs, BackHome, GetUserData, AllBlogs } = require('../Controllers/Display');
const router = express.Router();


router.get('/getCitycard', GetCityBlogs);

router.get("/user/home", Back);

router.get('/getCardBlogs', GetStateBlogs);


router.get('/AllBlogs', DisplayAllBlogs);

router.get('/Home', BackHome)

// this event needs only email!
router.get('/IndividualDATA', GetUserData)

router.get('/AllBlogsSection', AllBlogs)


module.exports = router;