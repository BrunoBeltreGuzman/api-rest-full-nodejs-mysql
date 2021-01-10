const express = require("express");
const controllers = require("./controllers");

const router = express.Router();

const jsonwebtoken = require("../../lib/auth/jwt.js");

router.post(
       "/",
       [jsonwebtoken.verifyToken, jsonwebtoken.isUser],
       controllers.insert
);

router.put(
       "/:id",
       [jsonwebtoken.verifyToken, jsonwebtoken.isUser],
       controllers.update
);

router.delete(
       "/:id",
       [jsonwebtoken.verifyToken, jsonwebtoken.isUser],
       controllers.delete
);

router.get(
       "/",
       [jsonwebtoken.verifyToken, jsonwebtoken.isUser],
       controllers.findAll
);

router.get(
       "/:id",
       [jsonwebtoken.verifyToken, jsonwebtoken.isUser],
       controllers.findById
);

module.exports = router;
