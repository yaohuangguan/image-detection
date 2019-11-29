const uuidv4 = require('uuid/v4')
const db = {
  users: [
    {
      id: uuidv4(),
      name: "sam yao",
      email: "bao@a.com",
      password: 'adqdqwdqwdq',
      job: "worker",
      entry: 0,
      joined: new Date()
    },
    {
      id: uuidv4(),
      name: "go go",
      email: "gao@a.com",
      password: 'vqdqdqwd',
      job: "worker",
      entry: 0,
      joined: new Date()
    }
  ]
};

module.exports = db;
