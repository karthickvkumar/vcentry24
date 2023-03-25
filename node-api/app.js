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

// http://localhost:4000/student-list
app.get("/student-list", (request, response) => {
  
  var sqlQuery = "SELECT * FROM students_list";

  connection.query(sqlQuery, (error, result) => {
    if(error){
      response.status(500).send(error);
    }
    else{
      response.status(200).send(result);
    }
  })
});

// http://localhost:4000/create-student
app.post("/create-student", (request, response) => {
  var requestData = request.body; 
  console.log(requestData);

  var sqlQuery = `INSERT INTO students_list (name, age, location) VALUES ('${requestData.name}', ${requestData.age}, '${requestData.location}')`;

  console.log(sqlQuery);

  connection.query(sqlQuery, (error, result) => {
    if(error){
      response.status(500).send(error);
    }
    else{
      response.status(200).send(result);
    }
  })
  

});

// http://localhost:4000/edit-student/2
app.put("/edit-student/:id", (request, response) => {
  var id = request.params.id;

  var requestData = request.body; 

  var sqlQuery = `UPDATE students_list SET name='${requestData.name}', age=${requestData.age}, location='${requestData.location}' WHERE serial_number=${id}`;

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

========================================================

USE learning_nodejs;

UPDATE user_profile SET age=30, address='No:101, Sai Nagar, Mumbai' WHERE name='Mr.Hendry';

==============================================================
USE learning_nodejs;

CREATE TABLE students_list(name varchar(255), age int(3), location TEXT, serial_number int AUTO_INCREMENT NOT NULL, PRIMARY KEY(serial_number));

*/

/*
Status Code 
2X - 200, 201, 203 (Success response)
4X - 400, 401, 404 (Client Side error)
5X - 500, 501, 502 (Server Side error)
*/