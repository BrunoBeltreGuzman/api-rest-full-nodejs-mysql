const express = require("express");
const controllers = require("./controllers");

const jsonwebtoken = require("../../lib/auth/jwt.js");

const router = express.Router();

router.post("/signin", [jsonwebtoken.allRols], controllers.signin);
router.post("/signup", [jsonwebtoken.allRols], controllers.signup);

module.exports = router;
