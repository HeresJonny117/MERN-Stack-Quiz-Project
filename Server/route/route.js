const express = require("express");

const { Questions, Quiz } = require("../controllers/controller");

const router = express.Router();

router.get("/questions", Questions);
router.post("/submit", Quiz);

module.exports = router;
