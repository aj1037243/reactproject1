var express = require('express');
var mongoose = require('mongoose');

var App = express();
const cors = require("cors");

const bodyParser = require("body-parser");
//const jwt = require("jsonwebtoken");
//const bcrypt = require("bcrypt");
//const User = require("./models/user")



//body parser is used to be middleware to recieve form data
const urlencodedParser = bodyParser.urlencoded({extended: false})
App.use(bodyParser.json(), urlencodedParser)

App.use(cors());
App.use(express.json());

//mongoose connection: Working as of 11/28/2022
const dataBaseURI = "mongodb+srv://AthensTourism:Athens2022@project1-cluster.cjinr0q.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(dataBaseURI, { useNewUrlParser:true, 
                            useUnifiedTopology: true})
.then((res) => {


//====================End User Login/Registraion===========================
App.use("/", require("./routes/userInformation"));
//====================UserCreateContent====================================
//userContent:
App.use("/", require("./routes/userContentRoute"));
//====================UserCreateContent End================================


//express server port
App.listen(3001, () => 
console.log("Success -> Express Server is running on port 3001)"))
})


