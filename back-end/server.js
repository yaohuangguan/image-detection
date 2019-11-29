const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors')
const homeController = require("./model/home");
const userController = require("./model/users");
const app = express();

app.set("port", process.env.PORT || 8000);
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json({ extended: true }));
// app.use(express.static(__dirname + "/public"));
const{index} = homeController;
const{login,signup,profile,image} = userController;

app.get("/", index);
app.post("/signin", login);
app.post("/signup", signup);
app.get("/profile/:id", profile);
app.get("/image", image);

app.get("*", (req, res) => res.send("not exist"));

const port = app.get("port");
app.listen(port, () => console.log(` app listening on port ${port}!`));
