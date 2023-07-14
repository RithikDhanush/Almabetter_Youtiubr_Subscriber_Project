// mongoose: This dependency is used for connecting to a MongoDB database and performing database operations. 
// It allows you to define schemas and models for your data.
const mongoose = require("mongoose");
// request: This dependency is used for making HTTP requests to the application. 
// It is commonly used for testing APIs by sending requests and asserting the responses.
const request = require("supertest");
// app: This line imports the app module from a file called app.js. The app module is typically 
// the entry point of an Express.js application, where the routes and middleware are defined.
const app = require("../app");
// dotenv: This dependency is used for loading environment variables from a .env file into the application's environment. 
// Environment variables are useful for storing sensitive information or configuration options.
require("dotenv").config();

//connecting to the database before each test

beforeEach(async ()=>{
    await mongoose.connect(process.env.MONGODB_URI);
});

//closing database after each test

afterEach(async ()=>{
    await mongoose.connection.close();
});


// This test case verifies that a GET request to the root URL ("/") of 
// the application returns a response with a status code of 200 and the expected content type of HTML.
describe("GET /", ()=>{
    it("should return index.html", async()=>{
        const res = await request(app).get("/");
        expect(res.statusCode).toBe(200);
        expect(res.header["content-type"]).toBe("text/html; charset=UTF-8");
    });
});

// This test case ensures that a GET request to the "/subscribers" endpoint of 
// the application returns a response with a status code of 200, indicating a successful request.
// The purpose of this test is to validate that the endpoint is functioning correctly and
// returning an array of subscribers.
describe("GET /subscribers",()=>{
    it("should return an array of subscribers", async()=>{
        const res = await request(app).get("/subscribers")
        expect(res.statusCode).toBe(200);
    });
});


// This test case ensures that a GET request to "/subscribers/names" returns a successful 
// response (status code 200) containing an array of subscriber names and subscribed channels. 
// It validates the endpoint's functionality and the presence of subscribers' details.
describe("GET /subscribers/names", ()=>{
    it("should return an array of subscribers name and subscribedChannel", async()=>{
        const res = await request(app).get("/subscribers/names");
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
    });
});

// This test case validates that a GET request to "/subscribers/:id" returns a successful 
// response (status code 200) with the expected subscriber details, including a matching _id property.
//  It ensures the correct functionality of the endpoint for retrieving subscriber information based on the provided ID.
describe("GET /subscribers/:id", ()=>{
    it("should return an array of subscribers name and subscribedChann422ce91el", async()=>{
        const res = await request(app).get("/subscribers/6423d6d9d5ae0662e3803ca9");
        expect(res.statusCode).toBe(200);
        expect(res.body._id).toBe("6423d6d9d5ae0662e3803ca9");
    });
});// mongoose: This dependency is used for connecting to a MongoDB database and performing database operations. 
// It allows you to define schemas and models for your data.
const mongoose = require("mongoose");
// request: This dependency is used for making HTTP requests to the application. 
// It is commonly used for testing APIs by sending requests and asserting the responses.
const request = require("supertest");
// app: This line imports the app module from a file called app.js. The app module is typically 
// the entry point of an Express.js application, where the routes and middleware are defined.
const app = require("../app");
// dotenv: This dependency is used for loading environment variables from a .env file into the application's environment. 
// Environment variables are useful for storing sensitive information or configuration options.
require("dotenv").config();

//connecting to the database before each test

beforeEach(async ()=>{
    await mongoose.connect(process.env.MONGODB_URI);
});

//closing database after each test

afterEach(async ()=>{
    await mongoose.connection.close();
});


// This test case verifies that a GET request to the root URL ("/") of 
// the application returns a response with a status code of 200 and the expected content type of HTML.
describe("GET /", ()=>{
    it("should return index.html", async()=>{
        const res = await request(app).get("/");
        expect(res.statusCode).toBe(200);
        expect(res.header["content-type"]).toBe("text/html; charset=UTF-8");
    });
});

// This test case ensures that a GET request to the "/subscribers" endpoint of 
// the application returns a response with a status code of 200, indicating a successful request.
// The purpose of this test is to validate that the endpoint is functioning correctly and
// returning an array of subscribers.
describe("GET /subscribers",()=>{
    it("should return an array of subscribers", async()=>{
        const res = await request(app).get("/subscribers")
        expect(res.statusCode).toBe(200);
    });
});


// This test case ensures that a GET request to "/subscribers/names" returns a successful 
// response (status code 200) containing an array of subscriber names and subscribed channels. 
// It validates the endpoint's functionality and the presence of subscribers' details.
describe("GET /subscribers/names", ()=>{
    it("should return an array of subscribers name and subscribedChannel", async()=>{
        const res = await request(app).get("/subscribers/names");
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
    });
});

// This test case validates that a GET request to "/subscribers/:id" returns a successful 
// response (status code 200) with the expected subscriber details, including a matching _id property.
//  It ensures the correct functionality of the endpoint for retrieving subscriber information based on the provided ID.
describe("GET /subscribers/:id", ()=>{
    it("should return an array of subscribers name and subscribedChann422ce91el", async()=>{
        const res = await request(app).get("/subscribers/6423d6d9d5ae0662e3803ca9");
        expect(res.statusCode).toBe(200);
        expect(res.body._id).toBe("6423d6d9d5ae0662e3803ca9");
    });
});
