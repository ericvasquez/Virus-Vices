const express = require("express");
const router = express.Router();

// const virus = require('../models/virusVices')
const orm = require("../config/connection.js").default;

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/api/gameroom", (req, res) => {
  orm.startDecks("blackCards", (res) => [...res]);

  orm.startDecks("whiteCards", (res) => [...res]);

  res.render("index");
});

module.exports = router;
