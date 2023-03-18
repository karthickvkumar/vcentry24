var express = require("express");
var cors = require("cors");
var mysql = require("mysql");
const { query } = require("express");

var app = express();
var http = require("http").createServer(app);

app.use(cors({
  credentials : true,
  origin: "*"
}));

app.use(express.json());

// http://localhost:4000/user-list
app.get("/user-list", (request, response) => {
  var users = [
    {name: "Karthick", age: 28},
    {name: "Kumar", age: 28},
    {name: "John", age: 28},
    {name: "Yuvi", age: 28},
  ];

  response.status(200).send(users);
});


var port = process.env.PORT || 4000;
http.listen(port, () => {
  console.log("THE Node JS Sever is running on PORT 4000");
});


/*SQL QUERY 

CREATE DATABASE learning_nodejs;

=========================================

USE learning_nodejs;

CREATE TABLE user_profile (name varchar(255), age int(3), address TEXT, outOfCountry boolean);

=============================================

USE learning_nodejs;

INSERT INTO user_profile (name, age, address, outOfCountry) VALUES ('Mr.Hendry', 26, 'No:12, ECR Road, Chennai', false);
INSERT INTO user_profile (name, age, address, outOfCountry) VALUES ('Miss,Rose', 22, 'No:12, KYC Road, Chennai', true);

=================================================

USE learning_nodejs;

SELECT * FROM user_profile;
*/