const bcrypt = require("bcryptjs")
const ObjectId = require("mongodb").ObjectId;

const users = [
      {
    name: 'admin',
    lastName: 'admin',
    email: 'admin@admin.com',
    password: bcrypt.hashSync('admin123', 10),
    isAdmin: true,
  },
  {
      _id: ObjectId("625add3d78fb449f9d9fe2ee"),
    name: 'Kris',
    lastName: 'Beka',
    email: 'krisbeka@yahoo.com',
    password: bcrypt.hashSync('kris2002', 10),
  },
]

module.exports = users