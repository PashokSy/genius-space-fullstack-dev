const express = require("express");
const multer = require("multer");

const app = express();
const port = 5000;

const upload = multer({
  dest: "uploads/",
}).single("demo_image");

app.get("/", (req, res) => {
  console.log("hello");
});

app.post("/image", (req, res) => {
  upload(req, res, (err) => {
    if (err) return res.status(400).send("Something went wrong");

    res.send(req.file);
  });
});

app.listen(port, () => {
  console.log("server started");
});
