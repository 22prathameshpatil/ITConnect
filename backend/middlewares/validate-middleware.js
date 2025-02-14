const validate = (zodSchema) => async (req, res, next) => {
  try {
    const parseBody = zodSchema.parseAsync(req.body);
    req.body = await parseBody;
    next();
  } catch (err) {
    const status = 422;
    const message = "Fill the input properly";
    const extraDetails = err.errors[0].message;

    const error = {
      status,
      message,
      extraDetails,
    };


    next(error);
  }
};

module.exports = validate;
