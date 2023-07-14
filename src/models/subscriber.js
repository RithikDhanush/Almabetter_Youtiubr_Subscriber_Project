// This code defines a Mongoose schema for a subscriber with three fields: name, subscribedChannel, and subscribedDate. 
// The name and subscribedChannel fields are of type String and are required. 
// The subscribedDate field is of type Date, required, and has a default value of the current date and time.
const mongoose = require("mongoose");

const subscriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    subscribedChannel: {
        type: String,
        required: true,
    },
    subscribedDate: {
        type: Date,
        required: true,
        default: Date.now,
    },
});

// The code exports a Mongoose model named "Subscriber" based on the defined schema. 
// This model can be used to perform CRUD operations on the subscribers collection in the connected MongoDB database.
module.exports = mongoose.model("Subscriber", subscriberSchema);
