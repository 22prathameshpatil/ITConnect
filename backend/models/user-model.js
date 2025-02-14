const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    const hashed_password = await bcrypt.hash(user.password, salt);
    user.password = hashed_password;
  } catch (error) {
    return next(error);
  }
});

userSchema.methods.generateToken = async function () {
  try {
    const user = this;
  const token = await jwt.sign(
    { 
      userId: user._id.toString(), 
      email: user.email,
      isAdmin: user.isAdmin,
    }, 
    process.env.JWT_SECRET,
    {
      expiresIn: "10d",
    },
    );
  return token;
  } catch (error) {
    console.error(error);
  }
};

userSchema.methods.decryptPassword = async function (password) {
  try {
    const passwordMatch = await bcrypt.compare(password, this.password);
    if (!passwordMatch) {
      return false;
    }
    return true;
  } catch (error) {
    console.error(error);
  }
};

const User = mongoose.model("user", userSchema);

module.exports = User;
