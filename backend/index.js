const express = require("express");
const db = require("./dbConnection");
const app = express();
const cors = require("cors");
global.__root = __dirname + "/";

app.use(cors());

var SongController = require(__root + "songController");
app.use("/api/songs", SongController);

app.listen(3000, () => console.log("starting app"));
