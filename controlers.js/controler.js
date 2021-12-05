const token = require("jsonwebtoken");
const User = require("../models.js/model");
const bcrypt= require ("bcrypt")

const users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    password: "123",
    wilaya: "wilaya",
    option:"option",
  },
  
];
const login = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const user = users.find((user) => user.email == email);
  if (!user) {
    return res.status(404).send({
      message: "user not found",
      data: {},
    });
  }
  if (user.password == password) {
    const token = jwt.sign(email, "jfudfiujf");
    return res.status(200).send({
      message: "login success",
      data: {
        token: token,
      },
    });
  } else {
    return res.status(401).send({
      message: "wrong password",
      data: {},
    });
  }
};

const createUser = async (req, res) => {
  const user = req.body;
  console.log("data =", user);
  user.id = users.length + 1;
  const password = await bcrypt.hash(user.password, 10);
  users.push(user);
  const utilisateur = new User({
    ...req.body,
    password
  });
  await utilisateur.save();

  res.status(200).send({
    message: "User created successfully",
    data: user,
  });
};

const getUser = async (req, res) => {
  const users = await User.find({})  
  res.status(200).send({
    message: "Fetched successfully",
    data: users
  });
};

const getUserById = (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => user.id == id);
  if (!user) {
    return res.status(404).send({
      message: "User not found",
      data: {},
    });
  }
  res.status(200).send({
    message: "Fetched successfully",
    data: user,
  });
};

const deleteUser = (req, res) => {
  const id = req.params.id;
  const usersIndex = users.findIndex((user) => user.id == id);

  if (usersIndex < 0) {
    return res.status(404).send({
      message: "User not found",
      data: {},
    });
  }
  users.splice(usersIndex, 1);
  res.status(200).send({
    message: "Deleted successfully",
    data: {},
  });
};

const updateUser = (req, res) => {
  const id = req.params.id;
  const user = req.body;
  const index = users.findIndex((user) => user.id == id);
  if (index < 0) {
    return res.status(404).send({
      message: "User not found",
      data: {},
    });
  }
  users[index] = {
    id: id,
    ...user,
  };
  res.status(200).send({
    message: "User updated successfully",
    data: users[index],
  });
};

module.exports = {
  login,
  getUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};