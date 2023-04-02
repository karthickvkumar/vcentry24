var express = require("express");
var cors = require("cors");
var mysql = require("mysql");

var app = express();

var http = require("http").createServer(app);

app.use(express.json({limit : "50mb"}));
app.use(cors({
  credentials: true,
  origin: "*"
}));

var connection  = mysql.createConnection({
  host: "localhost",
  database: "travelix",
  user: "root",
  password: "Test@123",
  port: 3306
})

connection.connect((error) => {
  if(error){
    throw error;
  }

  console.log("MySQL workbench connected");
});


var port = process.env.PORT || 4000;
http.listen(port, () => {
  console.log("Node js server is running on port 4000");
}) 

// http://localhost:4000/create/destination
app.post("/create/destination", (request, response) => {
  var resposneData = request.body;

  var sqlQuery = `INSERT INTO destinations (destinationName, destinationImage, destinationCount) VALUES ('${resposneData.destinationName}', '${resposneData.destinationImage}', ${resposneData.destinationCount})`;

  connection.query(sqlQuery, (error, result) => {
    if(error){
      response.status(500).send(error);
    }
    else{
      response.status(200).send("Destination had been created");
    }
  })
});

// http://localhost:4000/list/destinations
app.get("/list/destinations", (request, response) => {

  var sqlQuery = `SELECT * FROM destinations;`;

  connection.query(sqlQuery, (error, result) => {
    if(error){
      response.status(500).send(error);
    }
    else{
      response.status(200).send(result);
    }
  })

})

/*
CREATE DATABASE travelix;

CREATE TABLE destinations (destinationName varchar(255), destinationImage longtext, destinationCount int, id int NOT NULL AUTO_INCREMENT, PRIMARY KEY(id));


*/
