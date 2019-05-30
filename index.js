const express = require("express");
const app = express();

const PORT = 4000;

const handleListen = () => {
  console.log(`Listening on: http://localhost:${PORT}`);
};

const handleHome = (req, res) => {
  res.send("hello, junsik");
};

const handleProfile = (req, res) => {
  res.send("here comes the sun!!");
};
app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListen);
