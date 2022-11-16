const express = require("express");
const app = express();
const path = require('path');

const msg = "User request the server";

app.use(express.static('./public'))
// set up Page path
const homePage = path.join(__dirname, 'navbar-app/index.html')

app.get("/", (req, res) => {
  res.sendFile(homePage)
});

app.get('/about', (req, res) => {
    console.log(msg);
    res.status(200).send("About Page");
})

app.all('*', (req, res) => {
    res.status(404).send("<h1>404 PAGE NOT FOUND</h1>");
})

app.listen(5000, () => {
    console.log("Server listening on port 5000");
    
});
