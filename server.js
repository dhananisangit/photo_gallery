const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
// app.use(express.static(path.join(__dirname, "dist")));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.get("/main.*", function (req, res) {
    res.sendFile(path.join(__dirname, "dist", req.url.split("/")[1]));
});

app.listen(5000, () => {
    console.log("server started on port 5000");
});
