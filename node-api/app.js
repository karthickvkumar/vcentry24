var express = require("express");
var cors = require("cors");
var mysql = require("mysql");

var app = express();
var http = require("http").createServer(app);

app.use(cors({
  credentials : true,
  origin: "*"
}));

app.use(express.json());

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Test@123",
  database: "learning_nodejs",
  port: 3306
});

connection.connect((error) => {
  if(error){
    throw error;
  }
  else{
    console.log("MySQL Server Connected Successfully");
  }
})

// http://localhost:4000/user-list
app.get("/user-list", (request, response) => {
  
  var sqlQuery = "SELECT * FROM user_profile";

  connection.query(sqlQuery, (error, result) => {
    if(error){
      response.status(500).send(error);
    }
    else{
      response.status(200).send(result);
    }
  })
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

========================================================
Authentication ERROR

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Test@123';
flush privileges;

*/