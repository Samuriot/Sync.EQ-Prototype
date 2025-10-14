// import files
const express = require("express");
const db_connection = require("./db");
const port = 3000;
const app = express();

// sets up connection to mongoDB
db_connection();

// default route
app.get('/', (req, res) => {
    res.send("Hello, SyncEQ!");
})

// captures a port to listen for HTTP requests
app.listen(port, () => {
    console.log(`SyncEQ Backend listening on port ${port}`);
})