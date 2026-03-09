const express = require("express");

const router = express.Router();

const spinController =
require("../controllers/spinController");

router.post("/spin", spinController.spin);

router.get("/logs", spinController.getLogs);

module.exports = router;
