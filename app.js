
const path = require("path");
const express = require("express");
const app = express();

const publicFolder = path.resolve(__dirname, './public')
app.use(express.static(publicFolder))

app.listen(3030, () => {
  console.log("Servidor corriendo");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./src/views/home.html"));
});


app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "./src/views/register.html"));
});


app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "./src/views/login.html"));
});



