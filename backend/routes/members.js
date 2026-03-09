const express = require("express");
const router = express.Router();

const memberController = require("../controllers/memberController");

router.get("/members", memberController.getMembers);

router.post("/payment", memberController.updatePayment);

module.exports = router;
