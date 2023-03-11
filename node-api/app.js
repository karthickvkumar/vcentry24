var express = require("express");
var cors = require("cors");
var mysql = require("mysql");

var app = express();
var http = require("http").createServer(app);

var port = process.env.PORT || 4000;
http.listen(port, () => {
  console.log("THE Node JS Sever is running on PORT 4000");
})
