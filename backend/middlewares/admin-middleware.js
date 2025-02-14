const checkAdminMiddleware = (req, res, next) => {
  try {
    const user = req.user;
    if (!user.isAdmin) {
      res
        .status(403)
        .send({ message: "Unauthorized Access You are not admin" });
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = checkAdminMiddleware;
