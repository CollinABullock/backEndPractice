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

app.post("/apiData", (req, res) => {
  // Assuming req.body contains the data for the new item
  const newItem = req.body;
  // Perform operations to save the new item
  // For example, you can push the new item to the importData array
  importData.push(newItem);
  // Send a response indicating success
  res.status(201).json({ message: "Item created successfully", item: newItem });
});

app.listen(port, () => {
  console.log("This app is listen on port ${3000}");
})
