// This code connects to a MongoDB database using the provided connection URI (dbUrl) and Mongoose. 
// It refreshes the data in the "subscribers" collection by deleting all existing documents and then inserting new documents from the data array. 
// It logs relevant messages during the process and disconnects from the database when done.

const mongoose = require("mongoose");
const Subscriber = require("./models/subscriber");
const data = require("./data");
require("dotenv").config();

//connect to database

const dbUrl = process.env.MONGODB_URI;

mongoose
.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.log("Database connected");
})
.catch((err)=>{
    console.log("Error to connect database", err);
});

//Refresh data in subscribers collection

async function refreshData() {
    try {
        await Subscriber.deleteMany({}, {wtimeout: 30000});

        console.log("Deleted all subscribers");
        const newSubscribers = await Subscriber.insertMany(data);
        console.log(`Added ${newSubscribers.length} new subscribers`);
    }catch (err) {
        console.log("Error refreshing data", err);
    }finally {
        mongoose.disconnect();
        console.log("Disconnected from database");
    }
}

refreshData();
