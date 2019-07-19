let express = require("express");
let bodyParser = require("body-parser");
let app = express();
let contactsRoutes = require("./routes/contact");
let mongoose = require("mongoose");
let dotenv = require('dotenv');
dotenv.config();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

let uri = process.env.MONGO_ACCESS;

mongoose.connect(uri, {useNewUrlParser: true});

var db = mongoose.connection;

if (!db) {
    console.log("connection error db");
}
else {
    console.log("DB connected successfully");
}

var port = process.env.PORT || 8080;

app.use("/api", contactsRoutes);
app.listen(port, function() {
    console.log("Listening on port " + port);
});