const express = require("express");
const router = express.Router();

// const virus = require('../models/virusVices')
// const orm = require('../config/orm')

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/api/gameroom", (req, res) => {
  res.render("gameroom");
});

module.exports = router;
