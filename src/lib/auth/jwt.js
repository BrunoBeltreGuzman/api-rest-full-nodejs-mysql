const jwt = require("jsonwebtoken");
const config = require("../../config/auth.config.js");

const jsonwebtoken = {};

jsonwebtoken.signJwt = async function (user) {
       try {
              const token = await jwt.sign({ user }, config.secret);
              return token;
       } catch (error) {
              throw error;
       }
};

jsonwebtoken.verifyToken = function (req, res, next) {
       let token = req.headers["authorization"];

       if (!token) {
              return res.status(403).send({
                     message: "No token provided!",
              });
       }

       try {
              const decode = jwt.verify(token, config.secret);
              req.user = decode.user;
              next();
       } catch (error) {
              throw error;
       }
};

jsonwebtoken.isUser = async function (req, res, next) {
       console.log("Role: " + req.user.role[0].role);
       if (req.user.role[0].role === "user") {
              next();
              return;
       } else {
              res.status(403).send({
                     message: "Require User Role!",
              });
       }
};

jsonwebtoken.isAdmin = async function (req, res, next) {
       console.log("Role: " + req.user.role[0].role);
       if (req.user.role[0].role === "admin") {
              next();
              return;
       } else {
              res.status(403).send({
                     message: "Require Admin Role!",
              });
       }
};

jsonwebtoken.isReader = async function (req, res, next) {
       console.log("Role: " + req.user.role[0].role);
       if (req.user.role[0].role === "reader") {
              next();
              return;
       } else {
              res.status(403).send({
                     message: "Require Reader Role!",
              });
       }
};

jsonwebtoken.allRols = async function (req, res, next) {
       next();
       return;
};

module.exports = jsonwebtoken;
