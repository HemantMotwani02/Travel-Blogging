const cards = require('../Models/ALLCARDS.js')
const CITYCARD = require('../Models/cities.js')
const ALLCITYCARD = require('../Models/cards.js');



// City Blog Cards
async function GetCityBlogs(req, res) {
    try {
        const result = await CITYCARD.find()
        console.log(result)
        res.send(result)
    } catch (err) {
        console.log(err)
    }
}


async function Back(req, res) {
    (req, res) => {
        const email = req.query.email
        res.render(`../views/homePage.hbs`, { email });
    }
}

// State Blog Cards
async function GetStateBlogs(req, res) {
    async (req, res) => {
        try {
            let result = await cards.find()
            console.log(result);
            res.send(result)
        } catch (err) {
            console.log(err)
        }
    }
}

//
async function DisplayAllBlogs(req, res) {
    (req, res) => {
        const email = req.query.email
        res.render('../views/AllBlogsSection.hbs', { email })
    }
}


async function BackHome(req, res) {
    res.render(`../views/homePage.hbs`)
}


async function GetUserData(req, res) {
    const email = req.query.email
    connection.query(`Select * from userIdPass where email = ?`, email, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result[0])
        res.send(result[0]);

    })
}

async function AllBlogs(req, res) {
    (req, res) => {
        res.render('../views/AllBlogsSection.hbs')
    }
}

module.exports = { GetCityBlogs, Back, GetStateBlogs, DisplayAllBlogs, BackHome, GetUserData, AllBlogs };