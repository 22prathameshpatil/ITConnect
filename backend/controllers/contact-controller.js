const Contact = require("../models/contact-model");
const User = require("../models/user-model");

async function handleContact(req, res, next) {
  try {
    const existingUser = await User.findOne({
      username: req.body.username,
      email: req.body.email,
    });

    if (!existingUser) {
      return res.status(404).json({ "message": "User not found" });
    }

    const response = req.body;
    await Contact.create(response);

    return res
      .status(201)
      .json({ "message": "Contact Successfully", "contact": response.message });

  } catch (err) { 
    next(err); 
  }
}

module.exports = { handleContact };
