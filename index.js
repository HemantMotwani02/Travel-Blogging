// Importing Modules
const express = require("express");
const app = express();
const http = require('http').Server(app);
const { connectMongoDB, connectMySQL } = require('./Connection/connection');
const { FileUpload } = require("./Middleware/index.js");
const hbs = require('hbs');
const multer = require('multer');
const { ALL } = require("dns");
const bodyParser = require('body-parser');


//importing User Routes
const userRouter = require('./Routes/User.js');
const displayRouter = require('./Routes/Display.js');

// Application
const PORT = process.env.PORT || 2000;
http.listen(PORT, () => {
    console.log("Started Listening at PORT: " + PORT);
});


// Database Connection
connectMongoDB();
connectMySQL();


// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(FileUpload);



// Template Engines
app.set('view engine', 'hbs');
app.set('views', './Views');


//Routes
app.use('/', userRouter);
app.use('/submitData', displayRouter);




