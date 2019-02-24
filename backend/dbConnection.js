const mongoose = require("mongoose");
const options = { useNewUrlParser: true, useCreateIndex: true };

mongoose.connect("mongodb://127.0.0.1:27017/songs", options);
var connection = mongoose.connection;
connection.on("error", console.error.bind(console, "connection error:"));
