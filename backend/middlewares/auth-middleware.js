const jwt = require("jsonwebtoken");
const User = require("../models/user-model");
const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    const jwtToken = token.replace("Bearer ", "").trim();

    try {
      const isVerrified = jwt.verify(jwtToken, process.env.JWT_SECRET);

      const userData = await User.findOne({ email: isVerrified.email }).select(
        "-password"
      );
      req.user = userData;  
      req.token = jwtToken;
      req.userId = userData._id;

      next();
    } catch (error) {
      next(error);
    }
  } else {
    res.status(401).send({message: "Unauthorized Access Please Login"});
  }
};



module.exports = authMiddleware;
