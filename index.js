// I stopped the video (https://www.youtube.com/watch?v=u2Df5A4BS8s) at 5:10

const express = require("express");
const app = express();
const importData = require("./data.json");
let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("You're working hard, buddy")
})

app.get("/apiData", (req, res) => {
  res.send (importData)
})

app.listen(port, () => {
  console.log("This app is listen on port ${3000}");
})
