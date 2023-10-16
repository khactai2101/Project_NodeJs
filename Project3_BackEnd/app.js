const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const sequelize = require("./src/libs/mysql.connect");
const initRouters = require("./src/routers");

//upload file
const upload = require("./src/middlewares/uploadFile");
app.use(express.static(__dirname + "/src/public/uploads"));

app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "PUT"],
  })
);
app.use(express.json());

const port = process.env.APP_PORT || 3000;

initRouters(app);

app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    // console.log(__dirname + "/src/public/uploads");
    console.log(`App listening on port ${port}, http://localhost:${port}`);
    // console.log(upload);
  } catch (error) {
    console.log("err", error);
  }
});
