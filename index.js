// express: This dependency is used to create an Express.js application. It provides 
// functions and utilities for handling HTTP requests, defining routes, and managing middleware.
const express = require("express");

// app: This line imports the app module from a file called "app.js". The app module is typically 
// the entry point of an Express.js application, where the routes and middleware are defined.
const app = require("./app.js");

// mongoose: This dependency is used for connecting to a MongoDB database and performing database operations. 
// It allows you to define schemas and models for your data.
const mongoose = require("mongoose");

// dotenv: This dependency is used for loading environment variables from a .env file into the application's environment. 
// Environment variables are useful for storing sensitive information or configuration options.
require("dotenv").config();

// port: This variable defines the port number (3000) on which the application will listen for incoming requests.
const port = 3000;

//Parse JSON bodies
// The code configures Mongoose to allow flexibility with query parameters by setting "strictQuery" to false. 
// It adds Express.js middleware to handle parsing JSON and URL-encoded data in request bodies. 
mongoose.set("strictQuery", false);

// The middleware express.json() parses incoming JSON payloads, while express.urlencoded() 
// parses URL-encoded data from HTML forms into the req.body object.
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Connect to database

const dbUrl = process.env.MONGODB_URI;
mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true})

// This code attaches a .then() callback to mongoose.connect(), which executes when the database connection is established. 
// It logs a success message and starts the application server by listening on the specified port using app.listen(). 
// The callback confirms the connection and starts the server.
.then((result)=>{
    console.log("connected to database");
    app.listen(port, () => console.log(`App listening on port ${port}`));
})


// This code attaches a .catch() callback to mongoose.connect(), executing if there is an error during the database connection. 
// It logs the error message to the console, allowing for debugging or error tracking. 
// The callback handles connection errors and logs them for troubleshooting.
.catch((err)=>{
    console.log(err);
});
