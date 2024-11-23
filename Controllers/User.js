const bcrypt = require('bcrypt');
const { connectMySQL } = require('../Connection/connection');


//Handle Login Page
async function HandleLogin(req, res) {
    try {
        res.render('../Views/login.hbs')
    } catch (e) {
        res.send(e);
        res.end();
    }
}



// Login
async function ValidateUser(req, res) {

    // Email and Password from login
    const { email, password } = req.body;

    //Checking Email in DB

    connectMySQL()
        .then((connection) => {
            connection.query("Select * from UserIdPass where email = ?", email, (err, result) => {
                if (err) throw err;

                //Result Not Found
                if (result.length === 0) { res.send("Account does not exist"); res.end(); console.log("Account does not exist"); }
                //Result Found
                if (result.length === 1) {

                    //Checking Password
                    bcrypt.compare(password, result[0].password, (err, isMatch) => {
                        if (err) throw err;

                        //Correct Credentials
                        if (isMatch) {
                            res.redirect(`/user/home?email=${email}`)
                            // res.render(`C:/Users/vedant.rathore/Desktop/nodejs,mongoDB, javaScript/client-side/templates/views/homePage.hbs`, { userDetails });
                        }
                        //Incorrect Credentials
                        else {
                            console.log("Check your password");
                            res.send("Check your password");
                            res.end();
                        }
                    });

                }

            })

        })//end
}

async function Back(req, res) {
    (req, res) => {
        const email = req.query.email
        res.render(`../views/homePage.hbs`, { email });
    }
}
//Handle Register Page
async function Register(req, res) {
    res.render('../Views/register.hbs')
}


//Registration
async function SubmitData(req, res) {

    //Details from Register Form
    const { email, password, cpassword, fname, lname } = req.body;
    console.log(password);
    //Comparing Password and Confirm Password
    if (password === cpassword) {
        try {
            const connection = await connectMySQL();
            //Hashing password upto 10 salt rounds using Bcrypt 
            bcrypt.hash(password, 10, (err, hashed) => {

                if (err) {
                    console.error("Error hashing password:", err);
                    throw err; // Handle the error appropriately
                }

                // Insert the user details into the database
                connection.query('INSERT INTO UserIdPass ( email, password, first_name , last_name ) VALUES (?,?,?,?)', [email, hashed, fname, lname], (err, result) => {
                    if (err) {
                        console.error("Error submitting data:", err);
                        res.status(500).send("Error submitting data");
                    } else {
                        console.log("Data Submitted");
                        res.status(200).render(`../Views/homePage.hbs`, { email });
                    }
                });
            });
        } catch (error) {
            console.error("Error:", error);
            res.status(500).send("Internal Server Error");
        }
    } else {
        console.log('password not matching!')
    }


}


// Redirect to Home Page
async function Home(req, res) {
    const email = req.query.email
    res.render(`../Views/homePage.hbs`, { email });

}




//Add Blog Page
async function AddBlog(req, res) {
    const email = req.query.email
    console.log('hey')
    res.render('../Views/addblog.hbs', { email })
}


//Posting Blog
async function PostBlog(req, res) {

    const title = req.body.title
    const desc = req.body.description
    const country = req.body.country
    const state = req.body.state
    const city = req.body.city
    const image = req.body.image

    const fname = req.query.fname
    const lname = req.query.lname
    console.log(fname)

    try {

        const doc1 = ALLCITYCARD({
            fname: fname,
            lname: lname,
            title: title,
            desc: desc,
            conutry: country,
            state: state,
            city: city,
            image: image
        })

        const result = await doc1.save()
        if (result == null) {

        } else {
            res.render('../Views/success.hbs')

        }

    } catch (err) {
        console.log(err)
    }


}


module.exports = { HandleLogin, ValidateUser, Register, SubmitData, AddBlog, PostBlog, Home };