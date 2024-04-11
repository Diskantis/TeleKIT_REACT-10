const express = require("express");
const fs = require("fs");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

require("dotenv").config();
const PORT = process.env.PORT;

const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.set("view engine", "jade");

app.use('/uploads', express.static('uploads'));
app.use('/api', require('./routes/routers'));

if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

// module.exports = app;
