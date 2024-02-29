require("dotenv").config();
const express = require("express");
const multer = require("multer");
const bodyParser = require("body-parser");
const { connectDB } = require("./config/db");

const SimpleUser = require("./models/simpleUserModel");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use("/uploads", express.static("uploads"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({
  storage,
  limits: { fileSize: 1000000 },
});

app.get("/", (req, res) => {
  console.log("hello");
});

app.post("/image", (req, res) => {
  upload(req, res, (err) => {
    if (err) return res.status(400).send("Something went wrong");

    res.send(req.file);
  });
});

app.post("/simple-user", async (req, res) => {
  try {
    const doc = await SimpleUser.create(req.body);

    return res.status(200).json(doc);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
});

app.put("/simple-user/:id", upload.single("demo_image"), async (req, res) => {
  try {
    const doc = await SimpleUser.findByIdAndUpdate(
      req.params.id,
      {
        photo: req.file.filename,
      },
      { new: true }
    );

    return res.status(200).json(doc);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
});

app.listen(port, () => {
  connectDB(process.env.MONGO_URI);
  console.log("server started");
});
