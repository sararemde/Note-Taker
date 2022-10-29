// Set PORT and initialize express app
const PORT = process.env.PORT || 3001;
const app = express();

// dependencies
const express = require("express");


const fs = require("fs");
const path = require('path');

// Setup data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

// routes file
require('./routes/routes')(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});