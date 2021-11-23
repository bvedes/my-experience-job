const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router = require("./routes/routes");
app.use("/api/v1", router);

module.exports = app;
