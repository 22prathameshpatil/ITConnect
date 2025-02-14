const express = require("express");
const routerService = express.Router();
const { handleService } = require("../controllers/service-controller");

routerService.route("/").get(handleService);

module.exports = routerService;
