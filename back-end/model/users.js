const db = require("../db/db");
const bcrypt = require("bcryptjs");
const uuidv4 = require("uuid/v4");

exports.login = (req, res) => {
  const { email, password } = req.body;
  let user = db.users.find(user => email === user.email);
  if (!user) return res.status(400).json({ message: "user not found" });
  try {
    bcrypt.compare(password, user.password, function(err, result) {
      if (err) throw err;
      if (email === user.email && result === true) {
        return res.json({
          message: "success",
          data: {
            name: user.name,
            email: user.email,
            id: user.id,
            joined: user.joined,
            entry: user.entry
          }
        });
      }
      return res
        .status(401)
        .json({ message: "username or password not correct" });
    });
  } catch (error) {
    console.log(error);
  }
};
exports.signup = (req, res) => {
  const { email, name, password } = req.body;
  console.log(email, name, password);

  let user = db.users.find(user => email === user.email);
  if (user) {
    return res.status(400).json({ message: "user exist" });
  }

  try {
    bcrypt.hash(password, 10, function(err, hash) {
      console.log("password in hash", password);
      if (err) {
        throw err;
      }
      let newUser = {
        id: uuidv4(),
        name: name,
        email: email,
        password: hash,
        entry: 0,
        joined: new Date()
      };
      db.users.push(user);
      res.status(200).json({ message: "sign up OK", data: newUser });
    });
  } catch (error) {
    console.log(error);
  }
};
exports.profile = (req, res) => {
  const { id } = req.params;
  let found = db.users.find(user => {
    console.log("user", user);
    console.log("params id", id);
    return user.id === id;
  });
  console.log("found here", found);
  if (found) {
    res.json(found);
  } else {
    res.status(404).json({ message: "error" });
  }
};
exports.image = (req, res) => {
  const { id } = req.body;
  let found = false;
  if (found) {
    db.users.forEach(user => {
      if (user.id === id) {
        found = true;
        user.entry++;
        return res.json(user.entry);
      }
    });
  }
  return res.status(400).json({ message: "not found" });
};
