//dependencies
const express = require("express");
const path =require("path");

//create server set up port
const port=process.env.PORT || 8080;
const app =express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//listen to port
app.listen(port, ()=> console.log("listening at port ", port))