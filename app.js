// express: This dependency is used to create an Express.js application.
// It provides functions and utilities for handling HTTP requests, defining routes, 
// and managing middleware.
const express = require("express");

// Subscriber: This line imports the Subscriber model from a file located at "./src/models/subscriber". 
// Models in Express.js applications are typically used to define the structure and behavior of data stored in a database.
const Subscriber = require("./src/models/subscriber");

// path: This dependency is a built-in Node.js module used for working with file paths. 
// It provides functions for manipulating and resolving file paths in a platform-independent way.
const path = require("path");

//invoking express function
 const app = express();

//routes
app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "/index.html"));
});

//get all subscribers
app.get("/subscribers", async (req,res,next)=>{
    try{
        let subscribers = await Subscriber.find();
        res.status(200).json(subscribers);
    }catch (err) {
        res.status(500);
        next(err);
    }
});

//get all subscribers name and subscribed channel
app.get("/subscribers/names", async (req,res,next)=>{
    try{
        let subscribers = await Subscriber.find(
           {},
           { name: 1, subscribedChannel: 1, _id: 0 }
        );
        res.status(200).json(subscribers);
    }   catch (err) {
        res.status(500);
        next(err);
    }
});

//get the subscriber by id and handle 400
app.get("/subscribers/:id", async(req,res)=>{
    try{
        let id = req.params.id;
        let subscriber = await Subscriber.findById(id);
        res.status(200).json(subscriber);
    }   catch (error) {
        res.status(400).json({message: error.message})
    }
});

module.exports = app;
