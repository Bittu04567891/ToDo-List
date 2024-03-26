const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

app.use(cors());
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const cardRoute = require("./routes/card");
mongoose
  .connect(
    "mongodb+srv://sultanbittu775:bittu@blog-app-cluster.okfkswm.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("DB connection successful");
  })
  .catch((err) => console.log(err));
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/card", cardRoute);

app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "client", "build")));
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(5000, () => {
  console.log("Backend server running");
});
