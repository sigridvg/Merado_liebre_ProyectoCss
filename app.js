
const path = require("path");
const express = require("express");
const app = express();

const publicFolder = path.resolve(__dirname, './public')
app.use(express.static(publicFolder))

app.listen(3030, () => {
  console.log("Servidor corriendo");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/home.html"));
});



