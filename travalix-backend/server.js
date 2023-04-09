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
  host: "db4free.net",
  database: "travelix",
  user: "vcentry",
  password: "test@123",
  port: 3306
})

// Local MySQL
// user: "root",
// password: "Test@123",

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

// https://travelix-backend.onrender.com/create/destination
app.post("/create/destination", (request, response) => {
  var resposneData = request.body;

  var sqlQuery = `INSERT INTO destinations (destinationName, destinationLocation, destinationImage, destinationCount) VALUES ('${resposneData.destinationName}', '${resposneData.destinationLocation}', '${resposneData.destinationImage}', ${resposneData.destinationCount})`;

  connection.query(sqlQuery, (error, result) => {
    if(error){
      response.status(500).send(error);
    }
    else{
      response.status(200).send("Destination had been created");
    }
  })
});

// https://travelix-backend.onrender.com/list/destinations
app.get("/list/destinations", (request, response) => {

  var destinationName = request.query.destinationName;
  var destinationLocation = request.query.destinationLocation;

  if(!destinationName || destinationName == "" ){
    var sqlQuery = `SELECT * FROM destinations;`;
  }
  else{
    var sqlQuery = `SELECT * FROM destinations WHERE destinationName='${destinationName}' OR destinationLocation='${destinationLocation}'`;
  }

  connection.query(sqlQuery, (error, result) => {
    if(error){
      response.status(500).send(error);
    }
    else{
      response.status(200).send(result);
    }
  })

})

// https://travelix-backend.onrender.com/delete/destionation/2
app.delete("/delete/destionation/:id", (request, response) => {
  var id = request.params.id;
  var sqlQuery = `DELETE FROM destinations WHERE id=${id}`;
  connection.query(sqlQuery, (error, result) => {
    if(error){
      response.status(500).send(error);
    }
    else{
      response.status(200).send("Destination had been deleted");
    }
  })
})

// https://travelix-backend.onrender.com/create/hotel
app.post("/create/hotel", (request, response) => {
  var resposneData = request.body;

  var sqlQuery = `INSERT INTO hotels (hotelName, hotelImage, hotelLocation, hotelPrice) VALUES ('${resposneData.hotelName}', '${resposneData.hotelImage}', '${resposneData.hotelLocation}', ${resposneData.hotelPrice})`;

  connection.query(sqlQuery, (error, result) => {
    if(error){
      response.status(500).send(error);
    }
    else{
      response.status(200).send("Hotel had been created");
    }
  })
});

// https://travelix-backend.onrender.com/list/hotels
app.get("/list/hotels", (request, response) => {

  var hotelLocation = request.query.hotelLocation;

  if(hotelLocation && hotelLocation == ""){
    var sqlQuery = `SELECT * FROM hotels;`;
  }
  else{
    var sqlQuery = `SELECT * FROM hotels WHERE hotelLocation='${hotelLocation}'`;
  }

  connection.query(sqlQuery, (error, result) => {
    if(error){
      response.status(500).send(error);
    }
    else{
      response.status(200).send(result);
    }
  })

})

// https://travelix-backend.onrender.com/delete/hotel/2
app.delete("/delete/hotel/:id", (request, response) => {
  var id = request.params.id;
  var sqlQuery = `DELETE FROM hotels WHERE id=${id}`;
  connection.query(sqlQuery, (error, result) => {
    if(error){
      response.status(500).send(error);
    }
    else{
      response.status(200).send("Hotel had been deleted");
    }
  })
})

/*
CREATE DATABASE travelix;
=======================================
USE travelix;

CREATE TABLE destinations (destinationName varchar(255), destinationLocation varchar(255), destinationImage longtext, destinationCount int, id int NOT NULL AUTO_INCREMENT, PRIMARY KEY(id));

============================================================
USE travelix;

CREATE TABLE hotels (hotelName varchar(255), hotelImage longtext, hotelLocation varchar(255), hotelPrice int, id int NOT NULL AUTO_INCREMENT, PRIMARY KEY(id));

*/
