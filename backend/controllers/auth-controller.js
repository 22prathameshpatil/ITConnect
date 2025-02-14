const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

async function handleAuth(req, res) {
  try {
    res.status(200).send("This is Login Page");
  } catch (err) {
    res.status(400).send("This Page is not found");
  }
}

async function handleRegister(req, res, next) {
  try {
    const existingUser = await User.findOne({
      username: req.body.username,
      email: req.body.email,
    });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists"});
    }
    let { username, email, password, phone } = req.body;

    // const saltRound = 10;
    // const hashed_password = await bcrypt.hash(password, saltRound);
    // password = hashed_password;

    const userData = await User.create({
      username,
      email,
      password,
      phone,
    });

    // res.status(201).json({ msg: userData, token: await userData.generateToken() });

    res
      .status(201)
      .json({ message: "Register Successfully", user: userData.username });
  } catch (err) {
    // res.status(400).send(err.message);
    next(err);
  }
}

async function handleLogin(req, res, next) {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      const isPasswordValid = await userExist.decryptPassword(password);
      if (!isPasswordValid) {
        return res.status(401).send("Invalid credentials");
      }

      res.status(200).json({
        message: "Login Successfully",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      return res.status(401).send({message:"Invalid credentials"});
    }
  } catch (err) {
    // res.status(500).send("An error occurred while processing your request");
    next(err);
  }
}

async function handleUser(req, res, next) {
  try {
    const userData = req.user;
    res.status(200).json(userData);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  handleAuth,
  handleRegister,
  handleLogin,
  handleUser,
};
