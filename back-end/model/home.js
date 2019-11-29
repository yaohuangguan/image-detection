const db = require("../db/db");
exports.index = (req, res) => {
  res.json(db.users);
};
