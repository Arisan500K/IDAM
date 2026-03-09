const express = require("express");

const router = express.Router();

const adminController =
require("../controllers/adminController");

router.post("/reset", adminController.resetSpin);

module.exports = router;
