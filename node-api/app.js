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

// http://localhost:4000/user-list
app.get("/user-list", (request, response) => {
  var users = [
    {name: "Karthick", age: 28},
    {name: "Kumar", age: 28},
    {name: "John", age: 28},
    {name: "Yuvi", age: 28},
  ];

  response.status(200).send(users);
})


var port = process.env.PORT || 4000;
http.listen(port, () => {
  console.log("THE Node JS Sever is running on PORT 4000");
});
