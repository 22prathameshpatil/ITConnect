const routerContact = require("express").Router();
const {handleContact} = require("../controllers/contact-controller");
const validate = require("../middlewares/validate-middleware");
const contactSchema = require("../validators/contact-validator");

routerContact.route("/").post(validate(contactSchema),handleContact);

module.exports = routerContact;     